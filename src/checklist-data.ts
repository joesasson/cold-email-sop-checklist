export type Item = {
  id: string;
  label: string;
  icon: string;
  summary: string;
  steps: string[];
  note?: string;
};

export type Section = {
  id: string;
  title: string;
  icon: string;
  items: Item[];
};

export const SECTIONS: Section[] = [
  {
    id: "close-out",
    title: "Close Out Last",
    icon: "https://img.icons8.com/color/48/end-call.png",
    items: [
      {
        id: "post-mortem",
        label: "post-mortem last campaign",
        icon: "https://img.icons8.com/color/48/inspection.png",
        summary: "Run <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-cold-email-campaign-post-mortem-sop/\" target=\"_blank\" rel=\"noopener\">Post-Mortem SOP</a> end-to-end on prior campaign before planning next.",
        steps: [
          "log + finalize metrics",
          "add unsubs to blocklist",
          "mark campaign completed + set end date",
          "diagnose what drove results",
          "note 2–3 ideas for next campaign",
        ],
        note: "First campaign? Skip — start at Strategy.",
      },
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: "https://img.icons8.com/color/48/strategy-board.png",
    items: [
      {
        id: "campaign-shell",
        label: "make campaign shell",
        icon: "https://img.icons8.com/color/48/folder-invoices--v1.png",
        summary: "Container in ClientForge / LeadTables for leads + exports.",
        steps: [
          "new shell, or <a href=\"https://doubleyourfreelancing.com/lesson/leadtables-duplicating-campaigns/\" target=\"_blank\" rel=\"noopener\">duplicate most-similar past campaign</a>",
          "set status = Draft",
          "name clearly",
          "save",
        ],
      },
      {
        id: "hypothesis",
        label: "write hypothesis",
        icon: "https://img.icons8.com/color/48/light-on--v1.png",
        summary: "One primary hypothesis. Not a novel.",
        steps: [
          "open campaign → Edit → High-Level Strategy tab",
          "fill \"Campaign Overview + Hypothesis One-Liner\"",
          "note: <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-cold-email-ab-test-ideas-database/\" target=\"_blank\" rel=\"noopener\">change vs last campaign</a>",
          "note: <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-positive-reply-rate-cheat-sheet\" target=\"_blank\" rel=\"noopener\">primary metric</a> + what \"good\" looks like",
          "note: why this change should win",
          "note: next-step ideas if confirmed vs disproven",
        ],
      },
      {
        id: "funnel-parts",
        label: "pick funnel parts (lead magnet, offer)",
        icon: "https://img.icons8.com/color/48/filter.png",
        summary: "Concrete things funnel routes through.",
        steps: [
          "pick <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-lead-magnet-cheat-sheet\" target=\"_blank\" rel=\"noopener\">lead magnet</a>",
          "pick <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-introductory-offer-scorecard\" target=\"_blank\" rel=\"noopener\">introductory offer</a>",
          "confirm flagship offer",
          "if reusing — confirm still apply, move on",
          "if new lead magnet — run <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-lead-magnet-master-sop\" target=\"_blank\" rel=\"noopener\">Lead Magnet Master SOP</a>",
        ],
      },
      {
        id: "funnel-flow",
        label: "plan funnel flow",
        icon: "https://img.icons8.com/color/48/flow-chart.png",
        summary: "Positive reply → closed client. One-liner per transition.",
        steps: [
          "use <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-funnel-conversion-strategy-checklist\" target=\"_blank\" rel=\"noopener\">Funnel Conversion Strategy Checklist</a>",
          "write one-liner per transition point",
          "save in CF/LT Campaign Planner → <a href=\"https://doubleyourfreelancing.com/lesson/leadtables-campaign-funnel-config/\" target=\"_blank\" rel=\"noopener\">Funnel Config tab</a>",
        ],
        note: "\"None\" or \"keep simple\" is fine — must be deliberate, not accidental.",
      },
      {
        id: "sequence-structure",
        label: "pick sequence structure",
        icon: "https://img.icons8.com/color/48/list--v1.png",
        summary: "Structure only, no copy yet. Path A or Path B.",
        steps: [
          "Path A — swipe <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-cold-email-campaign-themeplate-stacks-db\" target=\"_blank\" rel=\"noopener\">Themeplate Stack</a> (handles structure + themeplate selection)",
          "Path B — build from scratch via <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-cold-email-sequence-structure-cheat-sheet\" target=\"_blank\" rel=\"noopener\">Sequence Structure Cheat Sheet</a>:",
          "· email count (initial + followups)",
          "· threading",
          "· delays",
          "· sending days/times",
        ],
      },
      {
        id: "lead-volume",
        label: "pick lead volume",
        icon: "https://img.icons8.com/color/48/stack-of-photos.png",
        summary: "Drives infra needs in next step.",
        steps: [
          "early loops — aim for ~200 campaign-ready leads",
          "otherwise — <a href=\"https://leadtables.io/tools/forecaster\" target=\"_blank\" rel=\"noopener\">LeadTables Campaign Forecaster</a> from desired calls/clients",
          "no source yet — <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-pond-exploration-sop/\" target=\"_blank\" rel=\"noopener\">pond exploration</a> first",
        ],
      },
      {
        id: "ab-variants",
        label: "pick A/B variant count",
        icon: "https://img.icons8.com/color/48/ab-testing.png",
        summary: "List size determines meaningful <a href=\"https://doubleyourfreelancing.com/lesson/200kf-tools-cold-email-ab-test-ideas-database/\" target=\"_blank\" rel=\"noopener\">variant count</a>.",
        steps: [
          "<400 leads — 0 variants",
          "400–500 — 2 variants, big angle differences",
          "500–1,499 — 2 variants (sweet spot)",
          "1,500–3,000 — up to 3 (A/B/C)",
          "3,000+ — ~1 variant per 1,000 leads",
          "first campaign — skip is OK",
        ],
        note: "Multi-thread sequences: each thread's initial uses different angle. Followups must work regardless of which initial variant lead got.",
      },
      {
        id: "infra-capacity",
        label: "check infra capacity",
        icon: "https://img.icons8.com/color/48/server.png",
        summary: "Followups + initials share daily quota — not simple division.",
        steps: [
          "run sending infrastructure calculator",
          "inputs: lead volume, sequence length + delays, target velocity",
          "short on accounts — buy now (warmup ~2–3 weeks)",
        ],
      },
    ],
  },
  {
    id: "list-build",
    title: "List Build",
    icon: "https://img.icons8.com/color/48/conference-call--v1.png",
    items: [
      {
        id: "build-list",
        label: "build lead list",
        icon: "https://img.icons8.com/color/48/contacts.png",
        summary: "Lead Ingredients Checklist: Raw Leads → Finalization. Stop before Campaign Exporting.",
        steps: [
          "source raw leads",
          "enrich + verify",
          "finalize columns",
          "defer perso items if approach not yet picked",
        ],
      },
    ],
  },
  {
    id: "copy",
    title: "Copy",
    icon: "https://img.icons8.com/color/48/pen.png",
    items: [
      {
        id: "spam-law",
        label: "review spam law",
        icon: "https://img.icons8.com/color/48/law.png",
        summary: "Decide compliance before drafting, not after.",
        steps: [
          "unsubscribe mechanism / inclusion",
          "physical address inclusion",
          "GDPR considerations",
        ],
      },
      {
        id: "ethics-line",
        label: "set ethics line",
        icon: "https://img.icons8.com/color/48/scales.png",
        summary: "Keep copy defensibly true. No false depth-of-attention.",
        steps: [
          "decide perso ethics standard",
          "decide \"I was just on your site...\" style line policy",
          "unsure — read Personalization Ethics lesson, pick standard",
          "adjust themeplates accordingly",
        ],
      },
      {
        id: "themeplates",
        label: "pick themeplates",
        icon: "https://img.icons8.com/color/48/template.png",
        summary: "Skip if Stack swiped — already chose. Else pick per slot.",
        steps: [
          "browse Themeplates Database (full templates)",
          "or Fragments Database (assemble parts)",
          "or Examples Database (real-world inspo)",
          "or adapt winning copy from past campaign",
        ],
      },
      {
        id: "perso-level",
        label: "pick personalization level",
        icon: "https://img.icons8.com/color/48/user-male-circle--v1.png",
        summary: "Niche-generic → fully custom per-lead.",
        steps: [
          "pick personalization depth",
          "list available variables: {{first_name}}, {{company_name}}, {{website}}, custom columns",
          "save list — needed for writing + sender config",
        ],
      },
      {
        id: "perso-data",
        label: "gather perso data",
        icon: "https://img.icons8.com/color/48/database.png",
        summary: "Only if approach needs data not yet gathered.",
        steps: [
          "circle back to deferred Lead Ingredients items",
          "complete Finalization Stage perso steps",
        ],
      },
      {
        id: "write-emails",
        label: "write emails + followups",
        icon: "https://img.icons8.com/color/48/edit-property.png",
        summary: "AI-assisted drafting per email slot.",
        steps: [
          "open fresh AI Cold Email Writer chat",
          "load CF/LT context via LLM Context Exporter (ICP, offer, LM, funnel, vars)",
          "paste themeplate AI prompt → generate draft",
          "review + edit (accuracy, tightness, voice)",
          "score against Cold Email Scorecard",
          "save in CF/LT Campaign → Copy tab",
        ],
      },
      {
        id: "ab-write",
        label: "write A/B variants",
        icon: "https://img.icons8.com/color/48/split-files.png",
        summary: "Initial emails in new threads = highest leverage to test.",
        steps: [
          "duplicate baseline email per slot you're testing",
          "swap angle / hook / substantiation",
          "each thread initial → genuinely different angle",
          "followups — work regardless of which initial variant lead received",
        ],
      },
      {
        id: "score-copy",
        label: "score copy",
        icon: "https://img.icons8.com/color/48/star--v1.png",
        summary: "Catch obvious issues before placement testing.",
        steps: [
          "run AI Email Scorer on every email + variant",
          "or score manually via Cold Email Scorecard",
          "fix low scores",
          "re-score until happy",
        ],
      },
      {
        id: "deliverability-check",
        label: "run deliverability check",
        icon: "https://img.icons8.com/color/48/checked-checkbox.png",
        summary: "Every-Time Checklist — mechanical rules Scorecard skips.",
        steps: [
          "spam keyword screen",
          "no links / attachments / images in pre-reply emails",
          "plain text formatting",
          "fix anything caught",
        ],
        note: "Spintax bits at bottom of checklist — skip for now, covered later.",
      },
    ],
  },
  {
    id: "placement-test",
    title: "Placement Test",
    icon: "https://img.icons8.com/color/48/test-tube.png",
    items: [
      {
        id: "inbox-placement",
        label: "run inbox placement test",
        icon: "https://img.icons8.com/color/48/inbox.png",
        summary: "MailReach seed inboxes — inbox vs promo vs spam.",
        steps: [
          "follow Inbox Placement Testing SOP end-to-end",
          "test every email × every sending inbox combo",
          "pass bar: 80%+ on same-provider Professional inboxes",
        ],
      },
      {
        id: "spintax",
        label: "add spintax",
        icon: "https://img.icons8.com/color/48/spiral-bound-booklet.png",
        summary: "Copy variation before loading into sender.",
        steps: [
          "scope how much spinning needed",
          "pick approach: section / phrase / word / hybrid",
          "write variants",
          "QA test",
          "re-run spam keyword check on spun variants",
        ],
      },
    ],
  },
  {
    id: "build-out",
    title: "Build Out",
    icon: "https://img.icons8.com/color/48/maintenance.png",
    items: [
      {
        id: "export-leads",
        label: "export leads",
        icon: "https://img.icons8.com/color/48/export-csv.png",
        summary: "Lead Ingredients — Campaign Exporting Stage.",
        steps: [
          "dedupe contacts",
          "associate leads with CF/LT campaign",
          "apply sendability filters",
          "build exporter view",
          "final once-over",
          "export CSV",
        ],
      },
      {
        id: "upload-sender",
        label: "upload to sender",
        icon: "https://img.icons8.com/color/48/upload-to-cloud.png",
        summary: "ReachInbox / Instantly / Smartlead — see SOP for platform specifics.",
        steps: [
          "create campaign in sender",
          "upload exported CSV",
          "map fields — perso = \"custom variable\" / \"custom field\"",
          "uncheck dedupe toggles unless reason to keep",
          "confirm upload, check error count",
          "if forced to map inbox now — drop in placeholder, revisit",
        ],
      },
      {
        id: "config-campaign",
        label: "config campaign + inbox",
        icon: "https://img.icons8.com/color/48/settings--v1.png",
        summary: "Cold Email Infrastructure Deliverability Checklist.",
        steps: [
          "complete Campaign Configuration Stage",
          "complete Inbox-Level Sending Volume & Patterns Stage",
        ],
      },
      {
        id: "build-sequence",
        label: "build sequence in sender",
        icon: "https://img.icons8.com/color/48/workflow.png",
        summary: "Just get them in — full testing next step.",
        steps: [
          "paste copy as plain text",
          "set sequence delays",
          "preview-test variable + spintax syntax",
          "add A/B variants",
        ],
      },
      {
        id: "test-emails",
        label: "test emails in sender",
        icon: "https://img.icons8.com/color/48/test-passed.png",
        summary: "Cold Email Testing & Review Checklist — fix + re-test until clean.",
        steps: [
          "per-email: in-platform preview",
          "per-email: send test copies to self",
          "per-email: variable / spintax / formatting render correct on desktop + mobile",
          "campaign-wide: all sequence steps present",
          "campaign-wide: delays + threading correct",
          "campaign-wide: A/B variants set up properly",
          "campaign-wide: subject lines present where they should, absent where they shouldn't",
        ],
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    icon: "https://img.icons8.com/color/48/launched-rocket.png",
    items: [
      {
        id: "pre-send",
        label: "run pre-send check",
        icon: "https://img.icons8.com/color/48/checklist.png",
        summary: "Final at-a-glance check before sending.",
        steps: [
          "risk protection",
          "deliverability confirmation",
          "spamming avoidance",
          "campaign performance basics",
        ],
      },
      {
        id: "activate",
        label: "activate campaign",
        icon: "https://img.icons8.com/color/48/play--v1.png",
        summary: "Hit send.",
        steps: [
          "launch in sender",
          "confirm actively sending or queued for next window",
          "set reminder to verify first batch goes out as expected",
        ],
      },
      {
        id: "mark-active",
        label: "mark active in CF/LT",
        icon: "https://img.icons8.com/color/48/marker.png",
        summary: "Sync ClientForge / LeadTables status.",
        steps: ["set status = Active", "set start date = today"],
      },
    ],
  },
  {
    id: "monitor",
    title: "Monitor",
    icon: "https://img.icons8.com/color/48/binoculars.png",
    items: [
      {
        id: "metrics-daily",
        label: "check metrics daily",
        icon: "https://img.icons8.com/color/48/combo-chart--v1.png",
        summary: "Cold Email Campaign-Monitoring Cheat Sheet.",
        steps: [
          "bounce rate — pause + investigate if above threshold",
          "open rate (if tracking) — sudden drop = deliverability flag",
          "positive reply rate — compare vs benchmarks as volume builds",
          "account health — connected, sending, good health scores",
        ],
        note: "Really bad metrics — pause campaign while debugging. Use Performance Debugging Cheat Sheet.",
      },
      {
        id: "handle-replies",
        label: "handle replies",
        icon: "https://img.icons8.com/color/48/reply-arrow.png",
        summary: "Always from sender's unified inbox — never personal inbox.",
        steps: [
          "positive — reply same day, send LM, advance funnel",
          "negative — gracious \"thanks for letting me know\"",
          "unsubscribe — mark in sender + add to LT blocklist",
          "see Reply-Handling Cheat Sheet for objections / pricing / referrals",
        ],
      },
      {
        id: "nurture",
        label: "nurture engaged leads",
        icon: "https://img.icons8.com/color/48/plant-under-sun.png",
        summary: "Engaged but not yet booked / not yet next funnel step.",
        steps: [
          "follow up on LM-received-but-quiet leads",
          "follow up on unbooked meetings",
          "close out dead leads gracefully",
          "early — keep manual / 1:1; later — automate via subsequences",
        ],
      },
      {
        id: "loop-back",
        label: "loop back when done",
        icon: "https://img.icons8.com/color/48/synchronize.png",
        summary: "Restart at top after final reply window.",
        steps: [
          "wait 3–4 days after last lead's final followup",
          "jump back to Close-Out Stage to post-mortem",
          "begin planning next campaign",
        ],
      },
    ],
  },
];

export const ITEM_KEYS: string[] = SECTIONS.flatMap((s) =>
  s.items.map((i) => `${s.id}.${i.id}`)
);
