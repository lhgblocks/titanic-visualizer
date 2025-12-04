import { useState, useMemo } from "react";

export function usePagination(data, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  const next = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const prev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  const goTo = (page) =>
    setCurrentPage(() => Math.min(Math.max(page, 1), totalPages));

  return {
    currentPage,
    totalPages,
    paginatedData,
    next,
    prev,
    goTo,
  };
}

