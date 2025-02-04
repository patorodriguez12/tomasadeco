import { products } from "@/utils/products";
import ProductCard from "@/components/Cards/ProductCard";

export const Products: React.FC = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
