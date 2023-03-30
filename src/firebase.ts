// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVlAcTvsgt5HpD50k1X7XTK3T_Hcf8Kk4',
  authDomain: 'technion-cs-hackathon-2023.firebaseapp.com',
  projectId: 'technion-cs-hackathon-2023',
  storageBucket: 'technion-cs-hackathon-2023.appspot.com',
  messagingSenderId: '772744252838',
  appId: '1:772744252838:web:ba870a6076bae29fa89367',
  measurementId: 'G-8VQXQ40MK1'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
