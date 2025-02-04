import { products } from "@/utils/products";

export const Products: React.FC = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);

  return (
    <div className="flex flex-col items-center justify-center flex-grow w-full bg-gray-100 min-h-screen">
      {filteredProducts.map((product) => (
        <div key={product.id} className="mb-4 text-black">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
