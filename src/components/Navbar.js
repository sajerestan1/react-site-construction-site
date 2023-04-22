import React from 'react';
import { menu, pages } from './data';
const Navbar = () => {
  return (
    <>
      <div className='nav-bar'>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
            <button href='#' className='navbar-brand'>
              MENU
            </button>
            <button
              type='button'
              className='navbar-toggler'
              data-toggle='collapse'
              data-target='#navbarCollapse'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse justify-content-between'
              id='navbarCollapse'
            >
              <div className='navbar-nav mr-auto'>
                {menu.map((menu) => {
                  const { id, href, text, name } = menu;
                  return (
                    <>
                      <li key={id}>
                        <a href={href} className={name}>
                          {text}
                        </a>
                      </li>
                    </>
                  );
                })}
                <li>
                  <div className='nav-item dropdown'>
                    <button
                      href='#'
                      className='nav-link dropdown-toggle'
                      data-toggle='dropdown'
                    >
                      Pages
                    </button>
                    {pages.map((page) => {
                      const { id, text, href } = page;
                      return (
                        <div className='dropdown-menu' key={id}>
                          <a href={href} className='dropdown-item'>
                            {text}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
