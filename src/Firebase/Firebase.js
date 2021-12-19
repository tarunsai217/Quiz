import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-bTdHLkwDeef0Ddkmk7Gm64sMoR_-dFs",
    authDomain: "quiz-93db3.firebaseapp.com",
    projectId: "quiz-93db3",
    storageBucket: "quiz-93db3.appspot.com",
    messagingSenderId: "818856997882",
    appId: "1:818856997882:web:bf2e67e90f2ecc1b42ea43"
  };
  

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()