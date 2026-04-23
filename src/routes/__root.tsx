import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/icon.jpg";

function GlobalLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
          <div className="absolute inset-0 rounded-full border-t-2 border-gold animate-spin" />
        </div>
        <span className="font-display text-[10px] tracking-[0.4em] text-gold uppercase animate-pulse">
          Kenavid
        </span>
      </div>
    </motion.div>
  );
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20 px-5">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl text-gradient-gold">404</p>
        <h1 className="mt-4 text-2xl font-display">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you're looking for has wandered off the runway.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kenavid Couture - Bespoke Male Fashion | Clothes That Matter" },
      {
        name: "description",
        content:
          "Kenavid Couture is a luxury bespoke male fashion house in Lagos, Nigeria - crafting agbada, kaftan and tailored menswear with mastery and intention.",
      },
      {
        name: "keywords",
        content:
          "bespoke menswear, agbada, kaftan, tailored suits, lagos fashion, Kenavid Couture, luxury african menswear, men's fashion nigeria, custom tailoring",
      },
      { name: "author", content: "Kenavid Couture" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#000000" },

      // Open Graph / Facebook
      { property: "og:title", content: "Kenavid Couture - Bespoke Male Fashion" },
      { property: "og:description", content: "Luxury bespoke menswear. Clothes That Matter." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kenavidcouture.com" },
      { property: "og:image", content: "https://kenavidcouture.com/og-image.jpg" },
      { property: "og:site_name", content: "Kenavid Couture" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@kenavidcouture" },
      { name: "twitter:title", content: "Kenavid Couture - Bespoke Male Fashion" },
      { name: "twitter:description", content: "Luxury bespoke menswear. Clothes That Matter." },
      { name: "twitter:image", content: "https://kenavidcouture.com/og-image.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logo },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnimatePresence>{mounted && isNavigating && <GlobalLoader />}</AnimatePresence>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
