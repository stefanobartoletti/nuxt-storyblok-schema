# Nuxt + Storyblok: schema as code

A minimal Nuxt site that defines its whole Storyblok schema in TypeScript and pushes it to the space with the Storyblok CLI, instead of building components by hand in the Storyblok UI. The same definitions also give the frontend fully typed content, so a block's Vue component knows its fields.

The frontend is deliberately minimal: just enough templating to show each CMS feature.

## What's inside

**Content types**

- `page`: the default content type every Storyblok space ships with, redefined here. It has a `sections` field for the page builder, plus an SEO tab.
- `blog-post`: title, a single rich text `content` field, cover image, publication date, summary and an SEO tab.
- `settings`: a singleton story, at `config/site-config`, for the site title, main navigation and footer links.

**Sections** (page builder): `section-hero`, `section-cards` and `section-latest-posts`. The latest posts section queries blog posts by content type. With its limit left empty it lists every post, so it also works as the blog index.

**Components** (nested blocks): `button`, `card` and `nav-link`.

**Shared field group:** `seoMeta` is one tab plus its fields, spread into every routable content type.

## How the schema works

```
cms/src/schemaTypes/
├── index.ts           # Registry: every block, and the entry point for `schema push`
├── lib.ts             # Block folders, icon colours, rich text toolbar
├── fieldGroups/       # Fields reused across blocks (seoMeta)
├── documents/         # Routable content types (page, blog-post)
├── sections/          # Page-builder sections
├── components/        # Blocks nested inside sections
└── singletons/        # One-off stories (settings)
```

- Each block is a `defineBlock(...)` with `defineField(...)` entries, from [`@storyblok/schema`](https://www.npmjs.com/package/@storyblok/schema).
- A `bloks` field lists its allowed blocks with `allow: [...]`, which does two things. In Storyblok it restricts what editors can insert. In TypeScript it narrows the delivered type, so a hero's `buttons` is typed as `Content<'button'>[]` rather than an untyped array.
- `shared/index.ts` holds `ROUTABLE_DOCUMENT_TYPES`, which both sides read:
  - the schema uses it to limit link fields to stories that have a URL;
  - the catch-all route uses it to return a 404 for everything else, such as `/config/site-config`.
- `app/utils/cmsFragments.ts` derives `Content<'block-name'>` from the schema. Every component types its `blok` prop with it, so a renamed or removed field is a type error rather than a blank spot on the page.

### Workflow

```sh
pnpm schema:typecheck                # check the definitions
pnpm schema:diff                     # dry run: show what would change in the space
pnpm schema:push                     # apply it
pnpm schema:push --delete            # also delete blocks no longer in the registry
```

To add a block:

1. Define it in the right folder.
2. Register it in `index.ts`.
3. Add it to the `allow` list of the field that should contain it.
4. Create the matching component under `app/components/global/`. Nuxt's `global/` naming convention maps block names to component names: `section/Hero.vue` becomes `SectionHero`, which is the component that renders `section-hero`.

## Getting started

1. Install dependencies: `pnpm install`
2. Copy `.env.example` to `.env` and fill in the space ID, a preview access token and the region.
3. Log in to the CLI and push the schema:

   ```sh
   pnpm storyblok login
   pnpm schema:diff
   pnpm schema:push --delete   # --delete removes the blueprint's teaser/grid/feature blocks
   ```

4. Create the content in Storyblok:
   - a `config` folder with a story `site-config`, of content type **Site Settings**;
   - a `blog` folder whose default content type is **Blog Post**, with a few posts in it;
   - a `blog` start page (content type **Page**) containing a **Latest Posts** section with no limit;
   - the `home` story, rebuilt with the new sections.
5. Generate a local certificate. The Visual Editor needs HTTPS, and this step needs [mkcert](https://github.com/FiloSottile/mkcert) installed:

   ```sh
   pnpm mkcert
   ```

6. Start the dev server with `pnpm dev`. Then, in Storyblok, go to **Settings > Visual Editor** and set the preview URL to `https://localhost:3000/`.

## Notes

- **Component registration:** blocks resolve to components by Nuxt's `global/` naming, so `global/section/Hero.vue` becomes `SectionHero`, which renders `section-hero`. The Storyblok module's own `componentsDir` is off because it would flatten that name to `Hero`.
- **`allow` on `bloks` fields:** besides restricting the editor, it types the field. A field declared without it is an untyped array.
- **`asBlok()`:** the SDK's blok type has no `null`, but the API returns `null` for empty fields. The cast only reconciles the types.
- **`button`:** rendered by `ButtonLink.vue`, because `<StoryblokComponent>` would resolve the name `button` to the native element.
- **Rich text links:** the default renderer emits story links as relative hrefs ([monoblok#146](https://github.com/storyblok/monoblok/issues/146)), so `RichtextLink.vue` routes them like `resolveLink`.
- **`STORYBLOK_VERSION`:** read at build time. To change it on an already-built server, set `NUXT_PUBLIC_STORYBLOK_VERSION`.

## Scripts

| Script | What it does |
|---|---|
| `pnpm dev` | Dev server, over HTTPS |
| `pnpm build` / `pnpm generate` | SSR build or static build |
| `pnpm typecheck` | Type-check the Nuxt app and the schema |
| `pnpm lint` / `pnpm lint:fix` | Lint, or lint and auto-fix |
| `pnpm schema:diff` / `pnpm schema:push` | Compare the schema with the space, or apply it |
| `pnpm mkcert` | Generate the local HTTPS certificate |
