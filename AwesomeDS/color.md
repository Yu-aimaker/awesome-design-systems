# Color

White and dark surfaces, with blue for decisions. Color carries a role, never a product brand. `tokens.json` is the numeric source of truth.

| Role | Use |
| --- | --- |
| background / foreground | Page and readable content |
| card / popover | Contained and floating surfaces |
| primary / primaryForeground | The main decision and its label |
| mutedForeground | Supporting text |
| border / accent | Separation and neutral interaction states |
| destructive | Errors and destructive actions; never a brand accent |
| ring | Visible keyboard focus |

Reference → semantic → component. Components consume semantic variables only. Light and dark modes resolve the same names to different references. Never communicate status by color alone. Preview both themes at `/gallery/color`.
