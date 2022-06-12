import { useMemo } from "react";
import {
  pipe,
  flip,
  subtract,
  add,
  divide,
  max,
  min,
  gt,
  __,
  lt,
  multiply,
} from "ramda";

export const dots = "...";

const range = (start, end) =>
  pipe(flip(subtract), add(1), (length) =>
    Array.from({ length }, (_, idx) => idx + start)
  )(start, end);

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = pipe(divide, Math.ceil)(totalCount, pageSize);
    const totalPageNumbers = add(siblingCount, 5);

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = pipe(subtract, max(1))(currentPage, siblingCount);

    const rightSiblingIndex = pipe(add, min(totalPageCount))(
      currentPage,
      siblingCount
    );

    const shouldShowLeftDots = gt(leftSiblingIndex, 2);
    const shouldShowRightDots = pipe(
      subtract(__, 2),
      lt(rightSiblingIndex)
    )(totalPageCount);

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = pipe(multiply(2), add(3))(siblingCount);
      let leftRange = range(1, leftItemCount);

      return [...leftRange, dots, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = pipe(multiply(2), add(3))(siblingCount);
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, dots, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
