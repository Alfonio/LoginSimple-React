import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="container">
        <form action="">
            <h1>Registrate</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña' required />
                <FaLock className='icon'/>
            </div>

            <div className="recuerdame-olvide">
                <label><input type="checkbox" />Recuerdame</label>
                <a href="/">Olvidaste tu contraseña?</a>
            </div>

            <button type='submit'>Login</button>

            <div className="link-registro">
                <p>No tienes una cuenta? <a href="/">Registrate</a></p>
            </div>
        </form>
    </div>
  )
}
