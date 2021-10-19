import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './styles/style.module.scss';
import { LINK_POSTS, PAGE } from '../../Constants/Constants';

const PaginationForDevices = ({ posts, setPosts }) => {
  const [visible, setVisible] = useState(PAGE);

  useEffect(() => {
    fetch(LINK_POSTS)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const loadItems = async () => {
    await setVisible(visible + PAGE);
  };

  return (
    <div>
      <table>
        <thead>
          {posts.slice(0, visible).map(({ id, title }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
            </tr>
          ))}
        </thead>
      </table>
      <button type="button" className={style.loadmore} onClick={loadItems}>Load more...</button>
    </div>
  );
};

PaginationForDevices.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
};
export default PaginationForDevices;
