import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="now-playing">
                <img src="https://images.unsplash.com/photo-1515233451477-90d9cd4d57ed?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=cade564aeff757d648625aaac06e837c"
                     alt="album cover" className="album__image"/>
                <div className="album__info">
                    <span className="album__title">Stay There Now</span>
                    <span className="album__musician">The Harmonics</span>
                </div>
            </div>
            <div className="play-controls">
                <i className="fas fa-fast-backward"/>
                <i className="far fa-play-circle"/>
                <i className="fas fa-fast-forward"/>
            </div>
            <div className="play-device-controls">
                <i className="fas fa-volume-up"/>
            </div>
        </footer>
    );
}

export default Footer;