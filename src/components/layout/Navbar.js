import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <div className="navbar">
                <div className="navbar-content">
                    <div className="uk-container">
                        <nav data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link to="/">
                                    <span><i className={icon}></i> {title}</span>
                                </Link>
                            </div>
                            <div className="uk-navbar-right">
                                <ul className="uk-navbar-nav uk-visible@s">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                                {/* Show Nav items in sidebar in phone screens */}
                                <div className="uk-hidden@s">
                                    <button className="uk-button" type="button" data-uk-toggle="target: #offcanvas-overlay">Menu</button>
                                    <div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
                                        <div className="uk-offcanvas-bar">
                                            <button className="uk-offcanvas-close" type="button" data-uk-close></button>
                                            <Link to="/">
                                                <span><i className={icon}></i> {title}</span>
                                            </Link>
                                            <ul className="uk-nav uk-nav-default">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
