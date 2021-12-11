import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='http://imgfz.com/i/830i4HV.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Registrarme</h1>

                <form>
                    <h5>Usuario</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Contraseña</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>Vuelva a Escribir la contraseña</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


                </form>

               

                <button onClick={register} className='login__registerButton'>Registrarme</button>
            </div>
        </div>
    )
}

export default Login
