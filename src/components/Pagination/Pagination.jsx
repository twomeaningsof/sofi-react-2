import { v4 as uuidv4 } from "uuid";
import classnames from "classnames";
import { ifElse, always, equals } from "ramda";
import usePagination, { dots } from "../../hooks/usePagination.js";
import mapIndexed from "../../utils/mapIndexed";
import "./Pagination.scss";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={"pagination-container"}>
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        key="top-arrow"
      >
        <div className="arrow top" />
      </li>
      {mapIndexed(
        (pageNumber) =>
          ifElse(
            equals(dots),
            always(
              <li className="pagination-item dots" key={uuidv4()}>
                &#8230;
              </li>
            ),
            always(
              <li
                className={classnames("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
                key={uuidv4()}
              >
                {pageNumber}
              </li>
            )
          )(pageNumber),
        paginationRange
      )}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
        key="bottom-arrow"
      >
        <div className="arrow bottom" />
      </li>
    </ul>
  );
};

export default Pagination;
