"use client";

import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      expand={true}
      richColors={false}
      closeButton={true}
      visibleToasts={4}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-zinc-950/90 dark:group-[.toaster]:backdrop-blur-md group-[.toaster]:text-zinc-950 dark:group-[.toaster]:text-zinc-50 group-[.toaster]:border-zinc-200 dark:group-[.toaster]:border-zinc-800 group-[.toaster]:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-[.toaster]:shadow-[0_8px_30px_rgb(0,0,0,0.4)] font-medium rounded-xl border-2 dark:border",
          description:
            "group-[.toast]:text-zinc-500 dark:group-[.toast]:text-zinc-400 group-[.toast]:text-xs",
          actionButton:
            "group-[.toast]:bg-zinc-900 group-[.toast]:text-zinc-50 dark:group-[.toast]:bg-zinc-50 dark:group-[.toast]:text-zinc-900 font-semibold",
          cancelButton:
            "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500 dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400",
          error:
            "group-[.toaster]:!text-red-600 group-[.toaster]:!border-red-100 dark:group-[.toaster]:!border-red-900/30",
          success:
            "group-[.toaster]:!text-emerald-600 group-[.toaster]:!border-emerald-100 dark:group-[.toaster]:!border-emerald-900/30",
          warning:
            "group-[.toaster]:!text-amber-600 group-[.toaster]:!border-amber-100 dark:group-[.toaster]:!border-amber-900/30",
          info: "group-[.toaster]:!text-blue-600 group-[.toaster]:!border-blue-100 dark:group-[.toaster]:!border-blue-900/30",
          closeButton:
            "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500 dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400 group-[.toast]:hover:bg-zinc-200 dark:group-[.toast]:hover:bg-zinc-700 transition-colors",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
