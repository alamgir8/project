import React from "react";
import { useForm } from "react-hook-form";
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.confiq";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;

    }).catch((error) => {
       var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
   
    });
  }
   
  return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className='form-box text-center my-5'>
                    <div className='mb-4'>
                        <input type='text' name="name"  ref={register} placeholder='Inter your name'  required/>
                    </div>
                    <div className='mb-4'>
                        <input type='email' name="email" ref={register} placeholder='Inter your email' required/>
                    </div>
                    <div className='mb-4'>
                        <input type='password' name="password" ref={register} placeholder='Inter your password' required/>
                    </div>
                    <div className='mb-4'>
                        <input type='password' name="confirm-password" ref={register} placeholder='Confirm your password' required/>
                    </div>
                    
                    <input type="submit" value='Sign Up'/>
                 </div>
            </form>
            <button className='btn btn-danger' onClick={handleGoogleSignIn}>Sign In by Google</button>
            
        </div>
  );
}

export default Login;
