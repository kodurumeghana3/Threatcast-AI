# ThreatCast AI — Design Direction

## Three stylistic approaches considered

### Theme Name: Signal Room
Very dark enterprise SOC interface with restrained telemetry color accents and an editorial command-center hierarchy.
Probability: 0.08

### Theme Name: Field Manual
Light-on-dark technical field guide with hard rules, annotated diagrams, and utilitarian information density.
Probability: 0.04

### Theme Name: Quiet Vector
Minimal charcoal dashboard with precise geometric markers, soft depth, and calm high-signal interactions.
Probability: 0.02

## Chosen direction: Signal Room

### Design Movement
Contemporary enterprise control-room design informed by Swiss information graphics and mission-critical operations interfaces.

### Core Principles
1. Surface the decision chain: what is happening, what happens next, why, and what to do.
2. Use restrained signal color only to establish semantic priority, never as decoration.
3. Build hierarchy with typography, alignment, and spacing before borders or glow.
4. Keep the interface presentation-ready: dense enough for analysts, legible enough for a judging panel.

### Color Philosophy
The base is near-black charcoal to make the dashboard feel like a focused operational workspace. Muted cyan represents model output and forward-looking signal; signal green represents healthy system state and completed actions; amber and red are reserved for risk and attention. Color should read like instrumentation, not branding theater.

### Layout Paradigm
A left-anchored command column establishes the product story, while the primary content uses a responsive asymmetric dashboard: telemetry and forecast lead, then mapping, recommendation, simulation, and event trace. The forecast card should feel like the central instrument panel rather than one tile among many.

### Signature Elements
- Thin signal rails and stepped stage markers to reinforce progression.
- Compact eyebrow labels with small monospace metadata for operator context.
- A diagonal forecast mark that combines shield geometry with a forward arrow.

### Interaction Philosophy
Actions should feel deliberate and observable. Buttons acknowledge immediately, loading states expose the analysis sequence, and simulation changes remain explicit and reversible.

### Animation
Use short, restrained transitions under 240ms for hover, focus, and state changes. The Run Forecast action uses a staged status sequence with a progress pulse. Defense simulation uses a subtle card state transition and count-up feel without distracting motion. Respect reduced-motion preferences.

### Typography System
Use Space Grotesk for headings and key values to give the dashboard a technical but human voice. Use IBM Plex Mono for labels, timestamps, stage identifiers, and compact telemetry metadata. Use a clear sans-serif fallback stack for body copy.

### Brand Essence
ThreatCast AI helps security teams move from incident awareness to informed next action by forecasting the next attack stage from simulated network telemetry. Personality: precise, alert, grounded.

### Brand Voice
Headlines are direct and operational. CTAs describe the analyst action rather than hype the AI. Microcopy is concise and evidence-oriented.

Example lines:
- “See the next move before it becomes the next incident.”
- “Contain the path, then watch the forecast change.”

### Wordmark & Logo
Use the generated geometric shield-and-signal mark beside a wordmark set in Space Grotesk with a tight custom tracking treatment. The mark should be visible in the header and favicon-sized contexts without relying on a text-only logo.

### Signature Brand Color
Signal Cyan: `#6DE7E0` — a cool, ownable operational accent that reads as model signal on charcoal without becoming a neon effect.

## Style Decisions

- The forecast panel is the visual center of gravity and must read as the primary command instrument.
- The diagonal shield-and-forward-arrow mark is a recurring forecast motif, not only a header logo.
- Signal Cyan `#6DE7E0` is reserved for model output, forecast emphasis, and primary analyst actions.
