import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const jumpTo = (input: string) => {
    let pageToJumpTo = +input;
    if (pageToJumpTo > maxPage) {
      pageToJumpTo = maxPage;
    }
    if (pageToJumpTo < 1) {
      pageToJumpTo = 1;
    }
    setCurrentPage(pageToJumpTo);
  };

  return { currentPage, maxPage, next, prev, setMaxPage, jumpTo };
};

export default usePagination;
