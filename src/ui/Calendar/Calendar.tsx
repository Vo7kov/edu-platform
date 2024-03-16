'use client';

/* eslint-disable react/display-name */
import React, { useState } from 'react';

import Image from 'next/image';

import chevronLeft from '../../assets/chevron_left.svg';
import chevronRight from '../../assets/chevron_right.svg';

const CalendarComponent: React.FC = React.memo(() => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [months] = useState([
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ]);

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth,
    ).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    const days = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      days.push(
        <li key={`inactive-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>,
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === date.getDate() &&
        currMonth === date.getMonth() &&
        currYear === date.getFullYear();
      days.push(
        <li key={`active-${i}`} className={isToday ? 'active' : ''}>
          {i}
        </li>,
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      days.push(
        <li key={`inactive-next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>,
      );
    }

    return days;
  };

  const handlePrevNextClick = (increment: number) => {
    let newDate = new Date(currYear, currMonth + increment, 1);
    if (newDate.getMonth() < 0 || newDate.getMonth() > 11) {
      newDate = new Date(currYear, currMonth, new Date().getDate());
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    } else {
      setDate(newDate);
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    }
  };

  return (
    <div className="wrapper">
      <header>
        <div className="icons">
          <span
            id="prev"
            className="material-symbols-rounded"
            onClick={() => handlePrevNextClick(-1)}
          >
            <Image src={chevronLeft as string} alt="previous" />
          </span>
        </div>
        <p className="title-information current-date">{`${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          <span
            id="next"
            className="material-symbols-rounded"
            onClick={() => handlePrevNextClick(1)}
          >
            <Image src={chevronRight as string} alt="next" />
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
        <ul className="days">{renderCalendar()}</ul>
      </div>
    </div>
  );
});

export default CalendarComponent;
