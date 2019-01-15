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
                                <img src="https://dummyimage.com/200x50/000/fff" alt="logo" />
                            </div>
                            <button type="button" className="icon-paragraph-justify mob-menu btn-icon" onClick={this.toggleMainMenu} />
                            <div className={`navigation ${hideMobMenu}`}>
                                <button type="button" className="icon-cross cross-menu btn-icon" onClick={this.toggleMainMenu} />
                                <div className="nav-menu">
                                    <ul className="nav-bar">
                                        <li><Link to={`${AppUrls.ROOT}`}>Root</Link></li>
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/aboutUs">aboutUs</Link></li>
                                        <li><Link to="/aboutUs/contactUs">contactUs</Link></li>
                                    </ul>
                                    <div className="login-nav">
                                        <ul className="nav-bar">
                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/singUp">SignUp</Link></li>
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