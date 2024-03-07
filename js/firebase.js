// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCYikn_X8PFvidrgffCr5ny3JXas0MoAU",
  authDomain: "blogging-website-574a1.firebaseapp.com",
  projectId: "blogging-website-574a1",
  storageBucket: "blogging-website-574a1.appspot.com",
  messagingSenderId: "446114234795",
  appId: "1:446114234795:web:82253c97eeef25bd2712ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export Firebase dependencies
export { db, auth };
const logoutUser=()=>{
  auth.signOut();
  location.reload();
}
 
   