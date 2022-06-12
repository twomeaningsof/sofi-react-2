import { useMemo } from "react";
import { multiply, add, slice } from "ramda";

const currentPageData = (data, currentPage, pageSize) =>
  useMemo(() => {
    const firstPageIndex = multiply(currentPage - 1, pageSize);
    const lastPageIndex = add(firstPageIndex, pageSize);
    return slice(firstPageIndex, lastPageIndex, data);
  }, [currentPage]);

export default currentPageData;
