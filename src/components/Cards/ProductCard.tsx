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
    <div className="relative w-full max-w-xs mx-auto overflow-hidden transition-all duration-300 rounded-md shadow-sm cursor-pointer hover:shadow-lg">
      <div className="mb-4 text-black">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="object-cover w-full h-48 rounded-md"
        />
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 font-light">${product.price}</p>
          </div>

          <p className="mt-2 text-sm text-gray-600 font-extralight">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
