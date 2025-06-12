// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgl9MsrBH92LaVMdqZiLhW7yPzG4l8-lU",
  authDomain: "projeto-boer-deb39.firebaseapp.com",
  projectId: "projeto-boer-deb39",
  storageBucket: "projeto-boer-deb39.firebasestorage.app",
  messagingSenderId: "540872312679",
  appId: "1:540872312679:web:5f368031537172a609d1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializando e exportando o serviço de autenticação
export const auth = getAuth(app);

// Exportando a instância do app para uso em outros componentes
export default app;
