import react from 'react';

const Header = () => {

    
  return (
    <header className="osg-header">
        <div className="osg-header__logo">
            <figure className="osg-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 154">
                <title>Oslologo</title>
                <path d="m102.3 34.2-2.1-1.3C97 30.8 93.6 29 90 27.5v0C88.5 26.9 87 26.3 85.5 25.8 81.9 24.6 78.1 23.6 74.4 23c-1.6-0.2-3.2-0.4-4.9-0.6-3.8-0.3-7.7-0.3-11.5 0-1.6 0.1-3.3 0.3-4.9 0.6-3.8 0.6-7.5 1.5-11.2 2.8-1.5 0.5-3 1.1-4.5 1.7v0c-3.5 1.5-6.9 3.3-10.2 5.4l-2.1 1.3-10.3-19.7 1.8-1.1c3.5-2.2 7.1-4.1 10.8-5.7l1.9-0.9 3.7 7.1c1.1-0.4 2.1-0.8 3.2-1.2l-1.9-7.8 2-0.7C40.2 3 44.1 2 48.1 1.3l2.1-0.4 1.9 7.8 0.6-0.1c0.9-0.1 1.9-0.2 2.8-0.3v-8l2.1-0.1c2-0.1 4.1-0.2 6.1-0.2 2 0 4.1 0.1 6.1 0.2l2.1 0.1v8c1.1 0.1 2.2 0.2 3.4 0.4l1.9-7.8 2.1 0.4c4 0.7 8 1.7 11.8 2.9l2 0.7-1.9 7.8c1.1 0.4 2.1 0.8 3.2 1.2l3.7-7.1 1.9 0.9c3.7 1.7 7.3 3.6 10.8 5.7l1.8 1.1zm-81.5-18 6.1 11.6c2.8-1.7 5.7-3.1 8.7-4.4h0.1c1.6-0.7 3.2-1.3 4.8-1.8 3.9-1.3 7.9-2.4 11.9-3 1.7-0.3 3.4-0.5 5.2-0.6 4.1-0.3 8.2-0.3 12.3 0 1.7 0.2 3.5 0.4 5.2 0.6 4 0.6 8 1.6 11.9 2.9 1.6 0.6 3.2 1.2 4.8 1.8v0c3 1.3 5.9 2.8 8.8 4.4l6.1-11.6c-2.1-1.2-4.3-2.4-6.5-3.4l-3.7 7-1.9-0.8-0.8-0.3C91.9 17.8 89.9 17 87.9 16.4L85.9 15.7 87.8 8C85.4 7.3 83.1 6.7 80.7 6.2l-1.9 7.7-2.1-0.3C74.3 13.2 71.9 12.9 69.6 12.7L67.5 12.5V4.6c-2.4-0.1-4.9-0.1-7.3 0v7.9l-2.1 0.2C56.5 12.8 55 13 53.5 13.2 52.7 13.3 51.8 13.4 51 13.6L48.9 13.9 47 6.2C44.6 6.7 42.2 7.3 39.9 8l1.9 7.7-2 0.7c-2 0.7-4 1.4-5.9 2.2l-0.8 0.3-1.9 0.8-3.7-7c-2.4 1-4.6 2.2-6.7 3.5z"></path>
                <path d="M63.7 154C28.5 154 0 125.5 0 90.4 0 55.3 28.5 26.7 63.6 26.7c35.1 0 63.7 28.5 63.7 63.6 0 16.9-6.7 33.1-18.6 45.1-11.9 11.9-28.2 18.6-45 18.6zm0-122.6c-32.6 0-59 26.4-59 58.9 0 32.5 26.4 59 58.9 59 32.6 0 59-26.4 59-58.9 0-15.6-6.2-30.6-17.3-41.7-11-11.1-26-17.4-41.6-17.3z"></path>
                <path d="m51.4 72.2c-5-6.7-3.6-16.3 3.1-21.3 6.7-5 16.3-3.6 21.3 3.1 4 5.4 4 12.8 0 18.2l3.4 2.5c2.5-3.3 3.9-7.4 3.9-11.6 0-10.7-8.7-19.4-19.4-19.4-10.7 0-19.4 8.7-19.4 19.4 0 4.2 1.4 8.3 3.9 11.6z"></path>
                <path d="m63.6 76.8c4.2 0 7.6-3.4 7.6-7.6v-0.8h2.5V63.6C73.7 58 69.2 53.5 63.6 53.5 58 53.5 53.5 58 53.5 63.6v4.8H56v0.8c0 4.2 3.4 7.6 7.6 7.6zM57.7 63.7c0-3.3 2.6-5.9 5.9-5.9 3.3 0 5.9 2.6 5.9 5.9 0 0 0 0 0 0v4.8h-1.8v0.8c0.1 2.3-1.6 4.2-3.9 4.3-2.3 0.1-4.2-1.6-4.3-3.9 0-0.1 0-0.3 0-0.4v-0.8h-1.8z"></path>
                <rect x="20.2" y="93.2" width="5.8" height="5.9"></rect>
                <path d="m110.7 88.7v3.1h3l-8.1 8.1V85.7l2.1 2.1 2.2-2.2-5.9-5.9-5.9 5.9 2.2 2.2 2.1-2.1v14.1l-8.1-8.1h2.9V88.6H88.9V97H92v-3l6.3 6.4H85.5L84.2 99.2 83.1 88.8C83 88.2 82.4 82.9 78 80.6H77.9L73.4 78.8 72.7 78.5 72 78.7c-2.8 0.7-5.6 1-8.4 0.9-2.8 0.1-5.7-0.2-8.4-0.9l-0.7-0.2-5.2 2h-0.1c-4.4 2.3-5.1 7.6-5.1 8.2l-1.2 10.8-1 0.8h-4.4c0.4-1.4 0.6-2.8 0.6-4.2 0-8.3-6.8-15-15.1-14.9-8.3 0-15 6.8-14.9 15.1 0 7.4 5.4 13.6 12.7 14.8H21c0.4 0.1 0.8 0.1 1.2 0.1l19.5 2c-0.7 6.6-2 13.1-3.9 19.5l2 0.7 2 0.6c2-6.7 3.4-13.6 4.1-20.5l4.4-3.7-0.7 27.2 1.8 0.3c8.2 1.4 16.6 1.4 24.9 0l1.8-0.3-0.7-27.1 4.4 3.7c0.7 6.9 2.1 13.8 4.1 20.5l4-1.3C88 126.4 86.7 119.9 86 113.3l19.6-1.8v-6.8L116 94.3v3h3.1V89ZM63.6 83.9c3 0.1 6-0.3 9-0.9l3.6 1.4c2.4 1.3 2.8 4.8 2.8 4.8l0.9 8.2h-5.1c-2 0-4.1-0.5-5.8-1.6-1.3-1-2.5-2.1-3.5-3.4l-7.2-8.8c1.8 0.2 3.6 0.3 5.3 0.3zM23.1 107h-0.5l-1.1-0.1c-5.9-0.9-10-6.5-9-12.4 0.9-5.9 6.5-10 12.4-9 5.9 0.9 10 6.5 9 12.4-0.9 5.2-5.5 9.1-10.8 9.1zm27.3-2.9-6 5.1-12-1.2c1.2-1 2.3-2.1 3.2-3.4h7.9l7-5.9zm0.3-11v0 0l-3.1 2.6 0.7-6.4v-0.1c0 0 0.3-3.5 2.8-4.8l2-0.8 3.6 4.4zm13 41c-3.3 0-6.6-0.2-9.8-0.7l0.2-8.9v0l0.7-29.4 4.5-3.8 3 3.7c1.3 1.7 2.9 3.2 4.6 4.4 1.8 1.1 3.9 1.8 6 2.1l0.8 31.9c-3.3 0.4-6.7 0.6-10 0.7zm37.7-26.6-18.1 1.7-9-7.6h0.7 5.9l3.4 3h17.2z"></path>
                <path d="m162.9 87.5c0-15.5 9.8-25 21.8-25 12 0 21.8 9.5 21.8 25 0 16.1-9.8 25.7-21.8 25.7-12 0-21.8-9.6-21.8-25.7zm37.4 0c0-13.4-6.9-19.4-15.6-19.4-8.7 0-15.6 6-15.6 19.4 0 13.4 7.2 20.1 15.6 20.1 8.4 0 15.6-6.7 15.6-20.1z"></path>
                <path d="m227.2 76.5c6.6 0 11.4 2.9 13.2 7.6l-4.4 2.2c-1.5-3.1-4.7-4.9-9-4.9-4.5 0-7.6 1.8-7.6 4.8 0 2.6 1.7 4.1 5.5 5l5.1 1c7.7 1.5 11.4 5 11.4 10.3 0 6.4-5.6 10.7-13.9 10.7-7.2 0-12.4-2.8-14.9-8l4.4-2.3c1.8 3.5 5.3 5.5 10.3 5.5 5 0 8.5-2.2 8.5-5.6 0-2.9-1.7-4.6-5.8-5.4l-6.1-1.2c-6.6-1.3-10.1-4.7-10.1-9.6 0.1-5.8 5.6-10.1 13.4-10.1z"></path>
                <path d="m259.1 113c-6 0-8.9-3.7-8.9-9.4V63.2h5.8v40.2c0 3.1 1.7 4.6 4.5 4.6 0.7 0 1.4-0.1 2.1-0.3v5c-1.1 0.1-2.3 0.3-3.5 0.3z"></path>
                <path d="m267.5 94.8c0-11.1 7.2-18.3 16.3-18.3 9.1 0 16.2 7.2 16.2 18.3 0 11.2-7.3 18.5-16.2 18.5-8.9 0-16.3-7.3-16.3-18.5zm26.5 0c0-9-4.7-13.3-10.2-13.3-5.5 0-10.3 4.2-10.3 13.3 0 9.1 4.6 13.5 10.3 13.5 5.7 0 10.2-4.5 10.2-13.5z"></path>
            </svg>
            </figure>
        </div>
        <div className="osg-header__content">
            <div className="osg-none-breakpoint-medium osg-full-height">
            <div className="osg-grid osg-full-height">
                <div className="osg-grid__column--12">
                <div className="osg-full-height osg-flex osg-flex-justify-content-flex-end osg-flex-align-items-center">
                    <button className="osg-button osg-none-breakpoint-medium" aria-label="Button text">
                    <span className="osg-button__icon osg-icon--crane"></span>
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className="osg-none osg-block-breakpoint-medium osg-full-height">
            <div className="osg-grid osg-grid--gap osg-full-height">
                <div className="osg-grid__column--12">
                <div className="osg-full-height osg-flex osg-flex-justify-content-flex-end osg-flex-align-items-center">
                    <form className="osg-margin-right-2-breakpoint-medium osg-margin-right-8-breakpoint-large" action method="GET" role="search">
                    <div className="osg-search-circle">
                        <div className="osg-search-circle__wrapper">
                        <input className="osg-search-circle__input" type="search" autocomplete="off" aria-label="Label text" placeholder="Search keyword"/>
                        </div>
                        <button className="osg-search-circle__button" type="submit">
                        <span className="osg-search-circle__button-icon"></span>
                        <span className="osg-sr-only">Search</span>
                        </button>
                    </div>
                    </form>
                    <button className="osg-button osg-button--outline osg-margin-right-4-breakpoint-medium osg-margin-right-8-breakpoint-large">Button<span className="osg-button__icon osg-button__icon--right osg-icon--fire-emblem"></span></button>
                    <button className="osg-button osg-button--outline">Button<span className="osg-button__icon osg-button__icon--right osg-icon--crane"></span></button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>
  );
};
export default Header;