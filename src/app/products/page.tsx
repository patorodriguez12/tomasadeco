import { products } from "@/utils/products";
import ProductCard from "@/components/Cards/ProductCard";

export const Products: React.FC = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);

  return (
    <div className="max-w-container mx-auto px-4 bg-background">
      <div className="w-full h-full flex pb-20 gap-10">

        {/* Left Sidebar */}
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <h2 className="text-2xl font-bold text-dark">Filters</h2>
        </div>

        {/* Right Products */}
        <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
