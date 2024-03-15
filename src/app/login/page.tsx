'use client';

/* eslint-disable react/display-name */
import React, { useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import logo from '../../assets/logo_black.svg';
import './index.css';

const Login: React.FC = React.memo(() => {
  const [isCheckBoxPressed, setIsCheckBoxPressed] = useState(false);

  return (
    <div className="page-content-background">
      <div className="container-authorization">
        <div className="block-logo-page-login">
          <Image
            src={logo as string}
            className="logo-page-login"
            width={70}
            height={70}
            alt="logo"
          />
        </div>

        <div className="block-authorization">
          <div className="blocks-authorization-indentation">
            <div className="title-input-text">E-mail адреса</div>
            <input
              type="email"
              placeholder="Введіть e-mail"
              className="block-input-data title-input-text color-block-authorization"
            />

            <div className="title-input-text">Пароль</div>
            <input
              type="password"
              placeholder="Введіть пароль"
              className="block-input-data title-input-text color-block-authorization"
            />

            <div className="remember-block">
              <div
                onClick={() => setIsCheckBoxPressed((prev) => !prev)}
                className={classNames(
                  'checkbox-remember color-block-authorization',
                  {
                    'checkbox-remember--active': isCheckBoxPressed,
                  },
                )}
              >
                <div
                  id="checkbox"
                  className={classNames('checkbox-page-authorization', {
                    'checkbox-page-authorization--active': isCheckBoxPressed,
                  })}
                />
              </div>
              <span className="title-input-text">Запам`ятати мене</span>
            </div>
          </div>

          <div className="block-button-authorization">
            <a href="#" className="custom-button custom-button1">
              Увійти
            </a>
            <a
              href="#"
              className="custom-button color-block-authorization custom-button2"
            >
              Увійти за допомогою
            </a>
          </div>

          <div className="title-input-text support-position">
            <div>Пошта підтримки:</div>
            <div>support.cabinet@khpi.edu.ua</div>
            <div>studcabinet@kpi.kharkov.ua</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Login;
