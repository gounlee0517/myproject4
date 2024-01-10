import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDoSBerh5q3neenMeDD-jd_De_ZauKpvEw',
    authDomain: 'myproject3-249e6.firebaseapp.com',
    projectId: 'myproject3-249e6',
    storageBucket: 'myproject3-249e6.appspot.com',
    messagingSenderId: '602105101742',
    appId: '1:602105101742:web:4110d2168e9348f2f1dc3f',
    measurementId: 'G-MW34Q98TY6',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
