import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Upload, Search } from "lucide-react";
import { ProductTable } from "@/components/admin/products/ProductTable";
import { flattenCategories } from "@/lib/admin/categories";
import { adminApi } from "@/lib/admin/api";
import type { Category, Product } from "@/lib/admin/types";

export function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (nextCategory: string, nextSearch: string) => {
    const [productRows, categoryRows] = await Promise.all([
      adminApi.listProducts({
        category: nextCategory !== "all" ? nextCategory : undefined,
        search: nextSearch.trim() || undefined,
        includeInactive: true,
      }),
      adminApi.listCategories(),
    ]);
    setProducts(productRows);
    setCategories(categoryRows);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(true);
      load(category, search)
        .catch((err) =>
          setError(
            err instanceof Error ? err.message : "Unable to load products",
          ),
        )
        .finally(() => setLoading(false));
    }, 250);
    return () => window.clearTimeout(timer);
  }, [category, search, load]);

  const handleDelete = async (product: Product) => {
    if (!window.confirm(`Delete product "${product.productCode}"?`)) return;
    try {
      await adminApi.deleteProduct(product.id);
      await load(category, search);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete product");
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Products Catalog
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse product master records, ERP specifications, variants and
            pricing. Expand any row to see variants.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/admin/products/import"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-2xs transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-slate-500" />
            Bulk import
          </Link>
          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add product
          </Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center gap-3 shadow-2xs">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search product code, name or title..."
            className="h-9 w-full pl-9 pr-3 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-9 px-3 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-blue-500 cursor-pointer min-w-[180px]"
        >
          <option value="all">All categories</option>
          {flattenCategories(categories).map((item) => (
            <option key={item.id} value={item.id}>
              {item.path || item.name}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      ) : null}

      {loading ? (
        <div className="p-8 text-center text-sm text-slate-500">
          Loading product catalog...
        </div>
      ) : (
        <ProductTable
          products={products}
          onDelete={(product) => void handleDelete(product)}
        />
      )}
    </div>
  );
}
