import React from "react";
import Pagination from "react-bootstrap/Pagination";

const MyPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevClick,
  onNextClick,
}) => {
  const maxButtonsToShow = 10; 
  const halfButtonsToShow = Math.floor(maxButtonsToShow / 2);

  let startPage = Math.max(1, currentPage - halfButtonsToShow);
  let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

  if (currentPage <= halfButtonsToShow) {
    endPage = maxButtonsToShow;
  } else if (totalPages - currentPage < halfButtonsToShow) {
    startPage = totalPages - maxButtonsToShow + 1;
    endPage = totalPages;
  }

  const pageItems = [];
  for (let i = startPage; i <= endPage; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  const paginationStyle = {
    marginBottom: "50px", 
    marginTop: "20px",

  };

  return (
    <Pagination className="justify-content-center mt-4" style={paginationStyle}>
      <Pagination.Prev onClick={onPrevClick} disabled={currentPage === 1} />
      {pageItems}
      <Pagination.Next
        onClick={onNextClick}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default MyPagination;
