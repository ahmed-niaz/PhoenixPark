import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcYAo0mMtSSqw0cIzzKfl_8J2RJyq4m5w",
  authDomain: "phoenixpark-ea9e7.firebaseapp.com",
  projectId: "phoenixpark-ea9e7",
  storageBucket: "phoenixpark-ea9e7.appspot.com",
  messagingSenderId: "962083418309",
  appId: "1:962083418309:web:4e91b8423f6aedde4a40ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
