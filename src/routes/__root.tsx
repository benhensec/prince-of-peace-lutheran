import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/ministry/site-shell";
import { asset } from "@/lib/asset";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prince of Peace Lutheran Church" },
      { name: "theme-color", content: "#1f4f4a" },
      {
        name: "description",
        content:
          "Prince of Peace Lutheran Church — ELCA congregation in Fernandina Beach, Florida. Come… be a part of peace.",
      },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: asset("/favicon-pop.jpg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: asset("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: asset("/__grok/icon-180.png") },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" data-site="pop" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
