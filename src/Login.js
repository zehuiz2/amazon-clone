import React, {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo' 
                    src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' 
                />
            </Link>
            <div className='login__container'>
                <h1 className='login__header'>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signinButton'>Sign In</button>
                </form>

                <p>
                    By signing-in, you agree to the FAKE AMAZON conditoons of Use & Sale. All Rights Reserved &copy; Zehui Zhu. 
                </p>

                <button onClick={register} className='login__registerButton'>Create Account</button>
            </div>
        </div>
    )
}

export default Login