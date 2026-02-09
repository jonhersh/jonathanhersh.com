# jonathanhersh.com (Next.js 14)

Production-ready website for expert witness lead generation + academic credibility.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Single content source: `src/content/site.ts`
- Optional local MDX posts: `content/blog/*.mdx`

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Form Handling

Set Formspree endpoint (preferred):

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

If not set, `/contact` form falls back to a prefilled `mailto:` flow.

## Content Editing

Edit all core copy and links in:

- `src/content/site.ts`

Optional local blog posts:

- `content/blog/*.mdx`

## SEO Features

- Global + per-page metadata
- Canonical URLs
- OpenGraph + Twitter card (`/public/og.png`)
- JSON-LD: `Person` and `ProfessionalService`
- `app/sitemap.ts`
- `app/robots.ts`

## Deploy to Vercel

1. Push repo to GitHub.
2. In Vercel, create a new project from the repository.
3. Framework preset: `Next.js`.
4. Add env vars (for form handling if desired):
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Deploy.

## Connect Domain via Cloudflare DNS (No Nameserver Change)

Use Cloudflare DNS only. Keep current nameservers.

1. In Vercel project settings, add domains:
   - `jonathanhersh.com`
   - `www.jonathanhersh.com`
2. In Cloudflare DNS, create/update records:
   - Type: `CNAME`, Name: `@`, Target: `cname.vercel-dns.com`, Proxy: DNS only (gray cloud)
   - Type: `CNAME`, Name: `www`, Target: `cname.vercel-dns.com`, Proxy: DNS only (gray cloud)
3. Wait for DNS propagation and verify in Vercel.

## Notes

- Replace `public/cv.pdf` with the final CV file.
- Replace `public/og.png` with branded OpenGraph art if desired.
- Replace placeholder email/scheduling links in `src/content/site.ts`.
