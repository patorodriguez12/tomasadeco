import ProductCard from "@/components/Cards/ProductCard";
import { Product } from "@/utils/products";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-10 lg:mx-20 md:mx-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
