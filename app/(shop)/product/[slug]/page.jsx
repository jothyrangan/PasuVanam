import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductPage({ params }) {
  console.log("Received params:", params); // Debug log to check params
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) return notFound();
  console.log("Rendering product page for:", product.name);

  return <ProductDetailClient product={product} />;
}