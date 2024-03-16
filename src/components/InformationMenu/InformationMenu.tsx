/* eslint-disable react/display-name */
import React from 'react';

import Image from 'next/image';

import CalendarComponent from '@/ui/Calendar/Calendar';

import avatar from '../../assets/avatars/photo.png';
import reminderIcon from '../../assets/reminder_icon.svg';
import './index.css';

const InformationMenu: React.FC = React.memo(() => {
  return (
    <div className="information">
      <div className="profile-information">
        <Image src={avatar} alt="avatar" className="photo" />
        <span className="title-profile-name">Шевченко А. В.</span>
        <span className="title-profile-job">Студент</span>
        <a className="profile-button">Профіль</a>
      </div>

      <CalendarComponent />

      <div className="reminders">
        <span className="title-information title-information-bottom">
          Нагадування
        </span>

        <div className="reminder-block">
          <div className="rem_block">
            <div className="rem_block_content">
              <div className="rem-button">
                <Image
                  src={reminderIcon as string}
                  alt="reminder"
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
              <div className="rem-button">
                <Image
                  src={reminderIcon as string}
                  alt="reminder"
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
              <div className="rem-button">
                <Image
                  src={reminderIcon as string}
                  alt="reminder"
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
              <div className="rem-button">
                <Image
                  src={reminderIcon as string}
                  alt="reminder"
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
  );
});

export default InformationMenu;
