
import { useContext, useState } from 'react';
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {createUserWithEmailAndPassword, handleFbSignIn, handleGoggleSignIn, handleGoogleSignOut, initializeAppFrameWork, signInWithEmailAndPassword} from "./LoginManager";




      function Login() {
        const [nUser, setNUser] = useState(false);
        const [user, setUser] = useState({
          isSignIn: false,
          name: '',
          email: '',
          photo: ''
        })
        

        initializeAppFrameWork();
        const [login, setLogin] = useContext(userContext);
        const history = useHistory();
        const location = useLocation();
        let { from } = location.state || { from: { pathname: "/" } };

        const googleSignIn = () => {
          handleGoggleSignIn()
          .then(res => {
            handleResponse(res, true)
          })
        }
        const googleSignOut = () => {
          handleGoogleSignOut()
          .then(res => {
            handleResponse(res, false)
          })
        }
      const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          handleResponse(res, true)
        })
      }
        

      const handleResponse = (res, redirect) => {
          setUser(res);
          setLogin(res);
          if (redirect) {
            history.replace(from);
          }
      }

        const handleBlur = (e) => {
          console.log(e.target.name, e.target.value);
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
        };
        const handleSubmit = (e) => {   
          if (nUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then(res => {
              handleResponse(res, true)
            }) 
        }

        if (!nUser && user.email && user.password) {
          signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            handleResponse(res, true)
          })
        }
        
          e.preventDefault();

        }
      
        return (
          <div>

            {
              user.isSignIn ? <button onClick={googleSignOut}>Sign Out</button> : <button onClick={googleSignIn}>Sign In By Google</button>
            }
            <button onClick={fbSignIn}>Sign In By Facebook</button>
            {
              user.isSignIn && <div>
                <p>Welcome, {user.name}</p>
                <p>Email : {user.email}</p>
                <img src={user.photo} alt=""/>
              </div>
            } <br/><br/><br/>
            <h2>Form Validation</h2>
            {/* <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Password : {user.password}</p> */}
            <form onSubmit={handleSubmit}>
              <input onChange={() => setNUser(!nUser)} type="checkbox" name="nUser" id=""/>
              <label htmlFor="nUser">Sign In For New User</label><br/><br/>
              {nUser && <input onBlur={handleBlur} type="text" name="name" id="" placeholder='input your name' required/>}<br/>
                <input onBlur={handleBlur} type="email" name="email" id="" placeholder='input your email' required/> <br/>
                <input onBlur={handleBlur} type="password" name="password" id="" placeholder='input your password' required/><br/><br/>
                <input type="submit" value={nUser ? "Sign Up" : "Sign In"}/>
            </form>
            <p style={{color: 'red'}}>{user.error}</p>
            {user.success && <p style={{color: 'green'}}>User {nUser ?'Created': 'Log In'} Successfully</p>}
          </div>
        );
      }

      export default Login;
