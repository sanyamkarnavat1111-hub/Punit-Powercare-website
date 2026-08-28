import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

const APP_NAME = "Punit Powercare";
const DESCRIPTION =
  "Punit Powercare — leading APFC panel manufacturer in Nashik. Thyristorised & contactor-based APFC panels, LT panels, AMC & 24×7 service across Maharashtra.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Punit Powercare",
  description: DESCRIPTION,
  telephone: "+917579853838",
  email: "punitpowercare@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Flat No. 11, Geetganga Society, Saptashrungi Nagar, Old Saykheda Road, Jail Road",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "422101",
    addressCountry: "IN",
  },
  areaServed: { "@type": "State", name: "Maharashtra" },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { title: "Thyristorised APFC Panel Manufacturer in Nashik | Punit Powercare" },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#0E1114" },
      { name: "author", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg text-fg">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest text-primary">404</h1>
          <p className="mt-4 text-xl">Page not found</p>
          <a href="/" className="mt-8 inline-block border border-primary px-6 py-2 text-primary hover:bg-primary/10">
            Return Home
          </a>
        </div>
      </div>
    );
  },
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
