import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/Login.css';

import {login}  from '../features/users/usersSlice';

const Login = () => {

    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const onUsernameChanged = e => setUsername(e.target.value);

    const onLoginClicked = (username) => {
        if(username !== ""){
            dispatch(login(username));
        }
    };

    let loginButton;
    if(username === ""){
        loginButton = (
            <button className="login-page-btn" onClick={() => onLoginClicked(username)}>
                <h3>ログイン</h3>
                <p>Login</p>
            </button>
        );
    }else{
        loginButton = (
            <Link to="/">
            <button className="login-page-btn" onClick={() => onLoginClicked(username)}>
                <h3>ログイン</h3>
                <p>Login</p>
            </button>
            </Link>
        );
    }



    return(
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-title">
                    <h2>ログイン</h2>
                    <p>LOGIN</p>
                </div>

                <div className="login-form">
                    <h3>ユーザー名</h3>
                    <p>username</p>
                    <input type="text" value={username} onChange={onUsernameChanged} />
                </div>

                {loginButton}
            </div>
        </div>
    );
}

export default Login;