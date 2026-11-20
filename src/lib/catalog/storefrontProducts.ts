import type { Product, TradeMode } from "@/types";
import { PRODUCTS_DATA } from "@/data/products";

export interface DynamicStorefrontProduct extends Product {
  _isFromBackend?: boolean;
  _rawBackend?: any;
  categoryPath?: string;
  readyStockAvailability?: "Yes" | "No";
  readyStockQuantity?: string;
  factoryPriceEXW?: string;
  fobPrice?: string;
  fobPort?: string;
  fabric?: string;
  gsm?: string;
  colorways?: string[];
  rawAttributes?: Array<{ key: string; value: string }>;
  rawInfoSections?: Array<{ key: string; items: Array<{ heading: string; content: string }> }>;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80";

/**
 * Transforms a raw product object from the backend API into the storefront Product interface.
 */
export function transformBackendProduct(raw: any): DynamicStorefrontProduct {
  const id = String(raw.id || raw._id || raw.productCode || "");
  const modelCode = String(raw.productCode || raw.modelCode || raw.sku || id);
  const name = String(raw.title || raw.name || "Commercial Product");

  // Category resolution: support hierarchical paths like "Kitchen / Air fryer"
  let categoryName = "Appliances";
  let subCategoryName = "";
  let categoryPath = "";

  if (raw.category && typeof raw.category === "object") {
    categoryPath = raw.category.path || raw.category.name || "";
    if (raw.category.path && typeof raw.category.path === "string") {
      const parts = raw.category.path.split(" / ").map((p: string) => p.trim()).filter(Boolean);
      if (parts.length > 1) {
        categoryName = parts[0]; // e.g. "Kitchen"
        subCategoryName = parts[parts.length - 1]; // e.g. "Air fryer"
      } else if (parts.length === 1) {
        categoryName = parts[0];
      }
    } else {
      categoryName = raw.category.name || "Appliances";
    }
  } else if (typeof raw.category === "string" && raw.category.trim()) {
    categoryName = raw.category;
  }
  if (raw.subcategory) {
    subCategoryName = raw.subcategory;
  }

  // Attributes mapping
  const rawAttrs: Array<{ key: string; value: string }> = Array.isArray(raw.attributes)
    ? raw.attributes
    : [];

  const attrMap = new Map<string, string>();
  for (const attr of rawAttrs) {
    if (attr.key && attr.value) {
      attrMap.set(attr.key.toLowerCase().trim(), String(attr.value).trim());
    }
  }

  // Find badge
  let badge = "";
  if (raw.featuredProduct === "Yes") {
    badge = "Featured Model";
  } else if (raw.readyStockAvailability === "Yes") {
    badge = "Ready Stock";
  } else if (attrMap.has("badge")) {
    badge = attrMap.get("badge") || "";
  } else if (raw.season) {
    badge = raw.season;
  }

  // Images
  const rawImages: string[] = Array.isArray(raw.images) && raw.images.length > 0
    ? raw.images.filter(Boolean)
    : [];
  const primaryImage = rawImages[0] || DEFAULT_IMAGE;
  const gallery = rawImages.length > 0 ? rawImages : [primaryImage];

  // Features resolution (from infoSections, attributes, or defaults)
  const features: string[] = [];
  if (Array.isArray(raw.infoSections) && raw.infoSections.length > 0) {
    for (const sec of raw.infoSections) {
      if (Array.isArray(sec.items)) {
        for (const item of sec.items) {
          if (item.content) {
            features.push(item.heading ? `${item.heading}: ${item.content}` : item.content);
          }
        }
      }
    }
  }

  // If no info sections, use key attributes as features
  if (features.length === 0 && rawAttrs.length > 0) {
    for (const attr of rawAttrs.slice(0, 6)) {
      features.push(`${attr.key}: ${attr.value}`);
    }
  }

  // Fallback features if still empty
  if (features.length === 0) {
    features.push(
      "Direct OEM/ODM industrial manufacturing with full private-label customization",
      "Comprehensive AQL Level II functional hi-pot, drop, and safety quality inspection",
      "Optimized export packaging modeled for maximum ocean container cubic utilization",
      "Bilingual retail packaging and customized instruction dossier included"
    );
  }

  // Specs resolution
  const certsVal = attrMap.get("certifications") || attrMap.get("certification") || "";
  const certifications = certsVal
    ? certsVal.split(/[,;/|]+/).map((c) => c.trim()).filter(Boolean)
    : ["CE", "CB", "RoHS", "ISO9001"];

  const specs: Product["specs"] = {
    capacity: attrMap.get("capacity") || attrMap.get("volume") || (raw.fabric ? `${raw.fabric} Fabric` : undefined),
    power: attrMap.get("power") || attrMap.get("wattage") || (raw.gsm ? `${raw.gsm} GSM` : undefined),
    energyRating: attrMap.get("energyrating") || attrMap.get("energy rating") || attrMap.get("energy") || "Class A+ Commercial",
    dimensions: attrMap.get("dimensions") || attrMap.get("size") || raw.sizeRange || undefined,
    voltage: attrMap.get("voltage") || attrMap.get("voltage/frequency") || "100-240V Multi-Market",
    weight: attrMap.get("weight") || (raw.gsm ? `${raw.gsm} g/m²` : undefined),
    certifications,
  };

  // Trade terms & ports
  const port = raw.listing?.fobPort || raw.fobPort || "";
  const tradeTerms: string[] = port
    ? [`FOB ${port}`, "CIF Rotterdam", "CIF Dubai"]
    : ["FOB Shanghai", "CIF Hamburg", "CIF Dubai"];

  // MOQ
  const moqVal = raw.listing?.moq || (raw.moq ? `${raw.moq} ${raw.quantityUnit || "Units"}` : "500 Units / 1x40HQ Container");

  // Lead time
  const leadTimeVal = attrMap.get("leadtime") || attrMap.get("lead time") || (raw.season ? `${raw.season} (25-35 Days)` : "25-35 Days");

  // Colorways
  const colorways = Array.isArray(raw.listing?.colorways) && raw.listing.colorways.length > 0
    ? raw.listing.colorways
    : Array.isArray(raw.availableColors) && raw.availableColors.length > 0
      ? raw.availableColors
      : raw.color ? [raw.color] : [];

  return {
    id,
    name,
    category: categoryName,
    subCategory: subCategoryName,
    modelCode,
    badge: badge || undefined,
    description: String(raw.description || "Container-optimized industrial goods manufactured under strict QA compliance protocols."),
    features,
    specs,
    tradeTerms,
    moq: moqVal,
    leadTime: leadTimeVal,
    tradeType: "both" as TradeMode,
    isFeatured: raw.featuredProduct === "Yes",
    image: primaryImage,
    gallery,
    _isFromBackend: true,
    categoryPath,
    readyStockAvailability: raw.readyStockAvailability === "Yes" ? "Yes" : "No",
    readyStockQuantity: raw.readyStockQuantity ? String(raw.readyStockQuantity) : undefined,
    factoryPriceEXW: raw.factoryPriceEXW || undefined,
    fobPrice: raw.fobPrice || undefined,
    fobPort: port || undefined,
    fabric: raw.fabric || undefined,
    gsm: raw.gsm || undefined,
    colorways,
    rawAttributes: rawAttrs,
    rawInfoSections: raw.infoSections,
  };
}

/**
 * Cache for storefront products in memory
 */
let cachedProducts: Product[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 10000; // 10 seconds

/**
 * Fetch all storefront products.
 * Pulls active products dynamically from GET /api/products.
 * If backend products exist, they are displayed first.
 * Gracefully merges/falls back to PRODUCTS_DATA so the storefront is never empty.
 */
export async function fetchAllStorefrontProducts(forceRefresh = false): Promise<Product[]> {
  const now = Date.now();
  if (!forceRefresh && cachedProducts && (now - lastFetchTime < CACHE_TTL)) {
    return cachedProducts;
  }

  try {
    const res = await fetch("/api/products");
    if (res.ok) {
      const data = await res.json();
      const rawList = Array.isArray(data?.data) ? data.data : (Array.isArray(data) ? data : []);
      
      if (rawList.length > 0) {
        const backendProducts = rawList.map(transformBackendProduct);
        
        // Merge backend products with static catalog (backend products prioritized at top)
        // Deduplicate any items sharing the same modelCode or ID
        const backendCodes = new Set(backendProducts.map((p: Product) => p.modelCode.toLowerCase()));
        const backendIds = new Set(backendProducts.map((p: Product) => p.id.toLowerCase()));
        
        const nonConflictingStatic = PRODUCTS_DATA.filter(
          (p) => !backendCodes.has(p.modelCode.toLowerCase()) && !backendIds.has(p.id.toLowerCase())
        );
        
        const combined = [...backendProducts, ...nonConflictingStatic];
        cachedProducts = combined;
        lastFetchTime = now;
        return combined;
      }
    }
  } catch (err) {
    console.warn("Could not fetch dynamic products from backend API, using fallback catalog:", err);
  }

  // Fallback to static catalog
  cachedProducts = PRODUCTS_DATA;
  lastFetchTime = now;
  return PRODUCTS_DATA;
}

/**
 * Fetch a single product by ID or modelCode dynamically.
 */
export async function fetchStorefrontProductById(id: string): Promise<Product | null> {
  if (!id) return null;

  // 1. Try directly calling backend API if id looks like MongoDB ObjectId (24 hex characters)
  if (/^[0-9a-fA-F]{24}$/.test(id)) {
    try {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        const json = await res.json();
        const raw = json?.data || json;
        if (raw && (raw.id || raw._id || raw.name || raw.productCode)) {
          return transformBackendProduct(raw);
        }
      }
    } catch {
      // Ignore and fallback to list search
    }
  }

  // 2. Fetch full list (which caches backend + static) and search
  const all = await fetchAllStorefrontProducts();
  const idLower = id.toLowerCase();
  
  const found = all.find(
    (p) =>
      p.id.toLowerCase() === idLower ||
      p.modelCode.toLowerCase() === idLower ||
      (p as DynamicStorefrontProduct)._rawBackend?._id === id
  );

  if (found) return found;

  // 3. Fallback to static PRODUCTS_DATA
  return PRODUCTS_DATA.find((p) => p.id.toLowerCase() === idLower || p.modelCode.toLowerCase() === idLower) || null;
}

/**
 * Robust category matching: handles plural/singular (e.g. "air fryers" vs "air fryer"),
 * dashes/spaces (e.g. "air-fryer" vs "air fryer"), paths ("Kitchen / Air fryer"),
 * and uppercase/lowercase.
 */
export function matchesCategory(product: Product, filterCategory: string): boolean {
  if (!filterCategory || filterCategory.toLowerCase() === "all") return true;

  const clean = (s: string) =>
    s.toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

  const target = clean(filterCategory);
  if (!target) return true;

  const targetSingular = target.endsWith("s") ? target.slice(0, -1) : target;
  const targetPlural = target.endsWith("s") ? target : target + "s";

  const cat = clean(product.category || "");
  const sub = clean(product.subCategory || "");
  const path = clean((product as DynamicStorefrontProduct).categoryPath || "");
  const name = clean(product.name || "");

  const candidates = [cat, sub, path, name];
  for (const candidate of candidates) {
    if (!candidate) continue;
    if (
      candidate === target ||
      candidate === targetSingular ||
      candidate === targetPlural ||
      candidate.includes(target) ||
      candidate.includes(targetSingular) ||
      target.includes(candidate)
    ) {
      return true;
    }
  }

  // Also check individual words (e.g., "Air" and "Fryer" in "Air fryer")
  const targetWords = target.split(" ").filter((w) => w.length > 2);
  if (targetWords.length > 0 && targetWords.every((word) => sub.includes(word) || path.includes(word) || cat.includes(word))) {
    return true;
  }

  return false;
}
