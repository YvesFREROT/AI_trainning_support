# Adding audits, newsletters, and tutorials

This guide explains how to add reports to `src/audits`, fill in their JSON metadata, check the result, and commit and push the changes. Run all terminal commands from the repository root (the folder containing `package.json`). You will need Node.js, npm, Git, and permission to push to the repository.

## 1. Understand the folder structure

```text
src/audits/
├── countries.json                 # Country and collection labels/settings
├── archive-import.json            # Historical import records
├── ro/                            # Reports about Romania
│   └── 2026-w23-bere-ursus-breweries-en/
│       ├── index.html             # The report itself
│       ├── metadata.json          # Title, description, language, status, etc.
│       ├── assets/                # Images, styles, scripts, fonts, and data
│       └── asset-sources.json     # Generated resource records, when imported
├── pl/                            # Reports about Poland
├── hu/                            # Reports about Hungary
└── tuto/                          # Country-independent tutorials
```

Each report belongs in its own folder directly inside a country or `tuto`. Choose the country by the market covered, not the report language: an English report about Romania still goes in `ro/`.

The website address uses singular `audit`, although the source folder is named `audits`:

```text
Source:  src/audits/ro/2026-w23-bere-ursus-breweries-en/
URL:     /audit/ro/2026-w23-bere-ursus-breweries-en/
```

Published reports appear automatically in the relevant listing, ordered by publication date, newest first. You do not need to add a link to a separate report list.

### What the JSON files do

| File | What to do with it |
| --- | --- |
| Each report's `metadata.json` | Create or update this for every report. Instructions are below. |
| Each report's `asset-sources.json` | Keep it when supplied or generated. It records resource source URLs, local paths, and SHA-256 checksums. It is optional for manually prepared packages; do not invent checksum values. |
| `countries.json` | Shared settings for country and tutorial pages. Leave it unchanged when adding a report to an existing country. |
| `archive-import.json` | Records the historical bulk import. Leave it unchanged for ordinary new reports. |

## 2. Choose the report folder name

The report folder name is called its **slug**. It becomes part of the public URL.

- Use lowercase letters `a–z`, numbers `0–9`, and single hyphens between words.
- Do not use spaces, underscores, accents, punctuation, leading/trailing hyphens, or repeated hyphens.
- Choose a unique slug within the country. Each report version or language that needs a separate URL needs a separate folder.
- A useful convention for new weekly reports is `year-week-topic-company-language`, for example `2026-w23-bere-ursus-breweries-en`.
- For reports without a week, use a descriptive name such as `2026-visibility-overview-en`. The exact word order is a convention, not a validation requirement.
- Existing archive folders use names derived from the original filenames. Keep those names when updating an existing report.

The main HTML file must be named exactly `index.html`, regardless of the original export filename. The metadata file must be named exactly `metadata.json`.

Keep supplied asset filenames and their references together. For manually named assets, simple names such as `cover.jpg` and `charts.js` are convenient. Automatically imported assets have hash-based names; leave those names intact.

## 3. Copy or prepare the report files

### Option A: You received a complete report package

1. Create the chosen report folder under `ro/`, `pl/`, `hu/`, or `tuto/`.
2. Copy the report HTML into it as `index.html`.
3. Copy all supporting images, CSS, JavaScript, fonts, and data into its `assets/` folder, preserving any referenced subfolders and license notices.
4. Copy `asset-sources.json` if it was supplied.
5. Create or update `metadata.json` using the next section.

Do not leave a ZIP file or a loose HTML export directly inside a country folder. Extract the package first, and avoid an extra nested folder between the slug and `index.html`.

All files needed to render the report must be bundled locally. From `index.html`, use relative references such as `assets/cover.jpg` and `assets/charts.js`. References inside a CSS file are relative to that CSS file. Do not use paths to your own computer, references outside the package, or remote CDN resources. A build does not download missing assets.

### Option B: You received an HTML export with remote resources

The preparation command can download remote resources and rewrite their references:

1. Save the export outside the destination folder.
2. Prepare a metadata JSON file outside the destination folder, using the template below.
3. Install dependencies if needed, then run the command with your actual paths:

```sh
npm ci
npm run audit:prepare -- /path/to/report.html src/audits/ro/2026-w23-bere-ursus-breweries-en /path/to/metadata.json
```

The destination folder must not already exist. The command creates `index.html`, `metadata.json`, `assets/`, and `asset-sources.json`. It fails if a required download fails. If the export already references local files, use Option A and package those files manually. Review downloaded dependencies and retain their license notices.

## 4. Fill in `metadata.json`

Start with this template and replace the example values with the report's details:

```json
{
  "title": "Beer promotions in Romania — 2026 W23",
  "description": "Weekly beer promotion analysis covering retailer activity and price trends in Romania.",
  "language": "en",
  "publishedAt": "2026-09-30",
  "reportingPeriod": "2026-W23",
  "type": "newsletter",
  "status": "draft",
  "externalLinks": [],
  "previousSlugs": []
}
```

### Required fields

