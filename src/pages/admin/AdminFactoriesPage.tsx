import React, { useCallback, useEffect, useState } from "react";
import { Plus, MapPin, Phone, Trash2, Pencil } from "lucide-react";
import { adminApi, AdminApiError } from "@/lib/admin/api";
import type { Factory, FactoryPayload } from "@/lib/admin/types";

const emptyForm: FactoryPayload = {
  name: "",
  country: "",
  city: "",
  contactPerson: "",
  phone: "",
};

export function AdminFactoriesPage() {
  const [rows, setRows] = useState<Factory[]>([]);
  const [editing, setEditing] = useState<Factory | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<FactoryPayload>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setRows(await adminApi.listFactories());
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    load()
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Unable to load factories");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [load]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setFormOpen(true);
    setError("");
  };

  const openEdit = (factory: Factory) => {
    setEditing(factory);
    setForm({
      name: factory.name,
      country: factory.country,
      city: factory.city,
      contactPerson: factory.contactPerson,
      phone: factory.phone,
    });
    setFormOpen(true);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setError("Factory name is required");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const payload = {
        name: form.name.trim(),
        country: form.country?.trim() || "",
        city: form.city?.trim() || "",
        contactPerson: form.contactPerson?.trim() || "",
        phone: form.phone?.trim() || "",
      };
      if (editing) {
        await adminApi.updateFactory(editing.id, payload);
      } else {
        await adminApi.createFactory(payload);
      }
      await load();
      setFormOpen(false);
      setEditing(null);
    } catch (err) {
      setError(err instanceof AdminApiError ? err.message : "Unable to save factory");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (factory: Factory) => {
    if (!window.confirm(`Delete factory "${factory.name}"? Products using it must be reassigned first.`)) return;
    try {
      await adminApi.deleteFactory(factory.id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete factory");
    }
  };

  const setField = (field: keyof FactoryPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Partner Manufacturing Units</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Supplier manufacturing units with automated F26-xxx codes. Linked in product ERP specs.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          Add factory
        </button>
      </div>

      {error ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      ) : null}

      {formOpen ? (
        <form onSubmit={(event) => void handleSubmit(event)} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs">
          <h2 className="text-sm font-semibold text-slate-900">{editing ? `Edit factory: ${editing.name}` : "New factory"}</h2>
          {editing ? <p className="text-xs text-slate-500 font-mono">Code: {editing.code}</p> : null}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block space-y-1.5 md:col-span-2">
              <span className="text-xs font-semibold text-slate-600">Facility name</span>
              <input value={form.name} onChange={(event) => setField("name", event.target.value)} required maxLength={120} className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="e.g. Maya Apparels Unit 1" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">Country</span>
              <input value={form.country} onChange={(event) => setField("country", event.target.value)} maxLength={80} className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="e.g. India" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">City / Port</span>
              <input value={form.city} onChange={(event) => setField("city", event.target.value)} maxLength={80} className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="e.g. Tirupur" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">Contact person</span>
              <input value={form.contactPerson} onChange={(event) => setField("contactPerson", event.target.value)} maxLength={80} className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="e.g. Factory Head" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">Phone / Email</span>
              <input value={form.phone} onChange={(event) => setField("phone", event.target.value)} maxLength={40} className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="e.g. +91 9876543210" />
            </label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setFormOpen(false)} className="px-3.5 py-2 text-xs font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
              Cancel
            </button>
            <button type="submit" disabled={submitting} className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60 transition-colors shadow-xs cursor-pointer">
              {submitting ? "Saving..." : editing ? "Update factory" : "Create factory"}
            </button>
          </div>
        </form>
      ) : null}

      {loading ? (
        <div className="p-8 text-center text-sm text-slate-500">Loading factories...</div>
      ) : rows.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-sm text-slate-500">
          No manufacturing facilities registered yet.
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Factory Code</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Location</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Contact</th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((factory) => (
                <tr key={factory.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-4 py-3 font-mono font-semibold text-slate-900 text-xs">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded">
                      {factory.code}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900">{factory.name}</td>
                  <td className="px-4 py-3 text-slate-600 hidden sm:table-cell text-xs">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{[factory.city, factory.country].filter(Boolean).join(", ") || "—"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 hidden md:table-cell text-xs">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{[factory.contactPerson, factory.phone].filter(Boolean).join(" · ") || "—"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEdit(factory)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        title="Edit factory"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDelete(factory)}
                        className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete factory"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
