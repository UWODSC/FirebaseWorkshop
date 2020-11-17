//import firebase from "firebase/app"
//4 Read from database
document.addEventListener('DOMContentLoaded', function() {
    let db = firebase.database().ref("users")

    let heading = document.getElementById("ItemsInDB")

    // db.once('value').then(snapshot => {
    //     let users = 0

    //     users += snapshot.numChildren()
    //     users += snapshot.child(firebase.auth().currentUser.displayName).numChildren()

    //     heading.innerHTML = "Total registered users: " + users
    // })
    // db.on('value',snapshot => {
    //     let users = 0

    //     users += snapshot.numChildren()
    //     users += snapshot.child(firebase.auth().currentUser.displayName).numChildren()

    //     heading.innerHTML = "Total registered users: " + users
    // })
});
var itemKey = ""

//2 Write to database
function ContactForm(){
    let form_name = document.getElementById("name")
    let form_age = document.getElementById("age")
    let form_gender = document.getElementById("gender")

    let db = firebase.database().ref().child('users')

    //If user has already been authorized
    if(firebase.auth().currentUser != null){
        let displayName = firebase.auth().currentUser.displayName
        db = db.child(displayName)
    }

    itemKey = db.push({'name': form_name.value,'age': form_age.value,'gender':form_gender.value})

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

    let key = "/users/"
    //If user has been authorized, add their display name to the key 
    if(firebase.auth().currentUser != null){
        key = key + firebase.auth().currentUser.displayName
    }

    //Set key to most recently added user to be updated
    key = key  + "/" + itemKey.key
    let update = {}
    update[key] = {'name': form_name.value,'age': form_age.value,'gender':form_gender.value}
    
    db.update(update)
}

//1 Google authorization
function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user
        display = user.displayName
        alert(user.displayName)
    })
}