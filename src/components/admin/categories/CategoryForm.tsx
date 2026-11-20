import React, { useEffect, useMemo, useState } from "react";
import type { Category, CategoryPayload } from "@/lib/admin/types";
import { collectDescendantIds, flattenCategories } from "@/lib/admin/categories";

interface CategoryFormProps {
  categories: Category[];
  initial?: Category | null;
  defaultParentId?: string | null;
  submitting: boolean;
  onSubmit: (payload: CategoryPayload) => Promise<void>;
  onCancel: () => void;
}

export function CategoryForm({
  categories,
  initial,
  defaultParentId = null,
  submitting,
  onSubmit,
  onCancel,
}: CategoryFormProps) {
  const [name, setName] = useState(initial?.name || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [parentId, setParentId] = useState(initial?.parentId || defaultParentId || "");
  const [categoryMode, setCategoryMode] = useState<"root" | "sub">(
    initial?.parentId || defaultParentId ? "sub" : "root"
  );
  const [error, setError] = useState("");

  useEffect(() => {
    setName(initial?.name || "");
    setDescription(initial?.description || "");
    const initialParent = initial?.parentId || defaultParentId || "";
    setParentId(initialParent);
    setCategoryMode(initialParent ? "sub" : "root");
    setError("");
  }, [initial, defaultParentId]);

  const parentOptions = useMemo(() => {
    const blocked = new Set<string>();
    if (initial) {
      blocked.add(initial.id);
      collectDescendantIds(initial).forEach((id) => blocked.add(id));
    }
    return flattenCategories(categories).filter((category) => !blocked.has(category.id));
  }, [categories, initial]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Category name must be at least 2 characters");
      return;
    }
    if (categoryMode === "sub" && !parentId) {
      setError("Please select a parent category, or switch to 'New Main Category (On my own)'");
      return;
    }
    setError("");
    try {
      await onSubmit({
        name: name.trim(),
        description: description.trim(),
        parentId: categoryMode === "root" ? null : (parentId || null),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save category");
    }
  };

  return (
    <form onSubmit={(event) => void handleSubmit(event)} className="space-y-4">
      {/* Category Type Selector: Create on your own vs Subcategory */}
      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
        <span className="text-xs font-semibold text-slate-700 block">Where should this category be placed?</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setCategoryMode("root");
              setParentId("");
            }}
            className={`px-3 py-2 text-xs rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2 ${
              categoryMode === "root"
                ? "bg-blue-600 text-white border-blue-600 shadow-xs font-semibold"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>📁</span>
            <div>
              <span className="block font-medium">New Main Category</span>
              <span className={`text-[10px] block ${categoryMode === "root" ? "text-blue-100" : "text-slate-400"}`}>
                Create on my own (Independent)
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setCategoryMode("sub")}
            className={`px-3 py-2 text-xs rounded-lg border text-left transition-all cursor-pointer flex items-center gap-2 ${
              categoryMode === "sub"
                ? "bg-blue-600 text-white border-blue-600 shadow-xs font-semibold"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>📂</span>
            <div>
              <span className="block font-medium">Subcategory</span>
              <span className={`text-[10px] block ${categoryMode === "sub" ? "text-blue-100" : "text-slate-400"}`}>
                Nest inside an existing category
              </span>
            </div>
          </button>
        </div>

        {categoryMode === "root" ? (
          <div className="text-[11px] text-blue-700 bg-blue-50 p-2.5 rounded-lg border border-blue-100 leading-relaxed">
            ✨ <strong>Creating on your own:</strong> This will create a brand-new main category (e.g. <em>Appliances</em>, <em>Kitchen</em>, <em>Home Care</em>) without depending on Footwear or Garments.
          </div>
        ) : (
          <label className="block space-y-1.5 pt-1">
            <span className="text-xs font-semibold text-slate-600">Parent Category</span>
            <select
              value={parentId}
              onChange={(event) => setParentId(event.target.value)}
              className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
            >
              <option value="">-- Select parent category --</option>
              {parentOptions.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.path || category.name}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <label className="block space-y-1.5">
        <span className="text-xs font-semibold text-slate-600">Category name</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          maxLength={80}
          className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder={categoryMode === "root" ? "e.g. Appliances, Kitchen, Home Care" : "e.g. Air Fryers, Vacuum Cleaners"}
        />
      </label>

      <label className="block space-y-1.5">
        <span className="text-xs font-semibold text-slate-600">Description</span>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={500}
          rows={3}
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="Optional short description"
        />
      </label>

      {error ? <p className="text-sm text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-lg">{error}</p> : null}

      <div className="flex items-center justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3.5 py-2 text-xs font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60 transition-colors cursor-pointer shadow-xs"
        >
          {submitting ? "Saving..." : initial ? "Update category" : "Create category"}
        </button>
      </div>
    </form>
  );
}
