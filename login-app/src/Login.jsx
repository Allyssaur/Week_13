import React, { useState } from 'react';

export const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username"> USERNAME</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="password"> PASSWORD</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">login (y/n?)</button>
            </form>
            <button className="link-btn-reg" onClick={() => props.onFormSwitch('register')}>Register</button>
        </div>
    )
}