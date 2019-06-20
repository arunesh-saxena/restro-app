import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';
import CartLink from '../cartLink/CartLink';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleMainMenu = this.toggleMainMenu.bind(this);
        this.state = {
            isMainMenuOpen: false
        };
        this.labels = props.labels.common;
        this.isLogin =
            (this.props && this.props.user && this.props.user.isLogin) || null;
    }

    toggleMainMenu(event) {
        const isOpen = this.state.isMainMenuOpen;
        this.setState({
            isMainMenuOpen: !isOpen
        });
    }

    navBar() {
        return (
            <ul className="nav-bar">
                <li>
                    <Link to={AppUrls.ABOUT_US}>
                        <span
                            role="button"
                            tabIndex="0"
                            onClick={this.toggleMainMenu}
                        >
                            {this.labels.aboutUs}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={AppUrls.CONTACT_US}>
                        <span
                            role="button"
                            tabIndex="0"
                            onClick={this.toggleMainMenu}
                        >
                            {this.labels.contactUs}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={AppUrls.MENULIST}>
                        <span
                            role="button"
                            tabIndex="0"
                            onClick={this.toggleMainMenu}
                        >
                            {this.labels.menuList}
                        </span>
                    </Link>
                </li>
            </ul>
        );
    }

    cartBar() {
        return (
            <ul className="nav-bar cart-bar">
                <li>
                    <CartLink headerLabel={this.labels.cart} />
                </li>
            </ul>
        );
    }

    render() {
        const hideMobMenu = this.state.isMainMenuOpen ? '' : 'hide-mob-menu';
        return (
            <div className="header-container">
                <header className="header container">
                    <div className="app-logo">
                        <Link to={`${AppUrls.ROOT}`}>
                            <img src="/assets/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="btn icon-paragraph-justify mob-menu btn-icon"
                        onClick={this.toggleMainMenu}
                    />
                    <div className={`navigation ${hideMobMenu}`}>
                        <button
                            type="button"
                            className="btn icon-cross cross-menu btn-icon"
                            onClick={this.toggleMainMenu}
                        />
                        <div className="nav-menu">
                            {this.navBar()}
                            {this.cartBar()}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
