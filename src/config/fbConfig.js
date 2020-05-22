import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyBA_xuiaxh7ECEy3St-8xlwHjnUPTxeBoU",
    authDomain: "saurabhs-plan.firebaseapp.com",
    databaseURL: "https://saurabhs-plan.firebaseio.com",
    projectId: "saurabhs-plan",
    storageBucket: "",
    messagingSenderId: "778352009021",
    appId: "1:778352009021:web:9d150ba78d8d67a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
//  security rules for firebase
//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /projects/{project} {
//       allow read, write: if request.auth.uid != null
//     }
//     match /users/{userId}{
//     allow create
//     allow read: if request.auth.uid != null
//     allow write: if request.auth.uid == userId
//     }
//   }
// }