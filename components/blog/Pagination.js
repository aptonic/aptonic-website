import styles from "./pagination.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


  return (
    <div className="mb-32">
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
            onClick={() => onPageChange(page)}
          >
            <div className={`select-none ${styles.pageLink}`}>
              {page}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
