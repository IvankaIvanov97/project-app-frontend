import React, {useEffect, useState} from "react";
import logo from "../assets/img/logo.svg";
import search from "../assets/img/search.svg";
import enter from "../assets/img/enter.svg";

import { Link } from "react-router-dom";
import Login from "./Login";
function Header() {
    const [active, setActive] = useState(0)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (window.location.href.indexOf("auctions") >= 0) {
            setActive(1)
        }
        else if (window.location.href.indexOf("vendor") >= 0) {
            setActive(2)
        }
        else if (window.location.href.indexOf("contacts") >= 0) {
            setActive(3)
        }

    }, [])
    function handler(e) {
        setActive(e)
    }
    function login() {
        setIsLogin(true)
    }

    return (
        <>
            {isLogin && <Login state={setIsLogin}/>}
            <header>
                <div className="cont">
                    <div className="one">
                        <Link onClick={(e) => handler(0)} to="/" className="logo">
                            <img src={logo} alt="logo"/>
                                <p>Реакцион</p>
                        </Link>
                        <label htmlFor="search">
                            <input placeholder="Поиск..." id="search" type="text"/>
                                <button>
                                    <img src={search} alt="search"/>
                                </button>
                        </label>
                        <a onClick={login} href="#" className="sign">
                            <img src={enter} alt="sign_in"/>
                            <p>Войти</p>
                        </a>
                    </div>
                </div>
                <nav className="two">
                    <ul className="cont">
                        <li><Link to="/auctions" onClick={(e) => handler(1)}  className={active === 1 ? "active" : ""}>Аукционы</Link></li>
                        <li><Link to="/vendors" onClick={(e) => handler(2)} className={active === 2 ? "active" : ""}>Продавцы</Link></li>
                        <li><Link to="/" onClick={(e) => handler(3)} className={active === 3 ? "active" : ""}>Контакты</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
