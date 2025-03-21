// components/Pagination.jsx
import React, { useEffect } from 'react';

const Pagination = ({ currentPage, handlePageChange, totalPages }) => {
  const renderPaginationLinks = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(renderPageLink(page));
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      pages.push(renderPageLink(1));

      if (startPage > 2) {
        pages.push(renderEllipsis());
      }

      for (let page = startPage === 1 ? 2 : startPage; page <= endPage; page++) {
        pages.push(renderPageLink(page));
      }

      if (endPage < totalPages - 1) {
        pages.push(renderEllipsis());
      }

      if (endPage !== totalPages) {
        pages.push(renderPageLink(totalPages));
      }
    }

    return pages;
  };

  const renderPageLink = (page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-[16px] sm:text-[18px] font-bold font-montserrat cursor-pointer ${
        currentPage === page
          ? 'text-[#02E0B8]'
          : 'bg-transparent text-white'
      }`}
    >
      {page}
    </button>
  );

  const renderEllipsis = () => (
    <span
      key="ellipsis"
      className="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center text-white text-[16px] sm:text-[18px] font-montserrat"
    >
      ...
    </span>
  );

  useEffect(() => {
    renderPaginationLinks();
  }, [totalPages]);

  return (
    <div className="flex justify-center py-8">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Previous Arrow */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#BCBCBC] text-[#BCBCBC] ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#BCBCBC] hover:text-white cursor-pointer'
          } transition-colors duration-300`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15L7 10L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Pagination Links */}
        {renderPaginationLinks()}

        {/* Next Arrow */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#BCBCBC] text-[#BCBCBC] ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#BCBCBC] hover:text-white cursor-pointer'
          } transition-colors duration-300`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L13 10L8 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;