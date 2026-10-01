/**
 * The app currently ships as a lite version: its payments are stashed behind
 * EXPO_PUBLIC_PAYMENTS_ENABLED (flash-accounting utils/features.ts), so it sells
 * nothing, has no record cap, and has no cloud sync or sign-in.
 *
 * While this is false the site says the same in every locale: no pricing section
 * or #pricing links, no plans, prices or record cap, no Pro / cloud-sync claims,
 * and no purchase questions on the support page. The paid copy is not deleted —
 * the dictionaries keep it, and lib/locales/lite.ts overlays the lite wording at
 * load time. Flip this together with the app's own switch, and retake
 * public/screenshots/settings.png from a paid build: the current one shows the lite
 * Settings, while the paid captions describe the record limit and cloud sync rows.
 */
export const PAYMENTS_ENABLED = false;
