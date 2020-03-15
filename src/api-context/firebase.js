import * as firebase from "firebase";

class FirebaseApi{
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyBhQexwh3mFeWnJlr86MWo1k_kyL3aFR6s",
            authDomain: "todonotes-75606.firebaseapp.com",
            databaseURL: "https://todonotes-75606.firebaseio.com",
            projectId: "todonotes-75606",
            storageBucket: "todonotes-75606.appspot.com",
            messagingSenderId: "603485504020",
            appId: "1:603485504020:web:b08b8e2f0f97d9453c9d01"
        };
    }
    initializeUser (config = this.firebaseConfig) {
        firebase.initializeApp(config)
    }
}

export default FirebaseApi
