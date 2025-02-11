"use client";

import { useState } from "react";
import { products } from "@/utils/products";
import ProductCard from "@/components/Cards/ProductCard";
import ReactPaginate from "react-paginate";

import Filters from "./Filters";

interface ProductsProps {
  itemsPerPage: number;
}

export const Products: React.FC<ProductsProps> = () => {
  const filteredProducts = products.filter((product) => product.stock > 0);

  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-background p-8 min-h-screen">
      <div className="w-full h-full flex pb-20 gap-10">
        {/* Left Sidebar */}
        <Filters />

        {/* Right Products */}
        <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
            <ReactPaginate
              nextLabel=""
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              previousLabel=""
              onPageChange={handlePageClick}
              containerClassName="flex text-base font-semibold font-titleFont py-10"
              pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
              pageClassName="mr-6"
              activeClassName="bg-black text-white"
            />

            <p className="text-sm font-light text-gray-600">
              Mostrando {itemOffset + 1} a {endOffset} de{" "}
              {filteredProducts.length} productos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
