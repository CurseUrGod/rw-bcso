# Red Willow RP — BCSO Department Portal

This is a static GitHub Pages website for the Blaine County Sheriff's Office. The current BCSO Master SOP is presented as 25 chapters, with local penal-code, radio-code, certification, division, vehicle, and form-reference pages. External source-document links are not included in the published site.

## Publish on GitHub Pages
1. Extract the package.
2. Upload the contents of this folder to the repository root, keeping `index.html`, `app.js`, `styles.css`, `.nojekyll`, `assets/`, and `data/` at the top level.
3. Commit the files to the `main` branch.
4. In repository Settings → Pages, select Deploy from a branch, choose `main` and `/(root)`, then save.
5. After the Pages deployment succeeds, open the repository's Pages URL.

## Updating text
- The source-derived Master SOP chapter content is in `data/master-sop-data.js`.
- The searchable local penal code is in `data/penal-code-data.js`.
- The radio / 10-code reference is in `data/radio-reference-data.js`.
- Rank, division, and certification cards are in `data/department-data.js`.
- The CID division procedures are available in `data/cid-sop-data.js`.
- Layout and page rendering are in `styles.css` and `app.js`.

## Access control and privacy
GitHub Pages is static hosting. Do not put confidential case material, credentials, private access codes, or restricted source files into this public repository. A client-side password prompt cannot securely protect content included in the published files. Restricted materials require authenticated hosting or a private document/service system.


## Functional notes
- Search, chapter navigation, local reference filtering, and copy/print templates run in the browser.
- Application and report templates generate copy-ready text; they do not store or submit data to a server.
- The site bundle intentionally does not include external links to the underlying SOP source documents.
