# Red Willow RP — BCSO Department Portal V8

Static GitHub Pages website for the Blaine County Sheriff’s Office.

## V8 updates
- Added the Traffic Enforcement Unit (TEU / HEAT) unit SOP to the TEU page, including leadership, application requirements, passenger/driver roles, deployment standards, scene limits, transport restriction, and qualifying call types.
- Integrated the exact user-supplied transparent PNG division patches for CID, SWAT, TEU / HEAT, and Air-1 into the home division cards, division directory, and relevant unit pages. No replacement or web-sourced artwork is used for these four divisions.
- Styled the TEU SOP with a structured hero, role cards, deployment cards, incident tiles, and related-policy shortcuts.
- Existing 26-chapter Master SOP, local penal-code and radio references, vehicle-price alignment, and closing statement remain included.
- Original source document links are not included in the public site.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Upload the contents of this folder to the repository root, keeping `index.html`, `app.js`, `styles.css`, `.nojekyll`, `assets/`, and `data/` at the top level.
3. Commit changes to `main`.
4. In repository Settings → Pages, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for the Pages deployment to finish, then refresh the site with Ctrl+F5.

## Updating content
- Master SOP text: `data/master-sop-data.js`
- Penal code: `data/penal-code-data.js`
- Radio reference: `data/radio-reference-data.js`
- Ranks, division and certification data: `data/department-data.js`
- CID SOP: `data/cid-sop-data.js`
- Shared page logic and TEU page: `app.js`
- Layout and presentation: `styles.css`
- Patch artwork: `assets/` and `assets/divisions/`. The original division assets supplied by the user are `bcso-cid.png`, `bcso-swat.png`, `bcso-teu.png`, and `bcso-air1.png`.. The original division assets supplied by the user are `bcso-cid.png`, `bcso-swat.png`, `bcso-teu.png`, and `bcso-air1.png`.

## Functional and privacy notes
Search, navigation, radio/penal-code filtering, and copy/print templates run in the browser. Application and report templates generate copy-ready text; they do not submit to a server. GitHub Pages is static and public. Do not commit private source documents, secrets, access codes, or restricted personnel/case data. Use an authenticated system for confidential materials.
