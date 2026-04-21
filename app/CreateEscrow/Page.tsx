// app/(dashboard)/layout.tsx
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/CryptoTop";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A]">
            <Sidebar />

            <div className="flex-1 md:ml-[240px]">
                <Topbar />
                <main className="p-4 md:p-6 max-w-5xl mx-auto">{children}</main>
            </div>
        </div>
    );
}