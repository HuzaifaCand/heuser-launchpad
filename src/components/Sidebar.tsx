"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  FolderHeart,
  UserCircle,
  Users,
  ShieldCheck,
  Compass,
  Menu,
  X,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type Role = "admin" | "student";

interface SidebarProps {
  role: Role;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const studentItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Opportunities",
    href: "/dashboard/opportunities",
    icon: Compass,
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
    icon: FolderHeart,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UserCircle,
  },
];

const adminItems: NavItem[] = [
  {
    title: "Overview",
    href: "/admin",
    icon: ShieldCheck,
  },
  {
    title: "Manage Opportunities",
    href: "/admin/opportunities",
    icon: Briefcase,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: Users,
  },
];

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const items = role === "admin" ? adminItems : studentItems;
  const [isOpen, setIsOpen] = React.useState(false);

  // Close sidebar on route change (mobile)
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle resize events
  React.useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-full bg-background/80 p-2 shadow-sm backdrop-blur-sm transition-all hover:bg-accent md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-foreground" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-border/40 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <div>
            <div className="mb-8 mt-2 flex items-center justify-between px-3">
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none">
                  LaunchPad
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 mt-1">
                  Heuser College
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-accent md:hidden"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <nav className="space-y-2">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-4 w-4",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    />
                    <span className="relative z-10">{item.title}</span>
                    {isActive && (
                      <div className="absolute left-0 h-full w-1 rounded-full bg-primary opacity-0" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="w-full h-px bg-border/40" />

            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-medium text-muted-foreground">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
              <div className="scale-75 origin-right">
                <ThemeToggle />
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl border border-border/0 hover:border-border/40 hover:bg-accent/10 px-2 py-2 transition-all duration-200">
              <div className="relative h-8 w-8 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-sm group-hover:bg-primary/20 transition-colors" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border/50 bg-background text-[10px] font-bold text-primary shadow-sm">
                  {role === "admin" ? "AD" : "ST"}
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-xs font-bold text-foreground capitalize leading-none">
                  User Name
                </span>
                <span className="truncate text-[10px] font-medium text-muted-foreground/60 tracking-tight mt-0.5">
                  student@heuser.edu
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
