import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.confiq";


export const initializeAppFrameWork = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}


export const handleGoggleSignIn = () => {
    const goggleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
    .signInWithPopup(goggleProvider)
    .then(result => {
      const{displayName, email, photoURL} = result.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
      return signInUser;
    })
    .catch(error => {
      console.log(error)
      console.log(error.massage);
    })
  }
  export  const handleGoogleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      return signOutUser;
    })
    .catch(err => {
      console.log(err);
    })
  }

  export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;
      user.success = true;
      return user;
  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

    });

  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      updateUserName(name);
      return newUser;
  })
  .catch((error) => {
    const newUser = {}
    var errorCode = error.code;
    var errorMessage = error.message;
    newUser.error = errorCode && errorMessage;
    newUser.success = false;
    return newUser;
  });
  }

  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      return newUser;
      
  })
  .catch((error) => {
    const newUser = {};
    var errorCode = error.code;
    var errorMessage = error.message;
    newUser.error = errorCode && errorMessage;
    newUser.success = false;
    return newUser;
  });
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      
    }).then(function() {
      console.log('user name update successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }