import Link from "next/link";

type Crumb = { name: string; path: string };

/**
 * Visible breadcrumb trail. Google expects the rendered breadcrumb to match the
 * BreadcrumbList schema emitted alongside it, and it gives assistants an
 * explicit statement of where a page sits in the site hierarchy.
 */
export function Breadcrumbs({ trail }: { trail: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-brand-ink/60">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="line-clamp-1 text-brand-ink/80">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="hover:text-brand-ocean">
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
