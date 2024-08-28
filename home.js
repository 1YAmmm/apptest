
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






function getUsername(){
    let keeploggedIn = localStorage.getItem("keeploggedIn");

    if(keeploggedIn == "yes"){
        currentUser = JSON.parse(localStorage.getItem('user'));

    }else{
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}
function signout(){
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keeploggedIn');
    window.location.href = "login.html";
}
let userlink = document.getElementById('userlink');
const ID = document.getElementById("userID");
const Date = document.getElementById("UserDate");
const Income = document.getElementById("UserIncome");
const Expense = document.getElementById("UserExpense");
const Allowance = document.getElementById("UserAllow");

const BtnCal = document.getElementById("btn_Cal");
var currentUser = null;

window.onload = function(){
    getUsername();
    if(currentUser == null){
        userlink.innerText =" create new account ma friend";
    }else{
        let AppUser=currentUser.userID;
        
        console.log(Allowance);
        userlink.innerText ="Current User:"+AppUser;
        console.log(AppUser);
                 BtnCal.addEventListener("click",e=>{
                    set(ref(db,"Transaction/"+AppUser+"/"+generateUUID()),{
                        Date:Date.value,
                        Income:Income.value,
                        Expense:Expense.value,
                        Allowance:0

                }).then(()=>{
                        alert("Data Added Successful");
                        
                }).catch((error)=>{
                        alert("Error:"+error);
                })
                 });   
               
               
        
       
    }
}
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
    }
// set(ref(db,"UserLists/"+AppUser.value +"/"+Date.value),{
    // Date:Date.value,
    // Income:Income.value,
    // Expense:Expense.value,
    // Allowance:Allowance

// }).then(()=>{
//     console.log(Income.value);
// alert("Data Added");
// }).catch((error)=>{
// alert("Error:"+error);
// })
