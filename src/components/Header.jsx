import React from "react";
import logo from "../assets/img/logo.svg";
import search from "../assets/img/search.svg";
import enter from "../assets/img/enter.svg";

import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <div className="cont">
                <div className="one">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"/>
                            <p>Реакцион</p>
                    </Link>
                    <label htmlFor="search">
                        <input placeholder="Поиск..." id="search" type="text"/>
                            <button>
                                <img src={search} alt="search"/>
                            </button>
                    </label>
                    <a href="#" className="sign">
                        <img src={enter} alt="sign_in"/>
                            <p>Войти</p>
                    </a>
                </div>
            </div>
            <nav className="two">
                <ul className="cont">
                    <li><Link to="/auctions">Аукционы</Link></li>
                    <li><Link to="/vendors">Продавцы</Link></li>
                    <li><Link to="/">Контакты</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
