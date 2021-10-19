import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import Header from './Header/Header';
import AboutMe from '../Pages/AboutMe/AboutMe';
import MainPage from '../Pages/MainPage/MainPage';
import Footer from './Footer/Footer';
import style from './Header/styles/style.module.scss';

const Layout = () => {
  function getTheme() {
    return (
      JSON.parse(localStorage.getItem('themesite')) || false
    );
  }

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem('themesite', JSON.stringify(theme));
  }, [theme]);

  const changeBackground = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? style.darktheme : ''}>
      <Router>
        <Header heading="Test site" />
        <div className={style.darkmode}>
          <input type="checkbox" onChange={changeBackground} checked={theme ? true : theme} />
        </div>
        <button
          type="button"
          onClick={() => setTheme(!theme)}
          className={style.darkmobile}
        >
          {theme ? <HiOutlineSun onClick={changeBackground} />
            : <HiOutlineMoon onClick={changeBackground} />}
        </button>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default Layout;
