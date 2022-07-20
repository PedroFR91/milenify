// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwaVP27nJ0JplwDk_UDLOGGuL3wZClWyU',
  authDomain: 'cedar-oath-353415.firebaseapp.com',
  projectId: 'cedar-oath-353415',
  storageBucket: 'cedar-oath-353415.appspot.com',
  messagingSenderId: '891700570851',
  appId: '1:891700570851:web:e8740b37068250a4d433d6',
  measurementId: 'G-DPSDD7BZ35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
