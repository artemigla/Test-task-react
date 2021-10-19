import React from 'react';
import style from './styles/style.module.scss';
import avatar from '../../Assets/Images/Avatar.jpg';

const AboutMe = () => (
  <main className={style.content}>
    <img className={style.logo} src={avatar} alt="logo" />
    <div className={style.text}>
      <h5>About me</h5>
    </div>
  </main>
);

export default AboutMe;
