import React, { useState } from 'react';

export const Register = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">FULLNAME</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name" />
                <label htmlFor="username">USERNAME</label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="password">PASSWORD</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">login (y/n?)</button>
                
            </form>
                <button className="link-btn-reg" onClick={() => props.onFormSwitch('login')}>Register</button>
        </div>
    )
}