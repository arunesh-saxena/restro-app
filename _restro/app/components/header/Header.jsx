import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppUrls from '../../appConstants/appUrls';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleMainMenu = this.toggleMainMenu.bind(this);
        this.state = {
            isMainMenuOpen: false
        };
        this.labels = props.labels.common;
    }

    toggleMainMenu(event) {
        const isOpen = this.state.isMainMenuOpen;
        this.setState({
            isMainMenuOpen: !isOpen
        });
    }

    navBar() {
        const { isLogin } = this.props.user;
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
                    <Link to={AppUrls.MENU_LIST}>
                        <span
                            role="button"
                            tabIndex="0"
                            onClick={this.toggleMainMenu}
                        >
                            {this.labels.menuList}
                        </span>
                    </Link>
                </li>
                {isLogin && (
                    <li>
                        <Link to={AppUrls.ADD_MENU}>
                            <span
                                role="button"
                                tabIndex="0"
                                onClick={this.toggleMainMenu}
                            >
                                {this.labels.addMenu}
                            </span>
                        </Link>
                    </li>
                )}
            </ul>
        );
    }

    loginNav() {
        const { isLogin } = this.props.user;
        return (
            <div className="login-nav">
                <ul className="nav-bar">
                    {!isLogin && (
                        <React.Fragment>
                            <li>
                                <Link to={AppUrls.LOGIN}>
                                    <span
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggleMainMenu}
                                    >
                                        {this.labels.login}
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={AppUrls.SIGN_UP}>
                                    <span
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggleMainMenu}
                                    >
                                        {this.labels.signUp}
                                    </span>
                                </Link>
                            </li>
                        </React.Fragment>
                    )}
                    {isLogin && (
                        <li>
                            <span
                                role="button"
                                tabIndex="0"
                                onClick={this.props.handleLogout}
                            >
                                <Link to="/#">
                                    <span
                                        role="button"
                                        tabIndex="0"
                                        onClick={this.toggleMainMenu}
                                    >
                                        {this.labels.logout}
                                    </span>
                                </Link>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    render() {
        const hideMobMenu = this.state.isMainMenuOpen ? '' : 'hide-mob-menu';
        return (
            <div className="header-container">
                <header className="header container">
                    {/* <div className="row">
                        <div className="col-12"> */}
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
                            {this.loginNav()}
                        </div>
                    </div>
                    {/* </div>
                    </div> */}
                </header>
            </div>
        );
    }
}

export default Header;
