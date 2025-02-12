"use client";

import { useState } from "react";
import { products } from "@/utils/products";

import Filters from "./Filters";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

export const Products: React.FC = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);
  const itemsPerPage = 9;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    setItemOffset(event.selected * itemsPerPage);
  };

  return (
    <div className="p-8 px-4 mx-auto max-w-container bg-background">
      <div className="min-h-screen flex w-full h-full gap-10 pb-20">
        {/* Left side - Filters */}
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <Filters />
        </div>

        {/* Divider */}
        <div className="hidden w-px mx-4 bg-gray-300 md:inline-flex" />

        {/* Right side - Products */}
        <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <div className="min-h-screen">
            <ProductList products={currentItems} />
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
