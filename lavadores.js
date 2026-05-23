import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCqsvVMtUQMSdiUDDwL3USbmW5ASBYBmLc",
  authDomain: "lavador-15703.firebaseapp.com",
  projectId: "lavador-15703",
  storageBucket: "lavador-15703.firebasestorage.app",
  messagingSenderId: "545219546344",
  appId: "1:545219546344:web:328143a63a0b3d389a0d5d"
};

const app = initializeApp (firebaseConfig);
const db = getFirestore (app);

async function salvarLavador() {
    const nome = document.getElementById('nome').value;
    const classificacao = document.getElementById('classificacao').value;
   if (!nome) {
        alert('por favor, preencha o nome');
        return;
   }
   try {
        await addDoc(collection(db, 'lavadores'), { 
            nome: nome,
            classificacao: classificacao,
        });
        alert('lavador cadastrado com sucesso!');
        document.getElementById('nome').value = '';

   } catch(erro) {
        alert('erro ao cadastrar, verifique o console!');
        console.error('Erro ao salvar', error);
   }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('salvarBtn').addEventListener('click', (e) => { 
        e.preventDefault();
        salvarLavador();
    });
});
