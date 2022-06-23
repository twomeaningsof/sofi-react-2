import { useMemo } from "react";
import { multiply, add, slice, subtract } from "ramda";

const currentPageData = (data, currentPage, pageSize) =>
  useMemo(
    () =>
      slice(
        multiply(subtract(currentPage, 1), pageSize),
        add(multiply(subtract(currentPage, 1), pageSize), pageSize),
        data
      ),
    [currentPage]
  );

export default currentPageData;
