# Red Willow RP — Blaine County Sheriff's Office SOP Portal V5

Static website for GitHub Pages: https://curseurgod.github.io/rw-bcso/

## V5 implementation
- Fixed a JavaScript initialization bug that left the main content area empty: the search modal, input, and results elements are now initialized before the first route render.
- Imports the text from all 18 PDFs supplied from the current BCSO Google Sites SOP.
- Creates a dedicated navigation page for each source SOP, preserving source wording and section order as far as the PDF text extraction permits.
- Adds original source links on each SOP page.
- Keeps searchable Penal Code and radio references from the earlier data import.
- Updates the department map, rank references, special division navigation and certification application options from the uploaded SOPs.
- Adds dedicated source-based pages for SWAT, TEU / HEAT, Air-1 / HRT, and BIKE / Motorcycle.
- Uses the source-defined commands from the Quick Reaction Handbook on the Common Commands page.
- Keeps a client-side Letter of Interest builder. It copies/prints an application but does not store or transmit the submission.

## Publish to the existing repository
1. Download and extract this ZIP.
2. Open https://github.com/curseurgod/rw-bcso and choose **Add file → Upload files**.
3. Upload/replace all root files and the complete `data/` folder. Keep `index.html`, `app.js`, `styles.css`, `.nojekyll`, and `assets/` at repository root.
4. Commit changes to `main`; GitHub Pages will redeploy.
5. Refresh https://curseurgod.github.io/rw-bcso/ (Ctrl+F5 if browser cache keeps the old JS).

## Editing policies
- `data/sop-data.js` contains the content imported from the PDF SOP pages. Each record includes the source URL and the source PDF filename.
- `data/department-data.js` contains the navigation / application list and source-derived division/certification descriptions.
- `data/penal-code-data.js` contains Penal Code reference data.
- `data/radio-reference-data.js` contains 10-codes, phonetic alphabet, response codes and signals.

For SOP content revisions, update the relevant record in `data/sop-data.js` and commit. Keep the original source documents as the authority when reconciling a policy change. Sheriff-themed rank labels in the portal are standardized to the department rank ladder; confirm substantive qualification thresholds with command if they are changed later.

## Applications limitation
The site is static GitHub Pages. The application builder generates a Letter of Interest in the browser and does not transmit/store it. To accept submissions automatically, connect an approved Google Form, Discord application workflow, or backend and put the official link in the portal.

## Safety and privacy
Do not place passwords, private credentials, private API keys, or genuinely sensitive member records in this repository. GitHub Pages content is publicly accessible.
