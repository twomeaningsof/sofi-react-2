import { useMemo } from "react";
import {
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
  subtract(end, start)
  |> add(1)
  |> ((length) => Array.from({ length }, (_, idx) => idx + start));

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = divide(totalCount, pageSize) |> Math.ceil;
    const totalPageNumbers = add(siblingCount, 5);

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = subtract(currentPage, siblingCount) |> max(1);

    const rightSiblingIndex =
      add(currentPage, siblingCount) |> min(totalPageCount);

    const shouldShowLeftDots = gt(leftSiblingIndex, 2);
    const shouldShowRightDots =
      subtract(totalPageCount, 2) |> lt(rightSiblingIndex);

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    return cond([
      [
        always(!shouldShowLeftDots && shouldShowRightDots),
        always([
          ...range(1, multiply(2, siblingCount) |> add(3)),
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
            totalPageCount - (multiply(2, siblingCount) |> add(3)) + 1,
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
