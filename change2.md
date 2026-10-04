# Change 2: Interactive timelines for work and education

**Status:** Draft — review before implementation

## Goal

Make the Work Experience and Education sections easier to explore by organizing their existing entries as chronological timelines, with organization and school logos as interactive timeline markers.

## Planned scope

- Turn the Work Experience page into a timeline containing InkSpace Imaging, AstraZeneca K.K., and L.E.K. Consulting, ordered from most recent to oldest.
- Turn the Education section on the About page into a timeline containing the MBA/MPH program, Berkeley bachelor's degree, and the Fudan and Hitotsubashi exchange programs.
- Reuse the local logo assets already shown beside each entry.
- Preserve the existing titles, dates, locations, descriptions, and bullet-point highlights; do not invent or rewrite résumé details.

## Proposed interaction and layout

- Show a vertical timeline line with each logo placed at its corresponding entry as a node. Keep dates adjacent to the relevant nodes where dates are available.
- Make each logo an interactive control. Clicking a logo opens an animated detail card anchored beside that node on desktop. On narrow screens, show the card below the selected logo so it remains readable and does not overflow the viewport.
- Include the existing organization or school name, role or credential, dates, location, description, and all associated highlights in the opened card.
- Keep at most one detail card open at a time. Clicking another logo switches to that entry; clicking the selected logo again closes it.
- Treat click or tap as the action that opens the details. Pointer hover may highlight a logo but should not be the only way to access information.
- Continue using the site's existing light and dark theme colors and responsive breakpoints.

## Accessibility and motion

- Make logo controls usable by keyboard and touch, with visible focus styling and clear accessible names.
- Expose the open/closed state and its relationship to the detail card to assistive technology.
- Respect `prefers-reduced-motion`; the content remains available even when the animation is reduced or disabled.
- Keep the information in the page's semantic content rather than making it available only through a hover effect.

## Implementation plan

1. Update `work-experience.md` and `about.md` to present their existing entries as timeline items.
2. Adapt `_includes/organization-entry.html` or add a focused reusable timeline include for the logo marker and expandable details.
3. Add the timeline layout and open/closed states to `assets/css/site.css`, using the current theme variables.
4. Use native disclosure behavior where it fits; add only the small amount of JavaScript needed if required for the anchored card and single-open-item behavior. Do not add a front-end library or backend.
5. Build the Jekyll site and verify both timelines, all existing text and logos, responsive layouts, keyboard/touch use, both themes, and reduced-motion behavior.

## Acceptance criteria

- **Work timeline:** Activating each employer's logo reveals that employer's existing details and all current bullet points.
- **Education timeline:** Activating each school's logo reveals its existing credential or exchange details without losing content.
- **Selection:** Only one detail card is open at a time; selecting another logo switches the displayed entry.
- **Responsive use:** The timeline and its details remain readable at mobile and desktop widths; touch users do not need hover.
- **Accessibility:** Keyboard users can open and close each entry, focus remains visible, and reduced-motion preferences are respected.
- **Content integrity:** Existing facts and local logo assets are preserved. Missing dates are not guessed.
- **Publishing:** The Jekyll build includes the updated pages but does not publish this planning document.

## Open decisions before implementation

- The Fudan and Hitotsubashi exchange entries currently have no dates. Provide the terms/years if they should appear in exact chronological order; otherwise they will remain undated and keep their current relative order.
- This draft interprets “click my mouse over the logo” as click/tap to open the details, with hover used only for visual emphasis. Confirm if you intended hover itself to open the card.

## Non-goals

- Rewriting résumé content or adding unprovided work or education facts.
- Changing the Home or Contact pages.
- Adding third-party libraries, a backend, or analytics.