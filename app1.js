//import firebase from "firebase/app"
//4 Read from database
document.addEventListener('DOMContentLoaded', function() {
    let db = firebase.database().ref("users")

    let heading = document.getElementById("ItemsInDB")

    
});
var itemKey = ""

//2 Write to database
function ContactForm(){
    let form_name = document.getElementById("name")
    let form_age = document.getElementById("age")
    let form_gender = document.getElementById("gender")

    let db = firebase.database().ref().child('users')


    //Set fields to allow user to update recent information
    LinkInfo(form_name.value,form_age.value,form_gender.value)
}
//2.5
function LinkInfo(name, age, gender){
    let form_name = document.getElementById("updName")
    let form_age = document.getElementById("updAge")
    let form_gender = document.getElementById("updGender")

    form_name.value = name
    form_age.value = age
    form_gender.value = gender

}
//3 Update database
function UpdateDB(){
    let form_name = document.getElementById("updName")
    let form_age = document.getElementById("updAge")
    let form_gender = document.getElementById("updGender")

    let db = firebase.database().ref()

   
}

//1 Google authorization
function googleLogin(){
    
}