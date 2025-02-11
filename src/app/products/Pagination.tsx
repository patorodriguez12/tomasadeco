import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  itemOffset: number;
  endOffset: number;
  totalItems: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  itemOffset,
  endOffset,
  totalItems,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mdl:flex-row mdl:justify-between">
      <ReactPaginate
        nextLabel=""
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel=""
        onPageChange={onPageChange}
        containerClassName="flex text-base font-semibold font-titleFont py-10"
        pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        activeClassName="bg-black text-white"
      />
      <p className="text-sm font-light text-gray-600">
        Mostrando de <span className="font-semibold">{itemOffset + 1}</span> a{" "}
        <span className="font-semibold">{endOffset}</span> de{" "}
        <span className="font-semibold">{totalItems}</span> productos
      </p>
    </div>
  );
};

export default Pagination;
