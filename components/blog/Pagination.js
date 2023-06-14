import styles from "./pagination.module.css";
import Link from 'next/link'

const Pagination = ({ items, pageSize, currentPage }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="mb-10">
      <ul className={styles.pagination}>
        {currentPage != 1 && (
          <Link href={`/blog/page/${parseInt(currentPage) - 1}`}>
            <li className={styles.pageItem}>
              {'<'}
            </li>
          </Link>
        )}
        {pages.map((page) => (
          <Link key={page} href={`/blog/page/${page}`}>
            <li
              key={page}
              className={
                page == currentPage ? styles.pageItemActive : styles.pageItem
              }
            >
              {page}
            </li>
          </Link>
        ))}
        {currentPage < pages.length && (
          <Link href={`/blog/page/${parseInt(currentPage) + 1}`}>
            <li className={styles.pageItem}>
              {'>'}
            </li>
          </Link>
        )}
      </ul>

    </div>
  );
};

export default Pagination;
