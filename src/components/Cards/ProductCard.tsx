import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="max-w-80 max-h-80 relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 rounded-md cursor-pointer">
      <div className="mb-4 text-black">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-md object-cover w-full"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="mt-2 font-light">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
