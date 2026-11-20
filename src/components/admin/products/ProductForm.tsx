import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImageUploader, type ImageDraft } from "./ImageUploader";
import { InfoSectionsFields } from "./InfoSectionsFields";
import { ErpFields } from "./ErpFields";
import { VariantCards } from "./VariantCards";
import { flattenCategories } from "@/lib/admin/categories";
import { adminApi } from "@/lib/admin/api";
import { formatAdminDateTime } from "@/lib/admin/dates";
import { productToErpForm, serialVariantSku, validateErpForm } from "@/lib/admin/erp";
import type { Category, Customer, Factory, Product, ProductAttribute, ProductFormValues } from "@/lib/admin/types";
import { compactInfoSections, mergeInfoSections } from "@/lib/catalog/infoSections";
import { Plus, Trash2 } from "lucide-react";

const DEFAULT_LISTING_ATTRIBUTES: ProductAttribute[] = [
  { key: "Capacity", value: "" },
  { key: "Power", value: "" },
  { key: "Voltage", value: "220-240V ~ 50/60Hz" },
  { key: "Dimensions", value: "" },
  { key: "Weight", value: "" },
  { key: "Certifications", value: "CE, CB, RoHS, LFGB" },
  { key: "Production Time", value: "25-35 Days" },
  { key: "Sample Turnaround", value: "7-10 Days" },
];

const QUICK_SPEC_CHIPS = [
  { key: "Housing Material", value: "Brushed Stainless Steel & BPA-free PP" },
  { key: "Control Type", value: "Digital LED Touchscreen" },
  { key: "Temperature Range", value: "40°C - 220°C" },
  { key: "Noise Level", value: "< 55 dB" },
  { key: "Energy Rating", value: "Class A+ Commercial" },
  { key: "Container Loading (40HQ)", value: "680 Units" },
];

function listingAttributes(existing?: ProductAttribute[]): ProductAttribute[] {
  const current = (existing || []).map((item) => ({ key: item.key, value: item.value }));
  const seen = new Set(current.map((item) => item.key.trim().toLowerCase()));
  const missing = DEFAULT_LISTING_ATTRIBUTES.filter((item) => !seen.has(item.key.toLowerCase()));
  const merged = [...current, ...missing];
  return merged.length ? merged : [{ key: "", value: "" }];
}

interface ProductFormProps {
  categories: Category[];
  initial?: Product | null;
  submitting: boolean;
  error?: string;
  onSubmit: (values: ProductFormValues, images: ImageDraft[]) => Promise<void>;
}

