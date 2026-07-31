/**
 * Renders a Schema.org JSON-LD block. Keep these in the server-rendered HTML —
 * AI crawlers frequently skip JavaScript, so schema must not be injected client-side.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const payload = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {payload.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
