import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Building2,
  Users,
  X,
} from "lucide-react";

const mainLinks = [
  { to: "/admin", label: "Executive Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/products", label: "Product Catalog", icon: Package, exact: false },
  { to: "/admin/categories", label: "Categories Tree", icon: FolderTree, exact: false },
  { to: "/admin/factories", label: "Partner Factories", icon: Building2, exact: false },
  { to: "/admin/customers", label: "Buyers & Customers", icon: Users, exact: false },
];

interface AdminSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ mobileOpen, onClose }: AdminSidebarProps) {
  const { pathname } = useLocation();

  return (
    <>
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs"
          onClick={onClose}
        />
      )}

      <aside
        className={`${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-100">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-4 space-y-6 flex-1 overflow-y-auto">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Management
            </div>
            <div className="space-y-1">
              {mainLinks.map((link) => {
                const active = link.exact
                  ? pathname === link.to
                  : pathname === link.to || pathname.startsWith(`${link.to}/`);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-700 font-semibold border border-blue-100 shadow-2xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100 text-slate-400 text-[11px] text-center">
          Meet Appliances Admin Panel
        </div>
      </aside>
    </>
  );
}
