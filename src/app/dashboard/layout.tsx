import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar role="student" />
      <main className="flex-1 transition-all duration-300 md:pl-64">
        <div className="mx-auto max-w-7xl p-8 pt-20 md:p-8">{children}</div>
      </main>
    </div>
  );
}
