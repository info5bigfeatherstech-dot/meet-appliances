import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminBackLink } from "@/components/admin/layout/AdminBackLink";
import { ProductForm } from "@/components/admin/products/ProductForm";
import type { ImageDraft } from "@/components/admin/products/ImageUploader";
import { adminApi, AdminApiError } from "@/lib/admin/api";
import { buildProductFormData } from "@/lib/admin/productFormData";
import type { Category, Product, ProductFormValues } from "@/lib/admin/types";

export function AdminProductEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!id) return;
    Promise.all([adminApi.getProduct(id), adminApi.listCategories()])
      .then(([nextProduct, nextCategories]) => {
        setProduct(nextProduct);
        setCategories(nextCategories);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Unable to load product"))
      .finally(() => setReady(true));
  }, [id]);

  const handleSubmit = async (values: ProductFormValues, images: ImageDraft[]) => {
    if (!id) return;
    setSubmitting(true);
    setError("");
    const form = buildProductFormData(values, images, "update");

    try {
      await adminApi.updateProduct(id, form);
      navigate("/admin/products", { replace: true });
    } catch (err) {
      setError(err instanceof AdminApiError ? err.message : "Unable to update product");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl space-y-5">
      <div className="space-y-2">
        <AdminBackLink href="/admin/products" label="Back to products" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Edit Product: {product?.productCode || id}</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Update catalog details, ERP fields, variants, and product imagery.
          </p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
        {!ready ? (
          <p className="text-sm text-slate-500 p-8 text-center">Loading product data...</p>
        ) : product ? (
          <ProductForm
            categories={categories}
            initial={product}
            submitting={submitting}
            error={error}
            onSubmit={handleSubmit}
          />
        ) : (
          <p className="text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
            {error || "Product not found."}
          </p>
        )}
      </div>
    </div>
  );
}
