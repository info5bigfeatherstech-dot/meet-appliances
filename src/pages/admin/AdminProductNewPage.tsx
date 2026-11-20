import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminBackLink } from "@/components/admin/layout/AdminBackLink";
import { ProductForm } from "@/components/admin/products/ProductForm";
import type { ImageDraft } from "@/components/admin/products/ImageUploader";
import { adminApi, AdminApiError } from "@/lib/admin/api";
import { buildProductFormData } from "@/lib/admin/productFormData";
import type { Category, ProductFormValues } from "@/lib/admin/types";

export function AdminProductNewPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    adminApi
      .listCategories()
      .then(setCategories)
      .catch((err) => setError(err instanceof Error ? err.message : "Unable to load categories"))
      .finally(() => setReady(true));
  }, []);

  const handleSubmit = async (values: ProductFormValues, images: ImageDraft[]) => {
    setSubmitting(true);
    setError("");
    const form = buildProductFormData(values, images, "create");

    try {
      await adminApi.createProduct(form);
      navigate("/admin/products", { replace: true });
    } catch (err) {
      setError(err instanceof AdminApiError ? err.message : "Unable to create product");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl space-y-5">
      <div className="space-y-2">
        <AdminBackLink href="/admin/products" label="Back to products" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Create Export Product</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fill core product information, ERP specifications, multi-SKU variants, and upload gallery imagery.
          </p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
        {ready ? (
          <ProductForm
            categories={categories}
            submitting={submitting}
            error={error}
            onSubmit={handleSubmit}
          />
        ) : (
          <p className="text-sm text-slate-500 p-8 text-center">Loading product form...</p>
        )}
      </div>
    </div>
  );
}
