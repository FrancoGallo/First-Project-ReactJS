// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTSMGzZzRMO8NGsNXyUuO5VAtGqA0jIvw",
  authDomain: "first-project-reactjs.firebaseapp.com",
  projectId: "first-project-reactjs",
  storageBucket: "first-project-reactjs.appspot.com",
  messagingSenderId: "435854633228",
  appId: "1:435854633228:web:62d9c01357c7f00869c129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}