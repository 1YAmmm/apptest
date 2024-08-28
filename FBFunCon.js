
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlt_lhpZDLN5l8faue3NvRd1NF6ArdDYI",
  authDomain: "testingapp-64468.firebaseapp.com",
  databaseURL: "https://testingapp-64468-default-rtdb.firebaseio.com",
  projectId: "testingapp-64468",
  storageBucket: "testingapp-64468.appspot.com",
  messagingSenderId: "808333397986",
  appId: "1:808333397986:web:757f3742167b5f51f1b3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const db = getDatabase();
const dbRef = ref(db);
// const name = document.getElementById("nameInput");
// const email = document.getElementById("emailInput");
// const username = document.getElementById("userInput");
// const ID = document.getElementById("userID");
// const password = document.getElementById("passInput");
// const submit = document.getElementById("sub_btn");

function Validation(name,email,username){
        let nameregex = /^[a-zA-Z]+$/;
        let emailregex = /^@\.com$/;
        let userregex = /^[a-zA-Z0-9]{5,}$/;

        if(!nameregex.test(name.value)){
            alert("Invalid Name");
            return false;
        }
        // if(!emailregex.test(email.value)){
        //     alert("Invalid Email Address");
        //     return false;
        // } 
        if(!userregex.test(username.value)){
            alert("Invalid username");
            return false;
        }
        return true;
}
function login(user){
    let keeloggedIn = document.getElementById('flexSwitchCheckChecked').checked;
    if(!keeloggedIn){

        sessionStorage.setItem('user',JSON.stringify(user));
        window.location="home.html";
    }else{
        localStorage.setItem('keeploggedIn','yes');
        localStorage.setItem('user',JSON.stringify(user));
        window.location='home.html';
    }
}
 export class FirebaseConn{
    constructor(ID,name,email,username,password){
        this.ID=ID;
        this.name=name;
        this.email=email;
        this.username=username;
        this.password=password;

    }

        RegisterUser(name,email,username){
            if(!Validation(name,email,username)){
                return;
            }
            
           
            get(child(dbRef,"UserLists/"+this.ID)).then((snapshot)=>{
                if(snapshot.exists()){
                    alert("Account Already Exist");
                }else{
                set(ref(db,"UserLists/"+this.ID),{
                        userID:this.ID,
                        fullname:this.name,
                        Email:this.email,
                        Username:this.username,
                        Password:this.password

                }).then(()=>{
                        alert("Success Registration");
                        window.location.href="login.html";
                }).catch((error)=>{
                        alert("Error:"+error);
                })
                }
            });
        }
        AuthenticationUser(){
           

            get(child(dbRef,"UserLists/"+this.ID)).then((snapshot)=>{
                if(snapshot.exists()){
                    
                    let dbpass = snapshot.val().Password;
                     console.log(dbpass);
                    if(this.password == dbpass){
                        login(snapshot.val());
                       
                    }else{
                        alert("Invalid login");
                    }
                }else{
                    alert("user does not exist");
                }
            });
        }
}
