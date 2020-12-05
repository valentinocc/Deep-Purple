import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_x2jZqt0E5ZRt9gAbXe1Z4Mf-kFz_l50",
    authDomain: "deep-purple-725cc.firebaseapp.com",
    databaseURL: "https://deep-purple-725cc.firebaseio.com",
    projectId: "deep-purple-725cc",
    storageBucket: "deep-purple-725cc.appspot.com",
    messagingSenderId: "250624387003",
    appId: "1:250624387003:web:6ac694b2f564ea9d74069e",
    measurementId: "G-93PG8JNS04"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, githubAuthProvider, database as default };
//firebase.database().ref().set({
//  name: 'Val Christian'
//});

