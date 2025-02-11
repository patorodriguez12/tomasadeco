"use client";

import { useState } from "react";
import { products } from "@/utils/products";
import ProductCard from "@/components/Cards/ProductCard";

import Filters from "./Filters";
import Pagination from "./Pagination";

export const Products: React.FC = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);
  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    setItemOffset(event.selected * itemsPerPage);
  };

  return (
    <div className="min-h-screen p-8 px-4 mx-auto max-w-container bg-background">
      <div className="flex w-full h-full gap-10 pb-20">
        {/* Left Sidebar */}
        <Filters />

        {/* Right Products */}
        <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            pageCount={pageCount}
            onPageChange={handlePageClick}
            itemOffset={itemOffset}
            endOffset={endOffset}
            totalItems={filteredProducts.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
