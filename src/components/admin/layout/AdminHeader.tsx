import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, LogOut, Menu } from "lucide-react";
import { MeetLogo } from "@/components/common/MeetLogo";
import { adminApi } from "@/lib/admin/api";

interface AdminHeaderProps {
  email: string;
  onToggleSidebar: () => void;
}

export function AdminHeader({ email, onToggleSidebar }: AdminHeaderProps) {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await adminApi.logout();
    } finally {
      navigate("/admin/login", { replace: true });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/admin" className="flex items-center gap-2">
            <MeetLogo size="sm" />
            <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
              Admin
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/products"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition"
          >
            View storefront
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
          <div className="hidden sm:block text-xs text-slate-500 max-w-[200px] truncate font-medium">
            {email}
          </div>
          <button
            type="button"
            onClick={() => void handleLogout()}
            disabled={loggingOut}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200 rounded-lg transition disabled:opacity-60 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            {loggingOut ? "Signing out..." : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
}
