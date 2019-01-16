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
    }
    toggleMainMenu(event) {
        console.log('toggleMainMenu');
        this.setState({
            isMainMenuOpen: !this.state.isMainMenuOpen
        })
    }
    render() {
        const hideMobMenu = this.state.isMainMenuOpen ? '' : 'hideMobMenu';
        return (
            <div className="header-container">
                <header className="header container">
                    {/* <div className="row">
                        <div className="col-12"> */}
                    <div className="app-logo">
                        <Link to={`${AppUrls.ROOT}`}>
                            <img src="./assets/images/logo.png" alt="logo" />
                        </Link>

                    </div>
                    <button type="button" className="btn icon-paragraph-justify mob-menu btn-icon" onClick={this.toggleMainMenu} />
                    <div className={`navigation ${hideMobMenu}`}>
                        <button type="button" className="btn icon-cross cross-menu btn-icon" onClick={this.toggleMainMenu} />
                        <div className="nav-menu">
                            <ul className="nav-bar">
                                <li><Link onClick={this.toggleMainMenu} to="/aboutUs">AboutUs</Link></li>
                                <li><Link onClick={this.toggleMainMenu} to="/aboutUs/contactUs">ContactUs</Link></li>
                            </ul>
                            <div className="login-nav">
                                <ul className="nav-bar">
                                    <li><Link onClick={this.toggleMainMenu} to="/login">Login</Link></li>
                                    <li><Link onClick={this.toggleMainMenu} to="/singUp">SignUp</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* </div>
                    </div> */}
                </header>
            </div>
        );
    }
};

export default Header;