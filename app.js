import { initializeApp} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {getFirestore, collection, addDoc} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqsvVMtUQMSdiUDDwL3USbmW5ASBYBmLc",
  authDomain: "lavador-15703.firebaseapp.com",
  projectId: "lavador-15703",
  storageBucket: "lavador-15703.firebasestorage.app",
  messagingSenderId: "545219546344",
  appId: "1:545219546344:web:328143a63a0b3d389a0d5d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvarCarro(){
    const placa = document.getElementById("placa").value;
    const modelo = document.getElementById("modelo").value;
    const tamanho = document.getElementById("tamanho").value;
    const msg = document.getElementById("msg");

    if (placa === "" || modelo === "") {
        msg.innerHTML = "Preencha todos os campos";
        msg.style.color = "red";
        return;
    }

    try {
        await addDoc(collection(db, "carros"), {
            placa: placa,
            modelo: modelo,
            tamanho: tamanho,
            dataHora: new Date()
        });
        msg.innerHTML = "Carro salvo com sucesso!";
        msg.style.color = "green";

        document.getElementById("placa").value = "";
        document.getElementById("modelo").value = "";

    } catch(e) {
        msg.innerHTML = "Erro ao salvar!";
        msg.style.color = "red";
        console.error("Erro ao adicionar carro ", e);
    }
}

document.getElementById("btnSalvar")
.addEventListener("click", salvarCarro);