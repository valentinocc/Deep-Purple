import { firebase, githubAuthProvider } from '../firebase/firebase';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
});

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(githubAuthProvider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            dispatch(setToken(token));
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};