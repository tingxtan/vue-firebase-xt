import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAU0la7BltlFHb1K-j8AkBezzgDIDJ5xmY",
  authDomain: "fir-a94dc.firebaseapp.com",
  databaseURL: "https://fir-a94dc.firebaseio.com",
  projectId: "fir-a94dc",
  storageBucket: "fir-a94dc.appspot.com",
  messagingSenderId: "758498280643",
  appId: "1:758498280643:web:9dd7c6782eb9627620ce76",
  measurementId: "G-ST52LQ5VKE"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }