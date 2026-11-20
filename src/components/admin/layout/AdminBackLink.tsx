import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function AdminBackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      to={href}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      {label}
    </Link>
  );
}
