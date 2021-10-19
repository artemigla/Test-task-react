import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './styles/style.module.scss';

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languageEn = () => {
    changeLanguage('en');
  };

  const languageRu = () => {
    changeLanguage('ru');
  };

  const languageUa = () => {
    changeLanguage('ua');
  };

  return (
    <div>
      <div className={style.content}>
        <button type="button" aria-label="En" className={style.eng} onClick={languageEn} />
        <button type="button" aria-label="Ru" className={style.ru} onClick={languageRu} />
        <button type="button" aria-label="Ua" className={style.ua} onClick={languageUa} />
      </div>
      <div>
        <select className={style.selectlanguage}>
          <option onClick={languageEn}>English</option>
          <option onClick={languageRu}>Russian</option>
          <option onClick={languageUa}>Ukraine</option>
        </select>
      </div>
    </div>
  );
};
export default ChangeLanguage;
