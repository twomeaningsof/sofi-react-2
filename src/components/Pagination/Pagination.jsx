import { addIndex, map } from "ramda";
import "./Pagination.scss";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";
import usePagination, { dots } from "../../hooks/usePagination.js";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
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
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        key="top-arrow"
      >
        <div className="arrow top" />
      </li>
      {addIndex(map)((pageNumber) => {
        if (pageNumber === dots) {
          return (
            <li className="pagination-item dots" key={uuidv4()}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={uuidv4()}
          >
            {pageNumber}
          </li>
        );
      }, paginationRange)}
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
