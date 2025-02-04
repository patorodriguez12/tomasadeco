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
    <div className="p-4 bg-red-200 rounded-lg shadow-lg w-80 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="mb-4 text-black">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-md object-cover w-full"
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
