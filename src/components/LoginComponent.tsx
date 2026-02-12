"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ThemeToggle } from "./ThemeToggle";

export const bg =
  "bg-gradient-to-br from-[#f9fafb] via-white to-[#eef2f7] dark:from-zinc-950 dark:via-black dark:to-zinc-900 transition-colors duration-500";

export function LoginComponent({
  handleSignIn,
  loading,
}: {
  handleSignIn: () => void;
  loading: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex min-h-screen items-center justify-center px-4 sm:px-6 relative",
        bg,
      )}
    >

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-0 -left-0 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-0 -right-0 w-96 h-96 bg-gray-400/10 dark:bg-zinc-800/20 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        {/* Glass-style card */}
        <div className="relative rounded-2xl border border-gray-200/70 bg-white/80 dark:bg-zinc-900/60 dark:border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 text-center transition-colors duration-300">
          {/* Accent bar */}
          <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent" />

          {/* Logo + Title */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-red-500/10 dark:bg-red-500/20 blur-md" />
              <Image
                src="/android-chrome-192x192.png"
                alt="Launchpad Logo"
                width={84}
                height={84}
                priority
                className="relative rounded-2xl border border-gray-200 shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                LaunchPad
              </h1>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                Opportunity Hub for{" "}
                <span className="text-red-500 font-medium dark:text-red-500">
                  Heuser College
                </span>
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent" />

          {/* Sign-in Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="group w-full rounded-xl border border-gray-300/80 bg-white dark:bg-zinc-900 dark:border-white/10 px-4 py-3 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-zinc-800"
            >
              <span className="flex items-center justify-center gap-3">
                <Image
                  src="/google-icon.svg"
                  alt="Google"
                  width={18}
                  height={18}
                />
                <span className="font-medium text-sm text-gray-800 dark:text-zinc-200 tracking-tight">
                  {loading ? "Signing in…" : "Sign in with Google"}
                </span>
              </span>
            </button>
          </motion.div>

          {/* Subtle footer */}
          <p className="mt-6 text-xs text-gray-400 dark:text-zinc-500">
            Please use your heuser college email to sign in
          </p>
        </div>
      </motion.div>
    </div>
  );
}
