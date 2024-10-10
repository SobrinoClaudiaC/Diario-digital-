// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// Autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firestore
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  onSnapshot,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3KRJxttd8eMEGtRAT76LYDSh4Y1Xdv20",
  authDomain: "diario-digital-ef5f2.firebaseapp.com",
  projectId: "diario-digital-ef5f2",
  storageBucket: "diario-digital-ef5f2.appspot.com",
  messagingSenderId: "72453176073",
  appId: "1:72453176073:web:21c7850d965659831ef1d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Inicializar Autenticacion de Firebase y obtener una referencia del servicio
export const auth = getAuth(app);
// Inicializar Firestore
export const db = getFirestore();

//* Operaciones CRUD:
// Crear tarea (Create)
export const createTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });
// Leer tarea (Read)
export const onGetTask = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
// Borrar tareas (Delete)
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
