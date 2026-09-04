import { useMemo, useState } from "react";
import { Activity, ArrowRight, Check, ChevronRight, CircleHelp, Crosshair, Database, Gauge, LockKeyhole, Play, RotateCcw, ShieldAlert, ShieldCheck, Sparkles, Terminal, Wifi, Zap } from "lucide-react";
import { toast } from "sonner";

// Signal Room direction: contemporary enterprise control-room design, with restrained cyan/green signal colors,
// asymmetric command-center layout, IBM Plex Mono metadata, and motion reserved for observable analyst actions.

type Forecast = { label: string; value: number; color: string };

const initialForecast: Forecast[] = [
  { label: "Initial Access", value: 82, color: "#6de7e0" },
  { label: "Execution", value: 11, color: "#8fb7ff" },
  { label: "Persistence", value: 5, color: "#f0b96e" },
  { label: "Lateral Movement", value: 2, color: "#fb707c" },
];
const containedForecast: Forecast[] = [
  { label: "Initial Access", value: 54, color: "#6de7e0" },
  { label: "Execution", value: 7, color: "#8fb7ff" },
  { label: "Persistence", value: 3, color: "#f0b96e" },
  { label: "Lateral Movement", value: 1, color: "#fb707c" },
];

const events = [
  ["10:42:31", "Port scan spike detected", "warning"],
  ["10:42:35", "Failed authentication threshold exceeded", "warning"],
  ["10:42:39", "Suspicious host behavior detected", "alert"],
  ["10:42:43", "Current stage classified as Scanning", "info"],
  ["10:42:45", "AI forecast generated", "success"],
  ["10:42:47", "Initial Access probability increased to 82%", "success"],
] as const;

function Sparkline() {
  const points = "0,70 42,62 84,65 126,42 168,51 210,28 252,37 294,18 336,30 378,12 420,26 462,8";
  return <svg viewBox="0 0 462 82" className="h-[90px] w-full" preserveAspectRatio="none" aria-label="Network activity over the last 10 minutes"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6de7e0" stopOpacity=".22"/><stop offset="100%" stopColor="#6de7e0" stopOpacity="0"/></linearGradient></defs><path d={`M ${points.replaceAll(" ", " L ")}; L 462 82 L 0 82 Z`} fill="url(#area)"/><polyline points={points} fill="none" stroke="#6de7e0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/><line x1="0" y1="81" x2="462" y2="81" stroke="#8eaaa9" strokeOpacity=".18"/></svg>;
}

