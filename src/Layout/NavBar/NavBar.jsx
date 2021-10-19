import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import style from './styles/style.module.scss';
import { Menu } from '../../Constants/Menu';
import { HIDDEN } from '../../Constants/Constants';

export const NavBar = () => {
  const { t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const openMenu = () => {
    setIsOpenMenu(!HIDDEN);
  };

  return (
    <nav className={style.navigation}>
      <div className={isOpenMenu ? style.content : style.menudevices}>
        <div className={style.links}>
          <Link className={style.link} to="/" onClick={openMenu}>{t('translation.home')}</Link>
          <Link className={style.link} to="/Aboutme" onClick={openMenu}>{t('translation.aboutme')}</Link>
          {Menu.map(({ id, link, name }) => (
            <div key={id}>
              <a className={style.headermenu} onClick={openMenu} href={link} target="_blank" rel="noreferrer">{name}</a>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={style.burgerMenu}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        {isOpenMenu ? <FiAlignJustify /> : <FiX />}
      </button>
    </nav>
  );
};
