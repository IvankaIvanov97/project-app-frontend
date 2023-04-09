import React, {useState} from "react";
import axios from "axios";
import {API_URL} from "../timer";
import krest from "../assets/img/krest.svg"

function Login({ state }) {
    const [loginLogin, setLoginLogin] = useState("")
    const [loginPass, setLoginPass] = useState("")
    const [signupLogin, setSignupLogin] = useState("")
    const [signupPass, setSignupPass] = useState("")
    function login() {
        axios({
            method: 'post',
            url: API_URL + 'auth/token',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function signup() {

    }
    function loginLoginHandler(e) {
        setLoginLogin(e.target.value)
    }
    function loginPassHandler(e) {
        setLoginPass(e.target.value)
    }
    function signupLoginHandler(e) {
        setSignupLogin(e.target.value)
    }
    function signupPassHandler(e) {
        setSignupPass(e.target.value)
    }
    return (
        <div className="back">
            <div className="login">
                <img onClick={() => state(false)} src={krest}/>
                <div className="log_block">
                    <p className="head">Войти</p>
                    <input value={loginLogin} onChange={(e) => loginLoginHandler(e)} type="text" name="login" placeholder="Логин"/>
                    <input value={loginPass} onChange={(e) => loginPassHandler(e)} type="password" name="pass" placeholder="Пароль"/>
                    <button onClick={login}>Войти</button>
                </div>
                <div className="log_block">
                    <p className="head">Регистрация</p>
                    <input type="text" name="name" placeholder="Фамилия имя"/>
                    <input value={signupLogin} onChange={(e) => signupLoginHandler(e)} type="text" name="login" placeholder="Логин"/>
                    <input value={signupPass} onChange={(e) => signupPassHandler(e)} type="password" name="pass" placeholder="Пароль"/>
                    <button onClick={signup}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
}

export default Login