import { atom } from 'recoil';

export const colorModeState = atom({ key: 'colorModeState', default: 'dark' });

export const drawerState = atom({ key: 'drawerState', default: false });

export const navMenuList = atom({
  key: 'navMenuList',
  default: [
    {
      menu: 'about',
      link: '/',
      text: 'About Me',
    },
    {
      menu: 'projects',
      link: '/projects',
      text: 'Projects',
    },
    {
      menu: 'experience',
      link: '/experience',
      text: 'Experience',
    },
  ],
});
