/* eslint-disable react/display-name */
import React from 'react';

import Image from 'next/image';

import MainMenu from '@/components/MainMenu/MainMenu';

import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';
import avatar4 from '../assets/avatars/avatar4.png';
import blog1 from '../assets/blogs/blog_picture1.png';
import blog2 from '../assets/blogs/blog_picture2.png';
import chatLink from '../assets/chat_link.svg';
import folderIcon from '../assets/folder_icon.svg';
import reminderIcon from '../assets/reminder_icon.svg';
import searchIcon from '../assets/search_icon.svg';
import seeAll from '../assets/see_all.svg';
import teacherIcon from '../assets/teacher_icon.svg';
import './index.css';

const Home: React.FC = React.memo(() => {
  return (
    <div className="page-content-background">
      {/* <iframe
        src="burger_menu.html"
        className="burger-menu-block"
      ></iframe> */}

      <div className="main_blocks">
        <MainMenu />

        <div className="container">
          <div className="header bottom-indent">
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

          <div className="wrapper_mobile bottom-indent">
            <header>
              <div className="icons">
                <span id="prev" className="material-symbols-rounded">
                  chevron_left
                </span>
              </div>
              <p className="title current-date"></p>
              <div className="icons">
                <span id="next" className="material-symbols-rounded">
                  chevron_right
                </span>
              </div>
            </header>
            <div className="calendar">
              <ul className="weeks">
                <li>Нд</li>
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
              </ul>
              <ul className="days"></ul>
            </div>
          </div>

          <div className="section1 bottom-indent">
            <div className="personal-section">
              <div className="block_name">
                <span className="title">Особисті</span>
                <a href="#" className="button">
                  <span>Подивитись усі</span>
                  <Image
                    src={seeAll as string}
                    className="arrow-view-all"
                    alt="see all"
                  />
                </a>
              </div>
              <div className="chat-list">
                <a href="#" className="chat color-block-home">
                  <Image src={avatar1} alt="avatar" className="avatar" />
                  <span className="name">Марченко І. А.</span>
                  <Image
                    src={chatLink as string}
                    alt="chat"
                    className="chat-link"
                  />
                </a>
                <a href="#" className="chat color-block-home">
                  <Image src={avatar2} alt="avatar" className="avatar" />
                  <span className="name">Іванова Л. Ю.</span>
                  <Image
                    src={chatLink as string}
                    alt="chat"
                    className="chat-link"
                  />
                </a>
                <a href="#" className="chat color-block-home">
                  <Image src={avatar3} alt="avatar" className="avatar" />
                  <span className="name">Радченко В. І.</span>
                  <Image
                    src={chatLink as string}
                    alt="chat"
                    className="chat-link"
                  />
                </a>
                <a href="#" className="chat color-block-home">
                  <Image src={avatar4} alt="avatr" className="avatar" />
                  <span className="name">Бондаренко В. Д.</span>
                  <Image
                    src={chatLink as string}
                    alt="chat"
                    className="chat-link"
                  />
                </a>
              </div>
            </div>

            <div className="personal-section">
              <div className="block_name">
                <span className="title">Блог</span>
                <a href="#" className="button">
                  <span>Подивитись усі</span>
                  <Image
                    src={seeAll as string}
                    className="arrow-view-all"
                    alt="see all"
                  />
                </a>
              </div>
              <div className="blog-list">
                <a href="#" className="blog-post color-block-home">
                  <div className="block-post-content">
                    <div className="post-content">
                      <Image src={blog1} alt="alt" className="post-image" />
                      <div className="post-title">
                        <span className="title-line1">Майстер-клас з C++</span>
                        <span className="title-line2">
                          Напишемо найпростішу гру на C++ за годину!
                        </span>
                      </div>
                    </div>
                    <div className="post-description">06.02.2024</div>
                  </div>
                </a>
                <a href="#" className="blog-post color-block-home">
                  <div className="block-post-content">
                    <div className="post-content">
                      <Image src={blog2} alt="alt" className="post-image" />
                      <div className="post-title">
                        <span className="title-line1">Бізнес-лекція</span>
                        <span className="title-line2">
                          Вивчимо 3 методи розробки бізнес-плану.
                        </span>
                      </div>
                    </div>
                    <div className="post-description">10.02.2024</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="section2 bottom-indent">
            <div className="block_name">
              <span className="title">Заняття</span>
              <a href="#" className="button2">
                <span className="title-link-see">Подивитись усі</span>
                <Image
                  src={seeAll as string}
                  className="arrow-view-all"
                  alt="see all"
                />
              </a>
            </div>

            <div className="slider-container">
              <div className="slider">
                <a href="#" className="slide">
                  <div className="content-block block-color1">
                    <span className="label-text">Бізнес планування</span>
                    <div className="avatars">
                      <div className="avatar-group">
                        <Image src={avatar4} alt="avatar" className="avatar" />
                        <Image src={avatar3} alt="avatar" className="avatar" />
                        <Image src={avatar2} alt="avatar" className="avatar" />
                        <div className="avatar-add">
                          <div className="number-participants">
                            <span className="text-number-participants text-color1">
                              +
                            </span>
                            <span className="text-number-participants text-color1">
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-details">
                      <div className="details">
                        <Image
                          src={folderIcon as string}
                          className="icon-image-details"
                          alt="Folder Icon"
                        />
                        <div className="text-info-details-count">
                          <span className="file-count">16</span>
                          <span className="file-count">файлів</span>
                        </div>
                      </div>
                      <div className="details">
                        <Image
                          src={teacherIcon as string}
                          className="icon-image-details"
                          alt="User Icon"
                        />
                        <div className="text-info-details-user">
                          <span className="user">Викладач:</span>
                          <span className="user">Шматко А. О.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="slide">
                  <div className="content-block block-color2">
                    <span className="label-text">Основи програмування</span>
                    <div className="avatars">
                      <div className="avatar-group">
                        <Image src={avatar4} alt="avatar" className="avatar" />
                        <Image src={avatar3} alt="avatar" className="avatar" />
                        <Image src={avatar2} alt="avatar" className="avatar" />
                        <div className="avatar-add">
                          <div className="number-participants">
                            <span className="text-number-participants text-color2">
                              +
                            </span>
                            <span className="text-number-participants text-color2">
                              4
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-details">
                      <div className="details">
                        <Image
                          src={folderIcon as string}
                          className="icon-image-details"
                          alt="Folder Icon"
                        />
                        <div className="text-info-details-count">
                          <span className="file-count">5</span>
                          <span className="file-count">файлів</span>
                        </div>
                      </div>
                      <div className="details">
                        <Image
                          src={teacherIcon as string}
                          className="icon-image-details"
                          alt="User Icon"
                        />
                        <div className="text-info-details-user">
                          <span className="user">Викладач:</span>
                          <span className="user">Радченко М. П.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="slide">
                  <div className="content-block block-color3">
                    <span className="label-text">Стек технології</span>
                    <div className="avatars">
                      <div className="avatar-group">
                        <Image src={avatar4} alt="avatar" className="avatar" />
                        <Image src={avatar3} alt="avatar" className="avatar" />
                        <Image src={avatar2} alt="avatar" className="avatar" />
                        <div className="avatar-add">
                          <div className="number-participants">
                            <span className="text-number-participants text-color3">
                              +
                            </span>
                            <span className="text-number-participants text-color3">
                              8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-details">
                      <div className="details">
                        <Image
                          src={folderIcon as string}
                          className="icon-image-details"
                          alt="Folder Icon"
                        />
                        <div className="text-info-details-count">
                          <span className="file-count">11</span>
                          <span className="file-count">файлів</span>
                        </div>
                      </div>
                      <div className="details">
                        <Image
                          src={teacherIcon as string}
                          className="icon-image-details"
                          alt="User Icon"
                        />
                        <div className="text-info-details-user">
                          <span className="user">Викладач:</span>
                          <span className="user">Крупська Д. Г.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="slide">
                  <div className="content-block block-color1">
                    <span className="label-text">Бізнес планування</span>
                    <div className="avatars">
                      <div className="avatar-group">
                        <Image src={avatar4} alt="avatar" className="avatar" />
                        <Image src={avatar3} alt="avatar" className="avatar" />
                        <Image src={avatar2} alt="avatar" className="avatar" />
                        <div className="avatar-add">
                          <div className="number-participants">
                            <span className="text-number-participants text-color1">
                              +
                            </span>
                            <span className="text-number-participants text-color1">
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-details">
                      <div className="details">
                        <Image
                          src={folderIcon as string}
                          className="icon-image-details"
                          alt="Folder Icon"
                        />
                        <div className="text-info-details-count">
                          <span className="file-count">16</span>
                          <span className="file-count">файлів</span>
                        </div>
                      </div>
                      <div className="details">
                        <Image
                          src={teacherIcon as string}
                          className="icon-image-details"
                          alt="User Icon"
                        />
                        <div className="text-info-details-user">
                          <span className="user">Викладач:</span>
                          <span className="user">Шматко А. О.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="section3">
            <div className="block_name">
              <span className="title">Розклад занять</span>
              <a href="#" className="button2">
                <span className="title-link-see">Подивитись усі</span>
                <Image
                  src={seeAll as string}
                  alt="See all"
                  className="arrow_link"
                />
              </a>
            </div>

            <div className="schedule">
              <div className="lesson">
                <div className="lesson-content-block">
                  <span className="lesson-title-line1">Бізнес планування</span>
                  <div className="lesson-time">
                    <span>08:30</span>
                    <span>-</span>
                    <span>10:00</span>
                  </div>
                </div>
                <div className="lesson-content-block">
                  <div className="lesson-title-line2">
                    <span>Викладач:</span>
                    <span>Шматко А. О.</span>
                  </div>
                  <div className="lesson-title-line3">
                    <span>3 січня 2024</span>
                  </div>
                </div>
              </div>
              <div className="lesson">
                <div className="lesson-content-block">
                  <span className="lesson-title-line1">
                    Основи програмування
                  </span>
                  <div className="lesson-time">
                    <span>10:30</span>
                    <span>-</span>
                    <span>12:00</span>
                  </div>
                </div>
                <div className="lesson-content-block">
                  <div className="lesson-title-line2">
                    <span>Викладач:</span>
                    <span>Радченко М. П.</span>
                  </div>
                  <div className="lesson-title-line3">
                    <span>3 січня 2024</span>
                  </div>
                </div>
              </div>
              <div className="lesson">
                <div className="lesson-content-block">
                  <span className="lesson-title-line1">Стек технології</span>
                  <div className="lesson-time">
                    <span>12:30</span>
                    <span>-</span>
                    <span>14:00</span>
                  </div>
                </div>
                <div className="lesson-content-block">
                  <div className="lesson-title-line2">
                    <span>Викладач:</span>
                    <span>Крупська Д. Г.</span>
                  </div>
                  <div className="lesson-title-line3">
                    <span>3 січня 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reminders_mobile">
            <span className="title title-information-bottom">Нагадування</span>

            <div className="reminder-block">
              <div className="rem_block">
                <div className="rem_block_content">
                  <div className="rem-button color-block-home">
                    <Image
                      src={reminderIcon as string}
                      alt="reminder icon"
                      className="rem_icon"
                    />
                  </div>
                  <div className="rem_text">
                    <span className="rem_block_title">КПП - Тест №2</span>
                    <span className="rem_block_info">12 січня 2024, 10:00</span>
                  </div>
                </div>
              </div>

              <div className="rem_block">
                <div className="rem_block_content">
                  <div className="rem-button color-block-home">
                    <Image
                      src={reminderIcon as string}
                      alt="reminder icon"
                      className="rem_icon"
                    />
                  </div>
                  <div className="rem_text">
                    <span className="rem_block_title">
                      Бізнес планування - Презентація
                    </span>
                    <span className="rem_block_info">15 січня 2024, 13:30</span>
                  </div>
                </div>
              </div>

              <div className="rem_block">
                <div className="rem_block_content">
                  <div className="rem-button color-block-home">
                    <Image
                      src={reminderIcon as string}
                      alt="reminder icon"
                      className="rem_icon"
                    />
                  </div>
                  <div className="rem_text">
                    <span className="rem_block_title">
                      Історія техніки - Семінар
                    </span>
                    <span className="rem_block_info">16 січня 2024, 08:30</span>
                  </div>
                </div>
              </div>

              <div className="rem_block">
                <div className="rem_block_content">
                  <div className="rem-button color-block-home">
                    <Image
                      src={reminderIcon as string}
                      alt="reminder icon"
                      className="rem_icon"
                    />
                  </div>
                  <div className="rem_text">
                    <span className="rem_block_title">Англ. мова - Есе</span>
                    <span className="rem_block_info">12 січня 2024, 10:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <iframe src="information_menu.html" className="information-menu-block"></iframe> */}
      </div>
    </div>
  );
});

export default Home;
