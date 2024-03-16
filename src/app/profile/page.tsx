/* eslint-disable react/display-name */
import React from 'react';

import Image from 'next/image';

import avatar from '../../assets/avatars/photo.png';
import searchIcon from '../../assets/search_icon.svg';
import '../general-styles-menu-pages.css';
import './index.css';
import MainMenu from '@/components/MainMenu/MainMenu';

const Profile: React.FC = React.memo(() => {
  return (
    <div className="page-content-background">
      {/* <iframe src="burger_menu.html" className="burger-menu-block"></iframe> */}

      <div className="main_blocks2">
        <MainMenu />

        <div className="container">
          <div className="header2 bottom-indent2">
            <div className="search-menu">
              <a href="#" className="search-button-icon">
                <Image
                  src={searchIcon as string}
                  className="search-icon"
                  alt="search"
                />
              </a>
              <input type="text" className="search-input" placeholder="Пошук" />
            </div>
            <div className="current-date-header">
              {new Intl.DateTimeFormat('uk', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                weekday: 'long',
              }).format(new Date())}
            </div>
          </div>

          <div className="profile-human-information bottom-indent2">
            <div className="profile-text-block">
              <div className="content">
                <div className="human-fio">
                  Шевченко Анастасія Володимирівна
                </div>
                <div className="human-info">
                  <div className="human-job-title">
                    <div>Студент</div>
                    <div>КН-321а</div>
                  </div>
                  <div>3 курс</div>
                </div>
              </div>
            </div>
            <Image src={avatar} className="rounded-image" alt="avatar" />
          </div>

          <div className="table">
            <div className="button-container">
              <a href="#" className="white-button">
                Моя інформація
              </a>
              <a href="#" className="purple-button">
                Додатково
              </a>
            </div>

            <div className="block-header-profile block-type2"></div>

            <div className="page-content">
              <div className="block-type block-type2 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Факультет/інститут
                  </div>
                  <div className="labels2">
                    Навчально-науковий інститут комп’ютерних наук та
                    інформаційних технологій
                  </div>
                </div>
              </div>
              <div className="block-type block-type1 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">Кафедра</div>
                  <div className="labels2">Стратегічне управілння</div>
                </div>
              </div>
              <div className="block-type block-type2 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Спеціалізація/пропозиція/блок
                  </div>
                  <div className="labels2">
                    Управління проектами у сфері інформаційних технологій
                  </div>
                </div>
              </div>
              <div className="block-type block-type1 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Спеціальність
                  </div>
                  <div className="labels2">-</div>
                </div>
              </div>
              <div className="block-type block-type2 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Освітня програма
                  </div>
                  <div className="labels2">Комп’ютерні науки</div>
                </div>
              </div>
              <div className="block-type block-type1 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Рівень навчання
                  </div>
                  <div className="labels2">Бакалавр</div>
                </div>
              </div>
              <div className="block-type block-type2 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">
                    Форма навчання
                  </div>
                  <div className="labels2">Денна</div>
                </div>
              </div>
              <div className="block-type block-type1 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation">Оплата</div>
                  <div className="labels2">Бюджет</div>
                </div>
              </div>
              <div className="block-type-orders block-type2 block-table-conteiner">
                <div className="block-table-profile">
                  <div className="labels1 labels1-indentation-profile">
                    Відомі накази
                  </div>
                  <div className="labels2 all-orders-blocks">
                    <div className="block-order">
                      <div>#552 ОД від 26.11.2021 КН = </div> КН
                    </div>
                    <div>Зміна факультету</div>
                  </div>
                  <div className="block-order">
                    <div>#1488 СТ від 09.08.2021</div>
                    <div>Зарахування до університету</div>
                  </div>
                  <div className="block-order">
                    <div>#1778 СТ від 01.10.2022 КН-321а</div>
                    <div>Зміна групи</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-footer block-type2"></div>
        </div>
      </div>
    </div>
  );
});

export default Profile;
