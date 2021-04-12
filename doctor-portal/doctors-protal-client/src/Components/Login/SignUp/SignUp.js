import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../Login/firebase.config';
import { userContext } from '../../../App';
import googleLogo from './../../../img/goggle.jpg';
import bgLogin from './../../../img/login.png'
import Navigation from '../../Shared/Navigation/Navigation';






!firebase.apps.length && firebase.initializeApp(firebaseConfig);

            const SignUp = () => {
                const [loginUser, setLoginUser] = useContext(userContext);
                const history = useHistory();
                const location = useLocation();
                const { from } = location.state || { from: { pathname: "/" } };
                const [user, setUser] = useState({
                    name: '',
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
                    console.log(e);
                    let isFormFieldValid = true;
                    if (e.target.name === 'email') {
                        isFormFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
                    }
                    if (e.target.name === 'password') {
                        const isPasswordValid = e.target.value.length > 8;
                        const isPasswordHasNumber = /\d{1}/.test(e.target.value);
                        isFormFieldValid = isPasswordValid && isPasswordHasNumber;
                    }
                 
                    if (isFormFieldValid) {
                        const newUserInfo = {...user};
                        newUserInfo[e.target.name] = e.target.value;
                        setUser(newUserInfo);
                    }
                }
                

                const handleSubmit = (e) => {
    
                  if (user.email && user.password) {
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = '';
                        setUser(newUserInfo);
                        updateUserName(user.name)
                        alert('your account created successfully!')
                        
                        
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        const newUserInfo = {...user};
                        newUserInfo.error = errorMessage;
                        setUser(newUserInfo);
                        console.log(error);
                        
                   
                    });
                    
                }
                e.preventDefault();

                };

                const updateUserName = name => {
                    const user = firebase.auth().currentUser;
                
                    user.updateProfile({
                      displayName: name,
                      
                    })
                  
                   }

            return (
                    <div className="sign-up-section">
                        <Navigation/>
                        <div className="container">
                            <div className="row my-5">
                                <div className="col-md-5">
                                    <div className="card bg-light ms-auto my-3 p-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="p-4">
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='name' type="text" placeholder="Your Name" required/> 
                                                </div>
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='email' type="text" placeholder="Email"  required/>
                                            </div>
                                                <div className="py-2">
                                                    <input onBlur={handleBlur} className="form-control" name='password' type="password" placeholder="Password" required/>
                                                </div>
                                                <p className='text-danger'>{user.error}</p>
                                                <div className="py-3 text-center">
                                                    <button className='btn button text-white w-100'>Sign Up</button>
                                                    <p className='text-center m-auto pt-4'>Already have an account? <Link to="/login">Login</Link></p>
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

export default SignUp;