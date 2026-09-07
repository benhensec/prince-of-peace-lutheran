# Prince of Peace Lutheran Church

Website and installable web app for **Prince of Peace Lutheran Church**, Fernandina Beach, Florida — the updated clone of poplcweb.com for [princeofpeacelutheran.com](https://www.princeofpeacelutheran.com).

Sister ministry (separate project): [Damaged Christian Ministry](https://github.com/benhensec/damaged-christian-ministry).

## Pages

Home, Worship, About, Ministries, Events, News, Give, Visit, Contact, Prayer, Baptism, What we believe.

## Maintain content

Edit [`src/content/pop.ts`](src/content/pop.ts). Newsletters and bulletins live in `public/files/pop/`.

## Run

```bash
npm install
npm run dev
```

## GitHub Pages

Live URL (after Pages is switched on): https://benhensec.github.io/prince-of-peace-lutheran/

A GitHub Action on `main` builds the static site and publishes the `gh-pages` branch.

Turn Pages on once:

1. Open https://github.com/benhensec/prince-of-peace-lutheran/settings/pages
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)`
4. Save
