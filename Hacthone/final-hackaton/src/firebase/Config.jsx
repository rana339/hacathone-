import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCFZMhQM8V3eEFBrXTSYsIbQsoAcLVpPC4",
  authDomain: "final-task-65df2.firebaseapp.com",
  projectId: "final-task-65df2",
  storageBucket: "final-task-65df2.appspot.com",
  messagingSenderId: "621759123929",
  appId: "1:621759123929:web:220d09ed878c79d54589c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const FirebaseStorage = getStorage(app);
export { auth, db,FirebaseStorage }