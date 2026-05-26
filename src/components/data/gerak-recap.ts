export const gerakRecapMeta = {
  title: "Android Developer Recap",
  period: "27 Oktober 2025 — 26 Mei 2026",
  duration: "~7 bulan",
  badge: "Gerak Pro & Whitelabel",
};

export const gerakStats = [
  {
    label: "App releases",
    value: "5+",
    sub: "2.0.11 → 2.0.15 + PLN 1.0.3",
  },
  {
    label: "Major features",
    value: "5",
    sub: "Sleep, Steps, Live Session, Tracker, Workout",
  },
  {
    label: "Projects",
    value: "3",
    sub: "Gerak Pro · Gerak Orange · PLN Wellness",
  },
  {
    label: "Sentry issues",
    value: "Fixed",
    sub: "NPE, ANR, crashes patched",
  },
];

export const gerakTimeline = [
  {
    date: "Okt – Nov 2025",
    title: "Foundation & Android 15 Compatibility",
    description:
      "Fixed 16 KB page size issue, upgraded Mapbox / Fresco / Sentry SDK, fixed DetailMission image loading, resolved StoryActivity crash, setup routing for waist pop-up, added reusable ImageLoaderUtils.",
    dotColor: "#378add",
  },
  {
    date: "Nov – Des 2025",
    title: "Sleep Feature V2",
    description:
      "Built Sleep History page (date range, status, start–end), Sleep Stages Days Chart UI, Health Connect source mapping (auto / active / manual / unknown), fixed filter logic, ascending sort, sticky month-year list, buffer UI adjustments.",
    dotColor: "#1d9e75",
  },
  {
    date: "Des 2025 – Jan 2026",
    title: "Steps Tracker — Full Revamp",
    description:
      "New MVVM architecture for Steps, dynamic tracker from API, Health Connect read/write, Google Fit integration & debug, Steps History + Chart + Insight pages, filter with slider (min/max steps), background worker for sync, fraud detection, debounce, permission handling.",
    dotColor: "#d4537e",
  },
  {
    date: "Jan – Feb 2026",
    title: "PLN Wellness Whitelabel & Gerak Orange Cleanup",
    description:
      "Cloned Gerak Pro for PLN Wellness, replaced assets & app name (Energi Bergerak), fixed edge-to-edge display Android 15+, synced branches, cleaned Gerak Orange codebase, fixed Sentry issues (NPE / ANR / ProgressDialog).",
    dotColor: "#ef9f27",
  },
  {
    date: "Feb – Mar 2026",
    title: "Live Session Feature",
    description:
      "Built Live Session UI components in Compose, homepage card, detail page, started/ongoing/result pages, joined/ended state routing, camera photo verification, rank display, API integration for challenge join/load, fixed cut-off bug, activity type bottom sheet.",
    dotColor: "#7f77dd",
  },
  {
    date: "Mar – Apr 2026",
    title: "Gerak Tracker Revamp",
    description:
      "Revamped ready/countdown/tracking UI, separated distance vs non-distance & live-session states, elapsed & moving time logic, background service, killed-app recovery, save activity form (photo verification, effort, visibility), fix elapsed < moving time bug.",
    dotColor: "#d85a30",
  },
  {
    date: "Apr – Mei 2026",
    title: "Workout Activity, Goals & Health Connect",
    description:
      "Revamped workout list & detail, pagination history, delete/share/edit activity, .fit file research, Goals Tracker UI & state, in-app steps counter (backfill + deduplicate), HC steps sync fix (raw, today, pageToken, source origin), cadence fraud detection, filter & sort history.",
    dotColor: "#639922",
  },
];

export type GerakAchievementIcon =
  | "heart"
  | "mobile"
  | "layout"
  | "branch"
  | "bug"
  | "chart";

export const gerakAchievements: {
  title: string;
  body: string;
  icon: GerakAchievementIcon;
}[] = [
  {
    title: "Health Connect integration",
    body: "Steps & sleep read/write, background worker, fraud (bulk/raw) detection, cadence SPM validation, pageToken pagination, source origin tracking.",
    icon: "heart",
  },
  {
    title: "Android 15+ compatibility",
    body: "16 KB page size fix, edge-to-edge display with custom status bar, updated all major SDKs (Mapbox, Fresco, Sentry, SoLoader).",
    icon: "mobile",
  },
  {
    title: "Compose migration",
    body: "Steps Screen, Sleep Screen, Live Session components, Gerak Tracker UI migrated to Jetpack Compose with MVVM architecture.",
    icon: "layout",
  },
  {
    title: "Whitelabel architecture",
    body: "PLN Wellness cloned from Gerak Pro, synced across branches, independent assets & app identity, shared feature parity maintained.",
    icon: "branch",
  },
  {
    title: "Stability & Sentry",
    body: "Fixed NPE (EditProfile, GerakActivity), ANR (GroupLeaderboard), ProgressDialog crash, race conditions, killed-app state recovery, force-close on resume.",
    icon: "bug",
  },
  {
    title: "Data & chart features",
    body: "Sleep stages bar chart, Steps daily/days chart, splits card, weekly workout summary, monthly summary — all with filter, sort, and empty state handling.",
    icon: "chart",
  },
];

export const gerakReleases = [
  {
    version: "GP 2.0.11",
    description:
      "Sleep filter & chart fix, Health Connect steps hardcoded, single source of truth steps tracker, buffer chart sleep days.",
    tag: "released" as const,
  },
  {
    version: "GP 2.0.12",
    description:
      "New Steps UI (Compose), Steps API & history, HC sync (fraud/bulk), filter slider, notification fix, HTML terms, background worker.",
    tag: "released" as const,
  },
  {
    version: "GP 2.0.13",
    description:
      "Sentry fixes, Live Session feature, Gerak Tracker revamp, PLN Wellness branch merged.",
    tag: "released" as const,
  },
  {
    version: "GP 2.0.14",
    description:
      "Save activity revamp, Live Session improvements (rank display, cut-off bug fix), Health Connect steps sync fix (raw, today, pageToken, source origin).",
    tag: "released" as const,
  },
  {
    version: "GP 2.0.15",
    description:
      "Save activity (photo, effort, visibility), workout list revamp, edit/delete/share activity, race condition fix type activity.",
    tag: "released" as const,
  },
  {
    version: "PLN 1.0.1",
    description:
      "Whitelabel release — synced with GP 2.0.13, PLN assets & app identity, edge-to-edge fix, applinks removed.",
    tag: "whitelabel" as const,
  },
  {
    version: "PLN 1.0.2",
    description:
      "Whitelabel release — synced with GP 2.0.14",
    tag: "whitelabel" as const,
  },
  {
    version: "PLN 1.0.3",
    description:
      "Whitelabel release — synced with GP 2.0.15",
    tag: "whitelabel" as const,
  },
];

export const gerakTechnologies = [
  "Jetpack Compose",
  "MVVM",
  "Health Connect",
  "Google Fit",
  "Mapbox",
  "Fresco",
  "Sentry",
  "WorkManager",
  "ViewModel",
  "Retrofit",
  "Kotlin Coroutines",
  "SoLoader",
  ".fit format",
  "Branch Links",
  "PrefHelper",
  "Canvas / MiniPoly",
];
