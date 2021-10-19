import React, { useState } from 'react';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Pagination from '../../Components/Pagination/Pagination';
import PaginationForDevices from '../../Components/Pagination/PaginationForDevices';
import { Menu } from '../../Constants/Menu';
import {
  PAGE, LINK_POSTS, SHOW_POST, HIDDEN_POST,
} from '../../Constants/Constants';
import style from './styles/style.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  const [sidebar, setSidebar] = useState(true);
  const [openPosts, setOpenPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = async () => {
    setOpenPosts(!openPosts);
    const result = await axios.get(LINK_POSTS)
      .catch((err) => console.log('error ', err));
    setPosts(result.data);
  };

  const lastPageIndex = currentPage * PAGE;
  const firstPageIndex = lastPageIndex - PAGE;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentListPosts = posts.slice(firstPageIndex, lastPageIndex).map(({ id, title }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  ));
  return (
    <div className={style.main}>
      <div className={sidebar ? style.sidebar : style.sidebarHidden}>
        <button type="button" onClick={() => setSidebar(!sidebar)}>
          {sidebar
            ? <FiX className={style.showsidebar} />
            : <FiAlignJustify className={style.showsidebar} />}
        </button>
        {sidebar ? (
          <div className={style.info}>
            <h3>{t('translation.links')}</h3>
            <div className={style.links}>
              {Menu.map(({ id, name, link }) => (
                <div className={style.icon} key={id}>
                  <a href={link} target="_blank" rel="noreferrer">{name}</a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={style.icons}>
            {Menu.map(({ id, image, name }) => (
              <img key={id} src={image} alt={name} />
            )) }
          </div>
        )}
      </div>

      <div className={style.content}>
        <div className={style.table}>
          <button type="button" onClick={handleClick}>{openPosts ? HIDDEN_POST : SHOW_POST}</button>
          <table className={style.closetable}>
            <thead>
              {openPosts ? currentListPosts : false}
            </thead>
          </table>
          <div className={style.closetable}>
            {openPosts ? <Pagination page={PAGE} posts={posts.length} paginate={paginate} /> : ''}
          </div>
          <div className={style.loadmore}>
            {openPosts ? <PaginationForDevices posts={posts} setPosts={setPosts} /> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
