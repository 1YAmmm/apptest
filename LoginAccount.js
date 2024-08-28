import { FirebaseConn } from "./FBFunCon.js";


const ID = document.getElementById("userID");
const pass = document.getElementById("passInput");
const submit = document.getElementById("sub_btn");

submit.addEventListener("click",e=>{
    const AppUser = new FirebaseConn(ID.value,"","","",pass.value);
    AppUser.AuthenticationUser();
})