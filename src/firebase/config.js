import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDuIFteR65VTvNWbXmFJVIAKRrgdiFMwwY",
	authDomain: "vue-firebase-site-ad4e6.firebaseapp.com",
	projectId: "vue-firebase-site-ad4e6",
	storageBucket: "vue-firebase-site-ad4e6.appspot.com",
	messagingSenderId: "736316672634",
	appId: "1:736316672634:web:fd7ecdee6f6bd7393249c3",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
