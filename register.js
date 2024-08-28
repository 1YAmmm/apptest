import { FirebaseConn } from "./FBFunCon.js";

const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const username = document.getElementById("userInput");
const ID = document.getElementById("userID");
const password = document.getElementById("passInput");
const submit = document.getElementById("sub_btn");

submit.addEventListener("click",e=>{
    const AppUser = new FirebaseConn(ID.value,name.value,email.value,username.value,password.value);
    AppUser.RegisterUser(name.value,email.value,username.value);
})