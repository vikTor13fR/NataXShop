import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import Sign from './asset/icons/icon4.svg'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
              //loged
              history.push("/"); 
          })
          .catch((e) => alert(e.message));
    }
    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //create user...
            history.push("/"); 
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={Sign} className="login-logo" />
            </Link>
            <div className="login-container">
                <h1>Sing in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login-sign-button">Sign in</button>
                </form>
                <p>
                    By signing-in your agree to NataXShop Conditions of Use & Sale.Please see our Privacy Notice, our Coockies Notice and our Interest-Based Ads Notice.
                </p>
                <span className="login-br">Створіть акант</span>
                <button onClick={register} className="login-reg-button">Створити NataXShop акаунт</button>
            </div>

        </div>
    )
}

export default Login
