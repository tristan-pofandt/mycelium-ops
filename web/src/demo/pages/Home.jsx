// Home: one page, six different views. What each persona sees first is what their job needs first. The greeting and the
// start strip stay fixed at the top; the cards below come from the registry (homecards.jsx) in the persona's layout
// (layout.js), which anyone can change with Customise (the kit's customise.jsx): drag by the handle, or Move up and Move down.
import { Link, useNavigate } from "react-router";
import { Icon } from "../../icons.jsx";
import { useToast } from "../../ui.jsx";
import { useCustomise } from "../../customise.jsx";
import { DEVICES, INSPECTIONS, LEAVERS, ROLES, dayOffset, person, siteName, under } from "../data.js";
import { useLiveSites } from "../roster.js";
import { allowed, layoutFor, titleOf } from "../layout.js";
import { HOME_CARDS } from "../homecards.jsx";
import { audit, update, useDemo, usePersona } from "../store.js";

const updatedAt = new Date(Date.now() - 3 * 60e3).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
const greeting = () => { const h = new Date().getHours(); return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening"; };
const avg = (xs) => Math.round(xs.reduce((a, b) => a + b, 0) / xs.length);
const roleName = (id) => ROLES.find((r) => r.id === id)?.name || id;

function Greeting({ line, bad, children }) {
  const p = usePersona();
  return (
    <div className="greeting">
      <h1><span className="rise-mask"><span className="rise">{greeting()}, {person(p.person).name.split(" ")[0]}</span></span></h1>
      <p className={`state-line state-${bad ? "bad" : "ok"}`}>
        <span className={`badge ${bad ? "badge-bad" : "badge-ok"}`}><Icon name={bad ? "down" : "up"} />{bad ? "Needs attention" : "On track"}</span>
        <span>{line}</span>
        <span className="muted small">Updated {updatedAt}</span>
        {children}
      </p>
    </div>
  );
}

// The greeting line for each persona (fixed, not a card).
function GmLine({ children }) {
  const cov = useLiveSites().find((s) => s.id === "twb").kpi.coverage;
  return <Greeting bad line={`2 sites need you today: Ipswich has 23 overdue work orders, and Toowoomba's roster is ${cov}% covered for the next 7 days.`}>{children}</Greeting>;
}
function SiteLine({ me, children }) {
  const s = useLiveSites().find((x) => x.id === me.site);
  return <Greeting bad line={`${s.name}: ${s.kpi.overdue} overdue work orders and OEE at ${s.kpi.oee}%, the lowest of the four sites.`}>{children}</Greeting>;
}
function SupervisorLine({ me, children }) {
  const team = under(me.id);
  const certs = team.flatMap((p) => p.certs);
  return <Greeting line={`Your ${me.shift.toLowerCase()} shift team: ${team.length} people. ${certs.length ? `${certs.length} certificates expire within 4 weeks.` : ""}`} bad={certs.length > 0}>{children}</Greeting>;
}
const EmployeeLine = ({ me, children }) => <Greeting line={`You're on the ${me.shift.toLowerCase()} shift today at ${siteName(me.site)}, ${me.shift === "Day" ? "6:00 to 14:00" : "14:00 to 22:00"}.`}>{children}</Greeting>;
const SecurityLine = ({ children }) => <Greeting bad line={`${LEAVERS.length} former employees still have active cards, and ${INSPECTIONS.filter((i) => i.due < dayOffset(0)).length} inspections are overdue.`}>{children}</Greeting>;
const ItLine = ({ children }) => <Greeting bad line={`${DEVICES.reduce((n, d) => n + d.count, 0)} managed devices; 5 are out of policy. 2 risky sign-ins this week.`}>{children}</Greeting>;
const LINES = { gm: GmLine, site_manager: SiteLine, supervisor: SupervisorLine, employee: EmployeeLine, security: SecurityLine, it: ItLine };

// First visit: what Mycelium is in one line, and three things worth trying. Hidden once dismissed (Reset brings it back).
function StartStrip() {
  const navigate = useNavigate();
  const hidden = useDemo((s) => s.introHidden);
  if (hidden) return null;
  const approve = () => {
    const btn = document.querySelector(".approvals-card .button-primary");
    btn?.scrollIntoView({ block: "center" });
    btn?.focus({ preventScroll: true });
  };
  return (
    <section className="panel-card start-strip" aria-labelledby="start-h">
      <div>
        <h2 id="start-h">Start here</h2>
        <p>Mycelium puts every site's operations, people, schedules and security on one screen, and shows each person only what their role needs.</p>
      </div>
      <div className="actions">
        <button type="button" className="button button-primary" onClick={approve}>Approve Saturday's shutdown</button>
        <button type="button" className="button" onClick={() => update(() => ({ viewer: "site_manager" }))}>See it as a Site Manager</button>
        <button type="button" className="button" onClick={() => navigate("/systems")}>Check our guesses about your systems</button>
        <Link to="/about" className="button">Full guide</Link>
        <button type="button" className="link small" onClick={() => update(() => ({ introHidden: true }))}>Hide this</button>
      </div>
    </section>
  );
}

export default function Home() {
  const p = usePersona();
  const me = person(p.person);
  const toast = useToast();
  const { layouts, grants, roleLayouts } = useDemo();
  const caps = grants[p.id] || [];
  const Line = LINES[p.id] || ItLine;
  const cards = HOME_CARDS.filter((c) => allowed(c, p.id, caps)).map((c) => ({
    id: c.id, title: titleOf(c, p.id), sizes: c.sizes, full: c.full, render: () => <c.component persona={p.id} me={me} />,
  }));
  const board = useCustomise({
    layout: layoutFor(p.id, layouts, grants, roleLayouts), cards,
    resetLabel: "Reset to my role's default",
    addNote: "The cards your role may have that aren't on your Home. A card needing a permission you don't have isn't offered.",
    emptyText: "Your Home has no cards. Use Add a card, or Reset to my role's default.",
    onSave(next) {
      const prev = layouts[p.id];
      update((s) => ({ layouts: { ...s.layouts, [p.id]: next } }));
      audit(`changed their Home layout (${next.length} cards)`);
      toast({ title: "Home saved. Only you see this layout.", tone: "good", action: { label: "Undo", onClick: () => {
        update((s) => { const x = { ...s.layouts }; if (prev) x[p.id] = prev; else delete x[p.id]; return { layouts: x }; });
        audit("undid their Home layout change");
      } } });
    },
    onReset() {
      const prev = layouts[p.id];
      update((s) => { const x = { ...s.layouts }; delete x[p.id]; return { layouts: x }; });
      if (prev) audit(`reset their Home to the ${roleName(p.id)} default`);
      toast({ title: `Home is back to the ${roleName(p.id)} default.`, action: prev ? { label: "Undo", onClick: () => { update((s) => ({ layouts: { ...s.layouts, [p.id]: prev } })); audit("undid their Home reset"); } } : undefined });
    },
  });

  return (
    <>
      <Line me={me}>{board.bar}</Line>
      {p.id === "gm" && <StartStrip />}
      {board.slots}
      {board.extras}
    </>
  );
}
