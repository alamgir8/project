import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import googleLogo from './../../../img/goggle.jpg';
import bgLogin from './../../../img/login.png';
import { userContext } from '../../../App';
import firebaseConfig from './firebase.config';
import Navigation from '../../Shared/Navigation/Navigation';





!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
        error: '',
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
        const user = res.user;
        setLoginUser(user);
        history.replace(from);
                   
        }).catch((error) => {
          const errorMessage = error.message;
          const email = error.email;
         console.log(errorMessage, email);
        });
    }

   
       
    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
          }
        if (isFormValid) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    
   

    const handleSubmit = e => {
     
      if (user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const user = res.user;
            setLoginUser(user);
            setUser(user);
            history.replace(from);
       
        })
        
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = {...user};
          newUserInfo.error = errorMessage;
          setUser(newUserInfo);
         });
      }
      e.preventDefault();
    };

    return (
        <div className="login-section">
            <Navigation/>
              <div className="container">
                <div className="row my-5">
                    <div className="col-md-5">
                        <div className="card bg-light ms-auto my-3 p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="p-4">
                                        <div className="py-2">
                                            <input onBlur={handleBlur} className="form-control" name='email' defaultValue='alamgir@gmail.com' type="text" placeholder="Email"  required/>
                                        </div>
                                        <div className="py-2">
                                            <input onBlur={handleBlur} className="form-control" name='password' defaultValue='allahuakber001' type="password" placeholder="Password" required/>
                                        </div>
                                        <p className='text-danger'>{user.error}</p>
                                        <div className="py-3 text-center">
                                            <button className='btn button text-white w-100'>Login</button>
                                            <p className='text-center m-auto pt-4'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                                            <button className='google-login-button btn mt-4 bg-info text-white' onClick={handleGoogleSignIn}><img src={googleLogo} alt="goggleLogo"/> Continue With Google</button>
                                        </div>
                    
                                    </div>         
                                </form>
             
                        </div> 
                    </div>
                    <div className="col-md-6 offset-md-1">
                            <img src={bgLogin} alt="bgLogin" className='img-fluid w-75'/>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Login;