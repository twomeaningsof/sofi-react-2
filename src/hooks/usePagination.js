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
  cond,
  always,
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
    return cond([
      [
        always(!shouldShowLeftDots && shouldShowRightDots),
        always([
          ...range(1, pipe(multiply(2), add(3))(siblingCount)),
          dots,
          totalPageCount,
        ]),
      ],
      [
        always(shouldShowLeftDots && !shouldShowRightDots),
        always([
          firstPageIndex,
          dots,
          ...range(
            totalPageCount - pipe(multiply(2), add(3))(siblingCount) + 1,
            totalPageCount
          ),
        ]),
      ],
      [
        always(shouldShowLeftDots && shouldShowRightDots),
        always([
          firstPageIndex,
          dots,
          ...range(leftSiblingIndex, rightSiblingIndex),
          dots,
          lastPageIndex,
        ]),
      ],
    ])();
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
