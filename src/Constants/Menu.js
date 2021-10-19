import { v4 as uuid } from 'uuid';
import YouTube from '../Assets/Icons/YouTube.png';
import Chrome from '../Assets/Icons/Google-Chrome.png';
import Facebook from '../Assets/Icons/Facebook.png';
import Twitter from '../Assets/Icons/Twitter.png';
import Instagram from '../Assets/Icons/Instagram.png';
import GitHub from '../Assets/Icons/GitHub.png';

export const Menu = [
  {
    id: uuid(),
    name: 'YouTube',
    link: 'https://www.youtube.com/',
    image: YouTube,
  },
  {
    id: uuid(),
    name: 'Google Chrome',
    link: 'https://www.google.com/',
    image: Chrome,
  },
  {
    id: uuid(),
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    image: Facebook,
  },
  {
    id: uuid(),
    name: 'Twitter',
    link: 'https://twitter.com/',
    image: Twitter,
  },
  {
    id: uuid(),
    name: 'GitHub',
    link: 'https://github.com/',
    image: GitHub,
  },
  {
    id: uuid(),
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    image: Instagram,
  },
];
