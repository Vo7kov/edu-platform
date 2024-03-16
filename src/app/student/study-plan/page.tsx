'use client';

/* eslint-disable react/display-name */
import React, { useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import MainMenu from '@/components/MainMenu/MainMenu';

import infoMenu from '../../../assets/information_menu.svg';
import '../../general-styles-menu-pages.css';
import './index.css';

const StudentStudyPlan: React.FC = React.memo(() => {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="page-content-background">
      {/* <iframe src="burger_menu.html" className="burger-menu-block"></iframe> */}

      <div className="main_blocks2">
        <div className="main-menu-block">
          <MainMenu />
        </div>

        <div className="container">
          <div className="header2 bottom-indent2">
            <div className="current-date-header">
              {new Intl.DateTimeFormat('uk', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                weekday: 'long',
              }).format(new Date())}
            </div>
            <a href="#" className="hamburger-menu" id="informationMenuButton">
              <Image src={infoMenu as string} alt="info menu" />
            </a>
            <div className="name-human-page">Шевченко Анастасія, КН-321а</div>
          </div>

          <div className="page-switcher bottom-indent2">
            <div className="semester">Семестр:</div>
            <div className="circles">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={classNames('circle', {
                    'circle--active': activePage === item,
                  })}
                  onClick={() => setActivePage(item)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="table">
            <div className="block-header block-type3"></div>
            <div className="block-type block-type3 block-table-conteiner">
              <div className="title-table">
                <div className="labels1">
                  <div className="text-table">№</div>
                  <div className="text-table-discipline">Дисципліна</div>
                </div>
                <div className="labels2">
                  <div className="text-table">Е\З</div>
                  <div className="text-table">Курс</div>
                  <div className="text-table">Сем</div>
                  <div className="text-table">І\З</div>
                  <div className="text-table">Кред</div>
                  <div className="text-table">Год</div>
                  <div className="text-table">Каф</div>
                </div>
              </div>
            </div>

            {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className={classNames('page-content', {
                  'page-content--active': activePage === item,
                })}
              >
                <div className="block-type block-type1 block-table-conteiner">
                  <div className="block-table">
                    <div className="labels1 labels1-indentation">
                      <div className="text-table">1</div>
                      <div className="text-table-discipline">Дисципліна 1</div>
                    </div>
                    <div className="labels2">
                      <div className="text-table">Е</div>
                      <div className="text-table">3</div>
                      <div className="text-table">6</div>
                      <div className="text-table">Р</div>
                      <div className="text-table">4.00</div>
                      <div className="text-table">3.00</div>
                      <div className="text-table">СУ</div>
                    </div>
                  </div>
                </div>
                <div className="block-type block-type2 block-table-conteiner">
                  <div className="block-table">
                    <div className="labels1 labels1-indentation">
                      <div className="text-table">2</div>
                      <div className="text-table-discipline">Дисципліна 2</div>
                    </div>
                    <div className="labels2">
                      <div className="text-table">Е</div>
                      <div className="text-table">3</div>
                      <div className="text-table">6</div>
                      <div className="text-table">Р</div>
                      <div className="text-table">4.00</div>
                      <div className="text-table">3.00</div>
                      <div className="text-table">СУ</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="block-footer block-type2"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StudentStudyPlan;
