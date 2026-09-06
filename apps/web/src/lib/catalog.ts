export type Entry = {
  slug: string;
  title: string;
  description: string;
  category: string;
  source: string[];
  points: string[];
  preview: string;
};
export const docs: Entry[] = [{
  slug: '',
  title: 'Introduction',
  category: 'Getting started',
  description: 'The foundations, components, and working practices of AwesomeDS. Read the rules, try the behavior, and open the source.',
  source: ['AwesomeDS/DESIGN.md', 'AwesomeDS/tokens.json'],
  points: ['One semantic language connects the canon to the interface. White and dark surfaces establish hierarchy; blue marks a decision.', 'Start with the foundations, then use the gallery to inspect real states. Every example runs locally and links back to its source.', 'AwesomeDS is the canon. Knowledge records design reasoning. Plugin packages the internal skills that apply and verify it.'],
  preview: 'overview'
}, {
  slug: 'principles',
  title: 'Principles',
  category: 'Foundations',
  description: 'Make the next action clear, preserve control, and use delight to confirm progress.',
  source: ['AwesomeDS/principles.md', 'Knowledge/skills/taste-skill.md', 'Knowledge/guidelines/duolingo.md'],
  points: ['Useful: begin with a concrete task. Keep the most important action easy to find.', 'Intuitive: familiar controls and explicit labels carry more meaning than decoration.', 'Delightful: acknowledge a completed action with a small, purposeful change.', 'Polished: verify focus, errors, reduced motion, and small screens. Always leave a next step.'],
  preview: 'buttons'
}, {
  slug: 'tokens',
  title: 'Design tokens',
  category: 'Foundations',
  description: 'Name the role once. Resolve it consistently across components and themes.',
  source: ['AwesomeDS/tokens.json', 'Knowledge/guidelines/material-design.md'],
  points: ['Reference values describe raw color scales. Semantic tokens describe jobs. Component tokens connect those jobs to controls.', 'Use var(--primary), never a copied color literal in a component. The theme switches the value without changing the component.', 'Run pnpm sync:canon after editing the canon. The build also regenerates CSS variables and source downloads.'],
  preview: 'color'
}, {
  slug: 'color',
  title: 'Color',
  category: 'Foundations',
  description: 'Quiet surfaces for content. Blue for decisions. A separate semantic role for errors.',
  source: ['AwesomeDS/color.md', 'AwesomeDS/tokens.json', 'Knowledge/design-md/awesome-design-md.md'],
  points: ['Use background and foreground for the page, card for contained content, and border for separation.', 'Reserve primary for the main action in a surface. Neutral secondary actions remain visible without competing.', 'Color never stands alone: pair errors with text and selections with a visible state. Inspect both themes using the header toggle.'],
  preview: 'color'
}, {
  slug: 'typography',
  title: 'Typography',
  category: 'Foundations',
  description: 'A readable hierarchy for Latin and Japanese, with a separate voice for code.',
  source: ['AwesomeDS/typography.md', 'Knowledge/design-md/awesome-design-md-jp.md', 'Knowledge/guidelines/apple-hig.md'],
  points: ['Geist carries Latin UI, Noto Sans JP carries Japanese, and Geist Mono carries code and token values.', 'Body text uses 16px / 1.75. Keep Japanese text around 35–45 characters per line, with strict line breaking.', 'Use weight 400, 500, or 600. Tighten headings gently; use proportional alternates only in body copy.'],
  preview: 'typography'
}, {
  slug: 'spacing',
  title: 'Spacing & radius',
  category: 'Foundations',
  description: 'A four-pixel scale makes related content feel related and separates different tasks.',
  source: ['AwesomeDS/spacing.md', 'AwesomeDS/radius.md', 'AwesomeDS/tokens.json'],
  points: ['Use 4, 8, 12, 16, 24, 32, 48, 64, and 96px. Choose space based on the relationship between elements.', 'Cards use 24px padding. Small screens keep at least 16px outer gutters and 40px touch targets.', 'Radius: 6px for badges, 8px for controls, 12px for preview frames. Full rounding is reserved for avatars and switches.'],
  preview: 'spacing'
}, {
  slug: 'motion',
  title: 'Motion',
  category: 'Foundations',
  description: 'Owned tokens for simple transitions. Recommended libraries for complex behavior.',
  source: ['AwesomeDS/motion.md', 'AwesomeDS/tokens.json', 'Knowledge/guidelines/duolingo.md'],
  points: ['STA-19 C uses CSS for small state changes, motion/react for coordinated layout, and lottie-react for completion illustrations.', 'Every preview starts still. Play, pause, replay, and reduced-motion states keep the reader in control.', 'Read durations from the canon. Three is optional when space or depth teaches something; it is not required for decoration.'],
  preview: 'motion'
}, {
  slug: 'plugin',
  title: 'Using Plugin skills',
  category: 'Getting started',
  description: 'Give an agent the canon, a concrete task, and a repeatable verification process.',
  source: ['Plugin/skills/AwesomeDSSkill/SKILL.md', 'Plugin/skills/DesignThinkingSkill/SKILL.md', 'Plugin/skills/DSCreator/SKILL.md', 'Plugin/skills/DesignVerifier/SKILL.md'],
  points: ['Plugin is internal, with future open-source distribution planned. Read the local skill files directly; no public installation is required.', 'Use DesignThinkingSkill to clarify the task, AwesomeDSSkill to implement, and DesignVerifier to inspect the result.', 'Use DSCreator only when a product needs its own documented design language. Keep that canon distinct from AwesomeDS.'],
  preview: 'plugin'
}, {
  slug: 'knowledge',
  title: 'Knowledge',
  category: 'Resources',
  description: 'The design references behind the decisions, distilled into practical rules.',
  source: ['Knowledge/skills/taste-skill.md', 'Knowledge/design-md/awesome-design-md.md', 'Knowledge/design-md/awesome-design-md-jp.md', 'Knowledge/guidelines/apple-hig.md', 'Knowledge/guidelines/material-design.md', 'Knowledge/guidelines/duolingo.md', 'Knowledge/components/shadcn-ui.md', 'Knowledge/components/assistant-ui.md'],
  points: ['Taste: prioritize information over spectacle. Keep variance low, motion low to medium, and density moderate.', 'Apple HIG contributes familiar behavior and accessibility. Material contributes semantic roles. Duolingo contributes feedback that rewards progress.', 'shadcn provides owned component patterns. assistant-ui provides thread and composer primitives. Source notes explain what AwesomeDS adopts.'],
  preview: 'typography'
}];
export const gallery: Entry[] = [{
  slug: 'buttons',
  title: 'Buttons',
  category: 'Components',
  description: 'Express action priority with a familiar set of variants. Try saving, then undo the change.',
  source: ['AwesomeDS/components.md', 'Knowledge/components/shadcn-ui.md'],
  points: ['One primary action per task surface. Secondary and ghost actions offer alternatives without competing.', 'Disabled controls include a visible reason. Every active control retains keyboard focus.'],
  preview: 'buttons'
}, {
  slug: 'forms',
  title: 'Forms & feedback',
  category: 'Components',
  description: 'Labels, validation, and recovery keep people moving when something goes wrong.',
  source: ['AwesomeDS/components.md', 'Knowledge/guidelines/apple-hig.md'],
  points: ['Keep labels above inputs. Show errors beside the field and preserve entered content.', 'This local preview includes a simulated failure and a working retry. No data leaves the browser.'],
  preview: 'forms'
}, {
  slug: 'chat',
  title: 'Thread & composer',
  category: 'Components',
  description: 'A focused conversation surface built with assistant-ui primitives.',
  source: ['Knowledge/components/assistant-ui.md', 'AwesomeDS/components.md'],
  points: ['Thread, message, and composer primitives own the conversation behavior. AwesomeDS owns the surfaces and type.', 'This is a deterministic local demo. Send a message to inspect the response state, or clear and restore the thread.'],
  preview: 'chat'
}, ...docs.filter(x => ['color', 'typography', 'spacing', 'motion'].includes(x.slug)).map(x => ({
  ...x,
  category: x.slug === 'motion' ? 'Motion' : 'Foundations'
}))];
export const sourceHref = (path: string) => `/sources/${path}`;