export default function Home() {
  const [forecast, setForecast] = useState(initialForecast);
  const [contained, setContained] = useState(false);
  const [running, setRunning] = useState(false);
  const [runLabel, setRunLabel] = useState("Forecast ready");
  const [lastUpdated, setLastUpdated] = useState("Just now");
  const [stage, setStage] = useState("Scanning");
  const [showTechnique, setShowTechnique] = useState(false);
  const risk = contained ? "MEDIUM" : "HIGH";

  const stageSteps = useMemo(() => ["Reconnaissance", "Scanning", "Initial Access", "Execution", "Data Theft"], []);
  const runForecast = () => {
    if (running) return;
    setRunning(true);
    const steps = ["Analyzing telemetry...", "Detecting attack stage...", "Generating forecast...", "Forecast complete."];
    steps.forEach((step, index) => setTimeout(() => {
      setRunLabel(step);
      if (index === 1) setStage("Scanning");
      if (index === steps.length - 1) { setRunning(false); setLastUpdated("A few seconds ago"); toast.success("Forecast refreshed from simulated telemetry"); }
    }, index * 700));
  };
  const simulateDefense = () => {
    setContained(true); setForecast(containedForecast); setLastUpdated("Simulation applied");
    toast.success("HOST-07 isolated — forecast updated");
  };
  const resetSimulation = () => {
    setContained(false); setForecast(initialForecast); setLastUpdated("Just now"); toast("Simulation reset");
  };

  return <main className="shell pb-12">
    <header className="container flex items-center justify-between gap-5 border-b border-white/[.07] py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#6de7e0]/30 bg-[#12282b] shadow-[0_0_28px_rgba(109,231,224,.08)]"><img src="/manus-storage/threatcast-mark_097a5e70.png" alt="ThreatCast AI mark" className="h-8 w-8 object-contain" /></div>
        <div><div className="flex items-center gap-2"><h1 className="text-[19px] font-semibold tracking-[-.03em] text-[#eefaf8]">ThreatCast <span className="text-[#6de7e0]">AI</span></h1><span className="rounded border border-[#6de7e0]/30 bg-[#6de7e0]/[.08] px-1.5 py-0.5 font-mono text-[9px] tracking-[.12em] text-[#8eece6]">DEMO MODE</span></div><p className="mt-1 text-xs text-[#71898b]">AI-powered network attack forecasting <span className="mx-1 text-[#3f5558]">/</span> SIH 2026 <span className="mx-1 text-[#3f5558]">/</span> SIH26153</p></div>
      </div>
      <div className="text-right"><div className="flex items-center justify-end gap-2 text-xs font-medium text-[#a6bfbc]"><span className="signal-dot" /> SYSTEM ONLINE</div><p className="mt-1 font-mono text-[10px] text-[#5f7779]">Last updated: {lastUpdated}</p></div>
    </header>

    <div className="container pt-8">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow mb-2">Operational overview / 01</p><h2 className="text-3xl font-semibold tracking-[-.045em] text-[#f0fbf9] sm:text-4xl">From detection to <span className="text-[#6de7e0]">direction.</span></h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#82999a]">Traditional detection answers <span className="text-[#c9dad8]">“What is happening?”</span> ThreatCast AI adds the next decision: <span className="text-[#c9dad8]">“What is likely to happen next?”</span></p></div><button onClick={runForecast} className="button-primary flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold tracking-[.08em] uppercase disabled:cursor-wait disabled:opacity-60"><Play size={14} fill="currentColor" /> {running ? runLabel : "Run Forecast"}</button></div>

      <section className="grid gap-4 lg:grid-cols-[1.35fr_.85fr]">
        <div className="panel p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><p className="eyebrow mb-2">Section 01 / network telemetry</p><h3 className="text-lg font-semibold text-[#e5f2f0]">Live signal surface</h3></div><div className="flex items-center gap-2 rounded-md border border-[#8be28b]/20 bg-[#8be28b]/[.06] px-2 py-1 font-mono text-[10px] text-[#9bdc9b]"><Activity size={12} /> STREAMING</div></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["12,842","Packets Analyzed",Wifi],["47","Failed Logins",LockKeyhole],["183","Port Scan Events",Crosshair],["24","Active Hosts",Database]].map(([value,label,Icon]) => <div key={label as string} className="rounded-lg border border-white/[.07] bg-black/10 p-3.5"><Icon size={15} className="mb-5 text-[#6de7e0]"/><div className="text-2xl font-semibold tracking-[-.04em] text-[#edf8f6]">{value as string}</div><div className="mt-1 text-[11px] text-[#71898b]">{label as string}</div></div>)}</div><div className="mt-5 border-t border-white/[.06] pt-4"><div className="mb-2 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.13em] text-[#668083]">Network activity / last 10 min</span><span className="font-mono text-[10px] text-[#6de7e0]">↑ 18.4%</span></div><Sparkline/><div className="mt-[-3px] flex justify-between font-mono text-[9px] text-[#53696b]"><span>-10m</span><span>-8m</span><span>-6m</span><span>-4m</span><span>-2m</span><span>now</span></div></div></div>

        <div className="panel gridline p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="eyebrow mb-2">Section 02 / progression</p><h3 className="text-lg font-semibold text-[#e5f2f0]">Attack stage timeline</h3></div><Terminal size={18} className="text-[#607b7d]" /></div><div className="mt-7 space-y-3">{stageSteps.map((item, index) => <div key={item} className={`flex items-center gap-3 ${item === stage ? "text-[#eafaf7]" : "text-[#61787a]"}`}><div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${item === stage ? "border-[#6de7e0] bg-[#6de7e0]/15 text-[#6de7e0]" : "border-white/10 bg-white/[.025]"}`}>{index + 1}</div><div className={`h-px w-5 ${item === stage ? "bg-[#6de7e0]" : "bg-white/10"}`} /><span className={`text-xs ${item === stage ? "font-semibold" : ""}`}>{item}</span>{item === stage && <span className="ml-auto rounded bg-[#6de7e0]/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#6de7e0]">Current</span>}</div>)}</div><div className="mt-7 border-t border-white/[.06] pt-4"><p className="eyebrow mb-2">Current attack stage</p><div className="text-2xl font-semibold text-[#6de7e0]">{stage}</div><p className="mt-2 text-xs leading-5 text-[#83999a]">Abnormal port scanning and connection patterns indicate an active reconnaissance-to-access transition.</p></div></div>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
        <div className="panel relative overflow-hidden border-[#6de7e0]/35 p-5 shadow-[0_18px_55px_rgba(47,166,165,.10)] sm:p-7"><div className="absolute right-[-2rem] top-[-3rem] h-44 w-44 rounded-full bg-[#6de7e0]/[.08] blur-3xl"/><div className="absolute bottom-[-1.25rem] left-[-.4rem] h-20 w-40 rotate-[-18deg] border-t border-[#6de7e0]/20"/><div className="relative flex flex-wrap items-start justify-between gap-5"><div className="flex items-start gap-3"><div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-[#6de7e0]/25 bg-[#6de7e0]/[.06]"><img src="/manus-storage/threatcast-mark_097a5e70.png" alt="" className="h-7 w-7 object-contain" /></div><div><p className="eyebrow mb-2 text-[#6de7e0]">Section 03 / primary command instrument</p><h3 className="text-xl font-semibold text-[#eefaf8]">AI attack forecast</h3><p className="mt-2 text-xs text-[#778e90]">Simulated prediction from current network telemetry</p></div></div><div className="flex items-center gap-2 rounded-md border border-[#6de7e0]/25 bg-[#6de7e0]/[.07] px-2.5 py-1.5 font-mono text-[10px] text-[#8dece6]"><Sparkles size={12} /> CONFIDENCE: HIGH</div></div><div className="relative mt-8 grid gap-7 border-t border-[#6de7e0]/10 pt-6 md:grid-cols-[.9fr_1.1fr] md:items-end"><div><p className="eyebrow mb-3 text-[#6de7e0]">Next likely stage / forward signal</p><div className="text-[38px] font-semibold leading-none tracking-[-.06em] text-[#f3fffd] sm:text-[48px]">{contained ? "Initial Access" : "Initial Access"}</div><div className="mt-3 flex items-center gap-2"><span className="font-mono text-4xl font-semibold text-[#6de7e0]">{forecast[0].value}%</span><span className="text-xs text-[#7d9899]">probability</span></div></div><div className="space-y-4">{forecast.map((item) => <div key={item.label}><div className="mb-1.5 flex justify-between text-xs"><span className="text-[#afc4c2]">{item.label}</span><span className="font-mono text-[#d8eae7]">{item.value}%</span></div><div className="h-2 overflow-hidden rounded-full bg-white/[.07]"><div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.value}%`, background: item.color, boxShadow: `0 0 15px ${item.color}44` }} /></div></div>)}</div></div><div className="relative mt-7 border-t border-white/[.06] pt-4"><p className="text-xs leading-5 text-[#82999a]">The model identifies a high likelihood of <span className="text-[#c8ddda]">Initial Access</span> based on recent scanning intensity, failed authentication attempts and connection behavior.</p></div></div>
        <div className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="eyebrow mb-2">Section 04 / framework mapping</p><h3 className="text-lg font-semibold text-[#e5f2f0]">MITRE ATT&CK</h3></div><ShieldAlert size={18} className="text-[#f0b96e]" /></div><div className="mt-6 rounded-lg border border-[#f0b96e]/20 bg-[#f0b96e]/[.05] p-4"><p className="eyebrow mb-2">Predicted technique</p><p className="text-sm font-semibold text-[#f1e7d8]">T1190 <span className="font-normal text-[#b7a991]">– Exploit Public-Facing Application</span></p><div className="mt-5 grid grid-cols-2 gap-4"><div><p className="eyebrow mb-1">Tactic</p><p className="text-sm text-[#d7e2df]">Initial Access</p></div><div><p className="eyebrow mb-1">Risk</p><p className="text-sm font-semibold text-[#fb8585]">{risk}</p></div></div></div><button onClick={() => setShowTechnique(!showTechnique)} className="button-secondary mt-4 flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-xs">{showTechnique ? "Hide Technique Details" : "View Technique"}<ChevronRight size={15} className={showTechnique ? "rotate-90 transition-transform" : "transition-transform"}/></button>{showTechnique && <p className="mt-3 text-xs leading-5 text-[#82999a]">Exploit Public-Facing Application describes an adversary attempting to gain initial access by exploiting weaknesses in an internet-facing system. This mapping is simulated for the demo.</p>}</div>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
        <div className="panel p-5 sm:p-6"><div className="flex items-center justify-between"><div><p className="eyebrow mb-2">Section 05 / response posture</p><h3 className="text-lg font-semibold text-[#e5f2f0]">Risk & recommendation</h3></div><Gauge size={18} className="text-[#fb707c]" /></div><div className="mt-5 flex items-end justify-between border-b border-white/[.06] pb-5"><div><p className="eyebrow mb-2">Current assessment</p><div className={`text-4xl font-semibold tracking-[-.05em] ${contained ? "text-[#f0b96e]" : "text-[#fb707c]"}`}>{risk}</div></div><div className="text-right font-mono text-[10px] text-[#72898a]">{contained ? "CONTAINMENT ACTIVE" : "ESCALATION WATCH"}</div></div><div className="mt-5"><p className="eyebrow mb-3">Risk factors</p><div className="space-y-2.5">{["Increasing port scan activity", "Multiple failed login attempts", "Suspicious connection patterns", "Attack-stage progression detected"].map((item) => <div key={item} className="flex items-center gap-2.5 text-xs text-[#afc4c2]"><span className="h-1.5 w-1.5 rounded-full bg-[#fb707c]" />{item}</div>)}</div></div><div className="mt-6 rounded-lg bg-[#101a1e] p-4"><p className="eyebrow mb-3">Recommended SOC actions</p><div className="space-y-2 text-xs text-[#c5d5d3]">{["Isolate affected host", "Block suspicious source", "Reset compromised credentials", "Continue monitoring related hosts"].map((item, i) => <div className="flex gap-3" key={item}><span className="font-mono text-[#6de7e0]">0{i+1}</span>{item}</div>)}</div></div></div>
        <div className="panel border-[#6de7e0]/15 p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow mb-2 text-[#6de7e0]">Section 06 / what-if defense simulation</p><h3 className="text-xl font-semibold text-[#eefaf8]">Contain the path. Recalculate the risk.</h3><p className="mt-2 max-w-xl text-xs leading-5 text-[#82999a]">Test how a single analyst action changes the forecast. This scenario simulates isolating HOST-07.</p></div>{contained && <div className="flex items-center gap-1.5 rounded-md border border-[#8be28b]/25 bg-[#8be28b]/[.07] px-2.5 py-1.5 font-mono text-[10px] text-[#9be19b]"><Check size={12}/> ACTION APPLIED</div>}</div><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-lg border border-white/[.07] bg-black/10 p-4"><div className="flex items-center gap-2 text-xs font-medium text-[#d7e7e4]"><ShieldCheck size={15} className={contained ? "text-[#8be28b]" : "text-[#778f90]"}/>{contained ? "HOST-07 ISOLATED" : "HOST-07 EXPOSED"}</div><div className="mt-4 flex items-center gap-2"><div className={`text-2xl font-semibold ${contained ? "text-[#f0b96e]" : "text-[#fb707c]"}`}>{contained ? "MEDIUM" : "HIGH"}</div><span className="font-mono text-[10px] text-[#687f81]">risk level</span></div></div><div className="rounded-lg border border-white/[.07] bg-black/10 p-4"><p className="eyebrow mb-2">Forecast shift</p><div className="flex items-center gap-3 font-mono text-sm"><span className="text-[#fb707c]">{contained ? "82%" : "82%"}</span><ArrowRight size={15} className="text-[#5c7778]"/><span className="text-[#6de7e0]">{contained ? "54%" : "—"}</span><span className="text-[10px] text-[#71898b]">Initial Access</span></div></div></div><div className="mt-5 flex flex-wrap items-center gap-3">{!contained ? <button onClick={simulateDefense} className="button-primary flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[.08em]"><ShieldCheck size={15}/> Simulate Defense</button> : <button onClick={resetSimulation} className="button-secondary flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[.08em]"><RotateCcw size={14}/> Reset Simulation</button>}<span className="font-mono text-[10px] text-[#789091]">{contained ? "Forecast updated after simulated containment." : "No action applied"}</span></div><div className="mt-5 border-t border-white/[.06] pt-4 text-xs text-[#afc4c2]"><span className="eyebrow mr-3">Next action</span>{contained ? "Maintain isolation and monitor adjacent hosts." : "Run a defense simulation to test containment impact."}</div></div>
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_.85fr]"><div className="panel p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><p className="eyebrow mb-2">Section 07 / event trace</p><h3 className="text-lg font-semibold text-[#e5f2f0]">Security event log</h3></div><div className="flex items-center gap-2 font-mono text-[10px] text-[#8be28b]"><span className="signal-dot"/> LIVE FEED</div></div><div className="divide-y divide-white/[.06]">{events.map(([time, text, kind]) => <div key={time} className="flex items-center gap-3 py-3"><span className="font-mono text-[10px] text-[#637c7e]">{time}</span><span className={`h-1.5 w-1.5 rounded-full ${kind === "alert" ? "bg-[#fb707c]" : kind === "warning" ? "bg-[#f0b96e]" : kind === "success" ? "bg-[#8be28b]" : "bg-[#6de7e0]"}`}/><span className="text-xs text-[#b8cac8]">{text}</span></div>)}</div></div><div className="panel p-5 sm:p-6"><p className="eyebrow mb-2">Reading the dashboard</p><h3 className="text-lg font-semibold text-[#e5f2f0]">Signal legend</h3><div className="mt-5 space-y-4"><div className="flex items-start gap-3"><div className="mt-1 h-2 w-2 rounded-full bg-[#f0b96e]"/><div><p className="text-sm font-medium text-[#d7e7e4]">Current stage</p><p className="mt-1 text-xs leading-5 text-[#789091]">Detected behavior in the active attack progression.</p></div></div><div className="flex items-start gap-3"><div className="mt-1 h-2 w-2 rounded-full bg-[#6de7e0]"/><div><p className="text-sm font-medium text-[#d7e7e4]">Forecast</p><p className="mt-1 text-xs leading-5 text-[#789091]">Predicted next attack stage from simulated telemetry.</p></div></div><div className="mt-5 rounded-lg border border-[#6de7e0]/10 bg-[#6de7e0]/[.035] p-3 text-[11px] leading-5 text-[#789091]"><CircleHelp size={14} className="mb-2 text-[#6de7e0]"/>Demo telemetry and predictions are simulated for presentation purposes and are not real-world validated results.</div></div></div></section>
      <footer className="flex flex-wrap items-center justify-between gap-3 py-6 font-mono text-[10px] text-[#536a6c]"><span>THREATCAST AI / SIH26153 / PROTOTYPE BUILD</span><span className="flex items-center gap-2"><Zap size={12} className="text-[#6de7e0]"/> Forecast pipeline nominal</span></footer>
    </div>
  </main>;
}
