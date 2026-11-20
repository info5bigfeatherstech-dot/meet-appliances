import React, { useCallback, useEffect, useState } from "react";
import { Plus, Globe, Mail, Pencil, Trash2 } from "lucide-react";
import { CUSTOMER_TIERS } from "@/lib/admin/erp";
import { adminApi, AdminApiError } from "@/lib/admin/api";
import type { Customer, CustomerPayload } from "@/lib/admin/types";

const emptyForm: CustomerPayload = {
  name: "",
  country: "",
  tier: "Wholesale",
  primaryContact: "",
  email: "",
};

export function AdminCustomersPage() {
  const [rows, setRows] = useState<Customer[]>([]);
  const [editing, setEditing] = useState<Customer | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<CustomerPayload>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setRows(await adminApi.listCustomers());
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    load()
      .catch((err) => {
        if (!cancelled)
          setError(
            err instanceof Error ? err.message : "Unable to load customers",
          );
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

  const openEdit = (customer: Customer) => {
    setEditing(customer);
    setForm({
      name: customer.name,
      country: customer.country,
      tier: customer.tier,
      primaryContact: customer.primaryContact,
      email: customer.email,
    });
    setFormOpen(true);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setError("Customer name is required");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const payload = {
        name: form.name.trim(),
        country: form.country?.trim() || "",
        tier: form.tier || "Wholesale",
        primaryContact: form.primaryContact?.trim() || "",
        email: form.email?.trim() || "",
      };
      if (editing) {
        await adminApi.updateCustomer(editing.id, payload);
      } else {
        await adminApi.createCustomer(payload);
      }
      await load();
      setFormOpen(false);
      setEditing(null);
    } catch (err) {
      setError(
        err instanceof AdminApiError ? err.message : "Unable to save customer",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (customer: Customer) => {
    if (
      !window.confirm(
        `Delete customer "${customer.name}"? Products using it must be reassigned first.`,
      )
    )
      return;
    try {
      await adminApi.deleteCustomer(customer.id);
      await load();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to delete customer",
      );
    }
  };

  const setField = (field: keyof CustomerPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Export Buyers & Customer Directory
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            International buyers, brands, and retail chains with automated
            C26-xxx codes and tier classifications.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          Add buyer
        </button>
      </div>

      {error ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      ) : null}

      {formOpen ? (
        <form
          onSubmit={(event) => void handleSubmit(event)}
          className="bg-white border border-slate-200 rounded-xl p-5 space-y-4 shadow-xs"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            {editing ? `Edit buyer: ${editing.name}` : "New buyer account"}
          </h2>
          {editing ? (
            <p className="text-xs text-slate-500 font-mono">
              Code: {editing.code}
            </p>
          ) : null}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block space-y-1.5 md:col-span-2">
              <span className="text-xs font-semibold text-slate-600">
                Company / Brand name
              </span>
              <input
                value={form.name}
                onChange={(event) => setField("name", event.target.value)}
                required
                maxLength={120}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Zara Sourcing / Inditex"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Country
              </span>
              <input
                value={form.country}
                onChange={(event) => setField("country", event.target.value)}
                maxLength={80}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Spain"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Buyer Tier
              </span>
              <select
                value={form.tier}
                onChange={(event) => setField("tier", event.target.value)}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
              >
                {CUSTOMER_TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier}
                  </option>
                ))}
              </select>
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Primary merchandising contact
              </span>
              <input
                value={form.primaryContact}
                onChange={(event) =>
                  setField("primaryContact", event.target.value)
                }
                maxLength={80}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. Maria Gonzalez"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Email
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setField("email", event.target.value)}
                maxLength={120}
                className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="e.g. sourcing@zara.com"
              />
            </label>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60 transition-colors shadow-xs cursor-pointer"
            >
              {submitting
                ? "Saving..."
                : editing
                  ? "Update buyer"
                  : "Register buyer"}
            </button>
          </div>
        </form>
      ) : null}

      {loading ? (
        <div className="p-8 text-center text-sm text-slate-500">
          Loading buyers directory...
        </div>
      ) : rows.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-sm text-slate-500">
          No international buyer accounts registered yet.
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Buyer Code</th>
                <th className="px-4 py-3 font-semibold">Account / Brand</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                  Tier
                </th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">
                  Contact
                </th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-4 py-3 font-mono font-semibold text-slate-900 text-xs">
                    <span className="bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded">
                      {customer.code}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">
                      {customer.name}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Globe className="w-3 h-3 text-slate-400" />
                      <span>{customer.country || "—"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                        customer.tier === "Key Account"
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : customer.tier === "Retail Brand"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {customer.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 hidden md:table-cell text-xs">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>
                        {[customer.primaryContact, customer.email]
                          .filter(Boolean)
                          .join(" · ") || "—"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEdit(customer)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        title="Edit buyer"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDelete(customer)}
                        className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete buyer"
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
