import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export async function proxy(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () =>
        req.cookies.getAll().map((c) => ({ name: c.name, value: c.value })),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = req.nextUrl.pathname;

  const redirect = (path: string) =>
    NextResponse.redirect(new URL(path, req.url));

  // ---------- NOT LOGGED IN ----------
  if (!user) {
    if (pathname.startsWith("/login")) return res;
    return redirect("/login");
  }

  // ---------- GET ROLE ----------
  const { data: userRow } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = userRow?.role;
  const roleHome = role === "admin" ? "/admin" : "/dashboard";

  // ---------- ROOT ----------
  if (pathname === "/") {
    return redirect(roleHome);
  }

  // ---------- LOGIN ----------
  if (pathname.startsWith("/login")) {
    return redirect(roleHome);
  }

  // ---------- DASHBOARD ----------
  if (pathname.startsWith("/dashboard")) {
    if (role !== "student") return redirect(roleHome);
    return res;
  }

  // ---------- ADMIN ----------
  if (pathname.startsWith("/admin")) {
    if (role !== "admin") return redirect(roleHome);
    return res;
  }

  return res;
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
