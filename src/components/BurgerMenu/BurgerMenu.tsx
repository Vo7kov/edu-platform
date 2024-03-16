'use client';

/* eslint-disable react/display-name */
import React, { useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import InformationMenu from '@/components/InformationMenu/InformationMenu';
import MainMenu from '@/components/MainMenu/MainMenu';

import burgerIcon from '../../assets/burger_menu.svg';
import informationMenu from '../../assets/information_menu.svg';
import logoBlack from '../../assets/logo_black.svg';
import './index.css';

const BurgerMenu: React.FC = React.memo(() => {
  const [isMainMenuOpened, setIsMainMenuOpened] = useState(false);
  const [isInformationMenuOpened, setIsInformationMenuOpened] = useState(false);

  return (
    <section className="header_top burger-menu-block" id="header_top">
      <div className="container">
        <div className="mobile-header-menu">
          <a
            href="#"
            className="hamburger-menu"
            id="mainMenuButton"
            onClick={() => setIsMainMenuOpened((prev) => !prev)}
          >
            <Image src={burgerIcon as string} alt="burger" />
          </a>

          <a href="#">
            <Image
              src={logoBlack as string}
              alt="logo"
              className="logo-mobile"
            />
          </a>

          <a
            href="#"
            className="hamburger-menu"
            id="informationMenuButton"
            onClick={() => setIsInformationMenuOpened((prev) => !prev)}
          >
            <Image src={informationMenu as string} alt="information menu" />
          </a>
        </div>

        <div id="overlay"></div>

        <div
          id="menuContent"
          className={classNames({
            hidden: !isMainMenuOpened && !isInformationMenuOpened,
          })}
        >
          {isMainMenuOpened && <MainMenu />}

          {isInformationMenuOpened && <InformationMenu />}
        </div>
      </div>
    </section>
  );
});

export default BurgerMenu;
