import { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJgCglI9UqQg6Y9tWlR-LQlB-iXCBDxOw',
  authDomain: 'learn-lingo-54f49.firebaseapp.com',
  projectId: 'learn-lingo-54f49',
  storageBucket: 'learn-lingo-54f49.appspot.com',
  messagingSenderId: '353984341419',
  appId: '1:353984341419:web:4350b2c3b17c4048689eee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
