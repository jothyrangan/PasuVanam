import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, title, description }) => {
    return (
        <div className="w-full">
            {(title || description) && (
                <div className="mb-10 max-w-2xl">
                    {title && <h2 className="text-3xl font-heading text-foreground mb-3">{title}</h2>}
                    {description && <p className="text-gray-600 text-lg">{description}</p>}
                </div>
            )}

            {products.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-gray-500 text-lg">No products found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};
