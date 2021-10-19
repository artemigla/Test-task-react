import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/style.module.scss';

const Pagination = ({ page, posts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts / page); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.content}>
      <ul className={style.pagination}>
        {pageNumbers.map((item) => (
          <li className={style.pageitem} key={item}>
            <button type="button" onClick={() => paginate(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  posts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
export default Pagination;
