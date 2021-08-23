import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBKlDxjiMF9_JfJMqaUnnDFxV2wipqMonQ",
    authDomain: "shopperbird-trial.firebaseapp.com",
    projectId: "shopperbird-trial",
    storageBucket: "shopperbird-trial.appspot.com",
    messagingSenderId: "131050988361",
    appId: "1:131050988361:web:6addbd3c98f1c862537098",
    measurementId: "G-FPLJJ5EDMN"
})

export const auth = app.auth()
export default app