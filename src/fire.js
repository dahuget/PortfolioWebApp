import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqwkiUakt2JyIL-gpZbfsTWiB1j-Ki3jQ",
  authDomain: "danahuget-portfolio.firebaseapp.com",
  databaseURL: "https://danahuget-portfolio.firebaseio.com",
  projectId: "danahuget-portfolio",
  storageBucket: "danahuget-portfolio.appspot.com",
  messagingSenderId: "655414612483",
  appId: "1:655414612483:web:df1b6609c5dcca41"
};
  // Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);
export default fire;