export function ProductForm({
  categories,
  initial,
  submitting,
  error,
  onSubmit,
}: ProductFormProps) {
  const [values, setValues] = useState<ProductFormValues>({
    productCode: initial?.productCode || "",
    name: initial?.name || "",
    title: initial?.title || "",
    description: initial?.description || "",
    category: initial?.category.id || "",
    attributes: listingAttributes(initial?.attributes),
    infoSections: mergeInfoSections(initial?.infoSections),
    erp: productToErpForm(initial),
  });
  const [images, setImages] = useState<ImageDraft[]>(
    (initial?.images || []).map((url) => ({ kind: "existing" as const, url }))
  );
  const [factories, setFactories] = useState<Factory[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [localError, setLocalError] = useState("");

  useEffect(() => {
    let cancelled = false;
    Promise.all([adminApi.listFactories(), adminApi.listCustomers()])
      .then(([nextFactories, nextCustomers]) => {
        if (cancelled) return;
        setFactories(nextFactories);
        setCustomers(nextCustomers);
      })
      .catch(() => {
        /* Product can still be saved without factory/customer assignment. */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const setField = (field: Exclude<keyof ProductFormValues, "attributes" | "infoSections" | "erp">, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!values.category) {
      setLocalError("Create and select a category first");
      return;
    }
    if (images.length > 5) {
      setLocalError("A product can have a maximum of 5 images");
      return;
    }
    const attributes = values.attributes
      .map((item) => ({ key: item.key.trim(), value: item.value.trim() }))
      .filter((item) => item.key && item.value);
    const erpError = validateErpForm(values.erp);
    if (erpError) {
      setLocalError(erpError);
      return;
    }
    setLocalError("");
    await onSubmit({ ...values, attributes, infoSections: compactInfoSections(values.infoSections) }, images);
  };

  const setAttribute = (index: number, field: keyof ProductAttribute, value: string) => {
    setValues((current) => ({
      ...current,
      attributes: current.attributes.map((item, currentIndex) =>
        currentIndex === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  if (categories.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 text-sm text-slate-600 space-y-3">
        <p>Create a category first, then add products inside that category or subcategory.</p>
        <Link
          to="/admin/categories"
          className="inline-flex px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Go to categories
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={(event) => void handleSubmit(event)} className="space-y-5">
      {initial?.createdAt || initial?.updatedAt ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wide text-slate-400 block">Created at</span>
            <span className="text-slate-800 font-medium">{formatAdminDateTime(initial?.createdAt)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wide text-slate-400 block">Updated at</span>
            <span className="text-slate-800 font-medium">{formatAdminDateTime(initial?.updatedAt)}</span>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold text-slate-600">Product code</span>
          <input
            value={values.productCode}
            onChange={(event) => setField("productCode", event.target.value)}
            required
            maxLength={60}
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="e.g. AT-KTC-AF85"
          />
          <span className="text-[11px] text-slate-500">
            Family code for the whole appliance model. Primary variant is always the next field.
          </span>
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold text-slate-600">Primary variant code</span>
          <input
            value={serialVariantSku(values.productCode || "MG-001", 0)}
            readOnly
            className="w-full h-10 px-3 text-sm rounded-lg border border-indigo-200 bg-indigo-50 font-mono text-slate-800"
          />
          <span className="text-[11px] text-slate-500">
            Generated automatically as{" "}
            <span className="font-mono font-semibold text-slate-700">
              {serialVariantSku(values.productCode || "MG-001", 0)}
            </span>
            . Extra variants continue as -2, -3.
          </span>
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold text-slate-600">Category</span>
          <select
            value={values.category}
            onChange={(event) => setField("category", event.target.value)}
            required
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
          >
            <option value="">Select category</option>
            {flattenCategories(categories).map((category) => (
              <option key={category.id} value={category.id} disabled={category.childCount > 0}>
                {category.path || category.name}
                {category.childCount > 0 ? " (open a subcategory)" : ""}
              </option>
            ))}
          </select>
          <span className="text-[11px] text-slate-500">
            Select the specific category or subcategory for this product.
          </span>
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold text-slate-600">Name</span>
          <input
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            required
            maxLength={120}
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="e.g. Digital Air Fryer"
          />
        </label>
        <label className="block space-y-1.5 md:col-span-2">
          <span className="text-xs font-semibold text-slate-600">Title / Showcase Headline</span>
          <input
            value={values.title}
            onChange={(event) => setField("title", event.target.value)}
            required
            maxLength={160}
            className="w-full h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="e.g. Smart Digital Air Fryer 8.5L"
          />
        </label>
      </div>

      <label className="block space-y-1.5">
        <span className="text-xs font-semibold text-slate-600">Description</span>
        <textarea
          value={values.description}
          onChange={(event) => setField("description", event.target.value)}
          required
          maxLength={4000}
          rows={4}
          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="Product overview (extra lines become feature bullet points)"
        />
        <span className="text-[11px] text-slate-500">
          First line is the public summary. Extra lines automatically become Standard Factory Features bullet points on the product page.
        </span>
      </label>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-slate-700">Appliance Specifications & Listing Details</span>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Capacity, Power, Voltage, Dimensions, Weight, and Certifications automatically populate the Engineering Specifications sheet on the product page.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setValues((current) => ({
                ...current,
                attributes: [...current.attributes, { key: "", value: "" }],
              }))
            }
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add attribute
          </button>
        </div>

        {/* Quick Add Spec Chips */}
        <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mr-1">Quick Add:</span>
          {QUICK_SPEC_CHIPS.map((chip) => {
            const alreadyAdded = values.attributes.some((a) => a.key.toLowerCase().trim() === chip.key.toLowerCase().trim());
            return (
              <button
                key={chip.key}
                type="button"
                disabled={alreadyAdded}
                onClick={() => {
                  setValues((current) => ({
                    ...current,
                    attributes: [...current.attributes, { key: chip.key, value: chip.value }],
                  }));
                }}
                className={`text-[11px] px-2 py-0.5 rounded-md border font-medium transition-colors ${
                  alreadyAdded
                    ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                    : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-600 cursor-pointer"
                }`}
              >
                + {chip.key}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          {values.attributes.map((item, index) => (
            <div key={`attr-${index}`} className="grid grid-cols-[1fr_1fr_auto] gap-2">
              <input
                value={item.key}
                onChange={(event) => setAttribute(index, "key", event.target.value)}
                placeholder="Spec Name"
                className="h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <input
                value={item.value}
                onChange={(event) => setAttribute(index, "value", event.target.value)}
                placeholder="Value"
                className="h-10 px-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() =>
                  setValues((current) => ({
                    ...current,
                    attributes:
                      current.attributes.length > 1
                        ? current.attributes.filter((_, currentIndex) => currentIndex !== index)
                        : [{ key: "", value: "" }],
                  }))
                }
                className="h-10 w-10 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg flex items-center justify-center cursor-pointer"
                aria-label="Remove attribute"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ImageUploader images={images} onChange={setImages} label="Primary variant images (max 5)" />

      <ErpFields
        values={values.erp}
        factories={factories}
        customers={customers}
        onChange={(patch) => {
          setValues((current) => ({ ...current, erp: { ...current.erp, ...patch } }));
        }}
        variantSlot={
          <VariantCards
            productCode={values.productCode}
            values={values.erp}
            onChange={(patch) =>
              setValues((current) => ({ ...current, erp: { ...current.erp, ...patch } }))
            }
          />
        }
      />

      <InfoSectionsFields
        sections={values.infoSections}
        onChange={(infoSections) => setValues((current) => ({ ...current, infoSections }))}
      />

      {localError || error ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg font-medium">
          {localError || error}
        </p>
      ) : null}

      <div className="flex items-center justify-end gap-2 pt-2">
        <Link
          to="/admin/products"
          className="px-3.5 py-2 text-xs font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-60 transition-colors shadow-xs cursor-pointer"
        >
          {submitting ? "Saving..." : initial ? "Update product" : "Create product"}
        </button>
      </div>
    </form>
  );
}
