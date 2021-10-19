import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { Menu } from '../../Constants/Menu';
import style from './styles/style.module.scss';
import { CONTACTS } from '../../Constants/Constants';

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const showContacts = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className={style.content}>
      <div className={style.sizeicon}>
        {Menu.map(({
          id, link, image, name,
        }) => (
          <div key={id}>
            <a href={link} target="_blank" rel="noreferrer">
              <img className={style.sizeicon} src={image} alt={name} />
            </a>
          </div>
        ))}
      </div>
      <div className={style.icons}>
        <div className={style.linkgithub}>
          <a
            href="https://github.com/artemigla/"
            className={style.git}
            target="_blank"
            rel="noreferrer"
          >
            <i>{t('translation.git')}</i>
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className={style.contacts}>
        <div className={style.contactsPosition}>
          <button
            type="button"
            className={!isOpen ? style.arrow : style.arrow90}
            onClick={showContacts}
          >
            <RiArrowRightSLine />
          </button>
          {t('translation.contacts')}
        </div>
        {isOpen ? CONTACTS.map(({ id, phone, mail }) => (
          <div key={id}>
            <div><i>{phone}</i></div>
            <i>{mail}</i>
          </div>
        )) : ''}
      </div>
    </footer>
  );
};

export default Footer;
