# Change 1: Add organization logos to experience and education

## Goal

Make employers and schools easier to scan by placing a visual mark in a left-hand column beside each related entry on the Work Experience and About pages.

## Planned changes

- Add the uploaded InkSpace Imaging, AstraZeneca, and L.E.K. marks beside their Work Experience entries.
- Add the uploaded UC Berkeley seal beside both Berkeley education entries.
- Show labeled initial badges for Fudan University (`FU`) and Hitotsubashi University (`HT`), since no marks for those schools were supplied.
- Add a reusable Jekyll include so logo and initial-badge entries share the same markup and layout.
- Copy the selected logo images into `assets/logos/` and reference them locally; do not depend on externally hosted images.
- Keep the education and work-history wording and facts unchanged.
- Keep this planning file out of the generated website.

## Layout and accessibility

- Put the image or initial badge to the left of the organization name and its existing details.
- Keep the two-column layout at desktop widths and reduce the logo column for narrow screens.
- Treat each mark as decorative because the adjacent heading names the organization; keep the heading as the accessible text label.
- Retain the site's existing light and dark themes and readable contrast.

## Verification

- Build the site with Jekyll and confirm the logo assets and pages are generated from the repository root.
- Check Work Experience and About at 375px and 1280px widths.
- Confirm the logo files are local assets and the planning document is excluded from the published output.