| Field | How to fill it in |
| --- | --- |
| `title` | A readable report title. Include the topic, company/market, and period where useful. Use normal spaces and punctuation here, rather than a slug. |
| `description` | A short, accurate summary of what the report covers. This is used in listings and page metadata. |
| `language` | The report's primary language, such as `en`, `ro`, `pl`, or `hu`. It is independent of the country folder. The site does not translate the report. |
| `publishedAt` | The date the report is published here, as a real calendar date in `YYYY-MM-DD` format. It is separate from the period covered by the report. |
| `type` | Exactly `audit` or `newsletter`. Use `tutorial` only for reports in `tuto/`. |
| `status` | Exactly `draft` or `published`. Drafts are excluded from the built website. Set `published` when preparing the report for browser review and publication. |

`publishedAt` does not schedule publication: a report with `status: "published"` is included in the next build even if its date is in the future.

### Optional fields

| Field | When to use it |
| --- | --- |
| `reportingPeriod` | The period covered by the report, for example `2026-W23`. Update or omit it as appropriate. |
| `image` | A local sharing image, for example `"assets/cover.jpg"`. The file must exist inside this report's `assets/` folder. Omit the field if no image is supplied. |
| `externalLinks` | An array of exact HTTPS navigation URLs used inside JavaScript, such as a meeting booking link. Use `[]` if none. Ordinary HTML contact links need no declaration. This field must not be used to allow remote images, scripts, fonts, or data dependencies. |
| `previousSlugs` | An array of earlier folder names for this same report, if its URL has changed within the same country. Use `[]` for a new report. See the update instructions below. |
| `languages` | For a multilingual tutorial, list the languages actually available, for example `["en", "ro", "pl"]`. Keep `language` as the primary language. This field does not create translations. |

Imported reports may also contain `sourceFile`, `sourceSha256`, `importedAt`, `publicationDateBasis`, and `importNotes`. These describe the source and import history. Preserve accurate existing records when editing a report; do not copy another report's source details into a new package.

**JSON rules:** use double quotes around keys and text values, commas between fields, and no comma after the final field. JSON cannot contain comments. Save as UTF-8 so accented text is preserved. Field names and status/type values are case-sensitive.

## 5. Validate and preview

1. Run `npm ci` if dependencies are not installed.
2. Finish the report and metadata. Set its status to `published` locally before the full validation and preview: draft HTML and assets are skipped by the validator, and drafts have no built preview page.
3. Run:

```sh
npm run audit:validate
npm run build
npm test
npm start
```

4. Open the report, replacing this example path with your country and slug:

```text
http://localhost:3012/audit/ro/2026-w23-bere-ursus-breweries-en/
```

5. Check the title, text, dates, images, charts, tables, buttons, contact/meeting links, and mobile layout. Check that the report appears on its country page, such as `http://localhost:3012/audit/ro/`.
6. In browser developer tools, check the Network panel with external requests blocked. Rendering should work using local resources. Browser checks matter because static validation cannot detect every dynamically constructed JavaScript URL.
7. Stop the local server with `Ctrl+C`. Fix any problems and repeat the relevant checks before committing.

If the report must remain unpublished, restore `"status": "draft"` and rebuild before committing. Otherwise, leave it as `published`. Changing the source files alone does not update the generated site; run the build after the final edits.

Common validation errors include an invalid slug, malformed JSON, a missing required field, an invalid date, a missing asset, or a resource that still uses an external URL. Fix the reported file or reference, then validate again.

## 6. Commit and push the changes

**After copying the files and completing the checks, you must commit and push the changes.** Files that exist only on your computer are not available to the rest of the team or the deployment process.

This repository tracks the generated `dist/` output as well as the source reports. Include the output from your final build. Replace the example source path below with the folder you added or updated:

```sh
git status --short
git diff --stat
git add src/audits/ro/2026-w23-bere-ursus-breweries-en/ dist/
git diff --cached --stat
git diff --cached --check
git commit -m "Add Romania beer newsletter for 2026 W23"
git push
```

Review the staged changes before committing and include only changes belonging to your work. If you intentionally changed shared settings, stage those specific files too. If this is a new branch with no upstream, use `git push -u origin YOUR_BRANCH_NAME`, replacing the placeholder with your branch name.

Wait for the push to succeed. Follow the team's normal review and deployment process afterward; a successful push alone does not confirm that the live website has been deployed.

## Updating existing reports or adding a country

- **Correcting a report:** edit its existing package and keep the folder name stable so its URL continues to work. Validate, rebuild, review, commit, and push again.
- **Renaming a published report:** move the package to the new slug and add its old slug to `previousSlugs`, preserving any earlier entries. For example, `"previousSlugs": ["old-report-name"]`. Old slugs must not conflict with other reports or redirects. This generates redirects within the same country; moving between countries requires a separate server redirect.
- **Adding a new country:** first add its lowercase two-letter code to `countries.json`, with nonempty `name`, `language`, `title`, `description`, `back`, and `empty` fields, plus translated `types.audit` and `types.newsletter` labels. Use an existing country entry as the structure. Coordinate any country-specific landing design with the website maintainer. An unconfigured country folder fails validation.

## Final checklist

- [ ] Correct country or tutorial folder and a valid, unique slug.
- [ ] `index.html`, `metadata.json`, and all referenced local assets are included.
- [ ] Required metadata fields are filled in; dates, language, type, and status are correct.
- [ ] Validation, build, and tests pass, and the rendered report has been reviewed.
- [ ] The final source package and generated `dist/` changes are committed.
- [ ] The commit has been pushed successfully.
