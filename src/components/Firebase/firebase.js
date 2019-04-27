import * as firebase from 'firebase'
// Initialize Firebase
  // var REACT_APP_API_KEY = "AIzaSyAp0uwz9RY1CfaVoAzXAkgBPvsl4T91dr4";
  // var REACT_APP_AUTH_DOMAIN = "smartrefrigplus.firebaseapp.com"
  // var REACT_APP_DATABASE_URL = "https://smartrefrigplus.firebaseio.com"
  // var REACT_APP_PROJECT_ID = "smartrefrigplus"
  // var REACT_APP_STORAGE_BUCKET = "smartrefrigplus.appspot.com"
  // var REACT_APP_MESSAGING_SENDER_ID = "836782487281"

const config = {
  apiKey:"AIzaSyAp0uwz9RY1CfaVoAzXAkgBPvsl4T91dr4",
  authDomain: "smartrefrigplus.firebaseapp.com",
  databaseURL: "https://smartrefrigplus.firebaseio.com",
  projectId: "smartrefrigplus",
  storageBucket: "smartrefrigplus.appspot.com",
  messagingSenderId: "836782487281",
}

if(!firebase.apps.length) {   
  firebase.initializeApp(config)
}

const database = firebase.database()
const storage = firebase.storage()
// class Firebase {
//   constructor() {
//     app.initializeApp(config)
//     this.auth = app.auth();
//     this.db = app.database();
//   }
//   doCreateUserWithEmailAndPassword = (email, password) => {
//     this.auth.createUserWithEmailAndPassword(email, password);
//   };
//   doSignInWithEmailAndPassword = (email, password) => {
//     this.auth.signInWithEmailAndPassword(email, password);
//   };
//   doSignOut = () => this.auth.signOut()

//   // User API
//   user = uid => this.db.ref(`user/${uid}`);
//   users = () => this.db.ref('user');

//   // *** Merge Auth and DB User API *** //
//   onAuthUserListener = (next, fallback) => 
//     this.auth.onAuthStateChanged(authUser => {
//       if(authUser) {
//         this.user(authUser.uid)
//           .once('value')
//           .then(snapshot => {
//             const dbUser = snapshot.val()

//             //default empty roles
//             if(!dbUser.roles) {
//               dbUser.roles = {}
//             }

//             //merge auth and db user
//             authUser = {
//               uid: authUser.uid,
//               email: authUser.email,
//               ...dbUser,
//             };
//             next(authUser)
//           });
//       }
//       else {
//         fallback()
//       }
//     })
// }

export default firebase.auth()
export {database, storage}