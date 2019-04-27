import app from 'firebase/app';

// Initialize Firebase

const config = {
    apiKey: "AIzaSyAp0uwz9RY1CfaVoAzXAkgBPvsl4T91dr4",
    authDomain: "smartrefrigplus.firebaseapp.com",
    databaseURL: "https://smartrefrigplus.firebaseio.com",
    projectId: "smartrefrigplus",
    storageBucket: "smartrefrigplus.appspot.com",
    messagingSenderId: "836782487281"
}

class firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export default firebase