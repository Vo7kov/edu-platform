/* eslint-disable react/display-name */
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import exitIcon from '../../assets/exit_icon.svg';
import logoWhite from '../../assets/logo_white.svg';
import './index.css';

const MainMenu: React.FC = React.memo(() => {
  const menuOptions = [
    {
      name: 'Чати',
      path: '/',
    },
    {
      name: 'Розклад занять',
      path: '/',
    },
    {
      name: 'Залікова книжка',
      path: '/',
    },
    {
      name: 'Навчальні плани',
      path: '/',
    },
    {
      name: 'Корисні матеріали',
      path: '/',
    },
    {
      name: 'Рейтинг',
      path: '/',
    },
    {
      name: 'Борги',
      path: '/',
    },
  ];

  return (
    <div className="menu main-menu-block">
      <a href="index.html">
        <Image src={logoWhite as string} alt="logo" className="logo" />
      </a>

      <div className="all-menu-options">
        <div className="menu_options">
          {menuOptions.map((option) => (
            <Link key={option.name} href={option.path} className="menu-item">
              <div className="link_block">{option.name}</div>
            </Link>
          ))}
        </div>

        <a href="#" className="menu-item exit">
          <div className="link_block">
            <Image src={exitIcon as string} alt="exit" className="exit-icon" />
            <span>Вийти</span>
          </div>
        </a>
      </div>
    </div>
  );
});

export default MainMenu;
