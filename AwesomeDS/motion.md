# Motion · STA-19 C

Movement explains a change of state. Start with a still preview and let the reader run it.

| Owned token | Value | Use |
| --- | --- | --- |
| fast | 120ms | Color, border, press |
| base | 180ms | Switch, small panel |
| slow | 280ms | Layout or hierarchy change |
| ease | cubic-bezier(0.2, 0, 0, 1) | Shared deceleration |

## Hybrid implementation

- Simple interactions: CSS transitions using owned duration and easing variables. No animation library required.
- Complex layout: `motion/react`, with durations read from the same tokens and explicit play/reset controls.
- Completion illustration: `lottie-react`, lazy loaded, no autoplay or endless loop. Provide pause, replay, and a static completed state.
- Optional spatial explanation: `three`, only when depth communicates information. No decorative 3D.
- Reduced motion: remove large movement and loops; show the final state immediately. Announce completion in text.

Preview and compare at `/gallery/motion`. Source: Knowledge/guidelines/apple-hig.md, Knowledge/guidelines/material-design.md, Knowledge/guidelines/duolingo.md.
