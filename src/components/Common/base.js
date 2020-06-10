import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2GegtR-0kfoOFeMeRbCph6MWAxUJeCg4",
    authDomain: "tueminhbookstore.firebaseapp.com",
    databaseURL: "https://tueminhbookstore.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp};
export default base;
