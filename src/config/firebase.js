import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCY6EKrpnKtLXIfFFL2EEf25vc7NW0nXfA",
  authDomain: "lunch-go-where-1514893968630.firebaseapp.com",
  databaseURL: "https://lunch-go-where-1514893968630.firebaseio.com",
  projectId: "lunch-go-where-1514893968630",
  storageBucket: "lunch-go-where-1514893968630.appspot.com",
  messagingSenderId: "555632314790"
};

firebase.initializeApp(config);

export default firebase;
