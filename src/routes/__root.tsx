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
  head: () => {
    return {
      meta: [
        // Dynamic meta overrides for nested routes can be placed here in the future
      ],
      links: [{ rel: "stylesheet", href: appCss }],
    };
  },
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <AnimatePresence>{mounted && isNavigating && <GlobalLoader />}</AnimatePresence>
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Scripts />
    </>
  );
}
