import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/style.module.scss';
import { NavBar } from '../NavBar/NavBar';
import ChangeLanguage from '../../Components/ChangeLanguage/ChangeLanguage';

const Header = ({ heading }) => (
  <header className={style.header}>
    <div className={style.titile}>
      {heading}
    </div>
    <div className={style.languages}>
      <ChangeLanguage />
    </div>
    <NavBar />
  </header>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Header;
