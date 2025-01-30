import Link from "next/link";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Modern Wall Art",
    price: 49.99,
    image: "https://placehold.co/600x400/png",
  },
  {
    id: 2,
    name: "Elegant Table Lamp",
    price: 89.99,
    image: "https://placehold.co/600x400/png",
  },
  {
    id: 3,
    name: "Cozy Throw Pillow",
    price: 29.99,
    image: "https://placehold.co/600x400/png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <NavBar />
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to TomasaDeco
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover beautiful house decorations to transform your space.
          </p>
          <Link
            href="/shop"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
