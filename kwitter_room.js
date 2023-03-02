
//AÑADE TUS ENLACES DE FIREBASE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCqEfAjwb1M0K7nlWIvRLi8Cts8SJB5SiU",
      authDomain: "kwitter-7dc07.firebaseapp.com",
      databaseURL: "https://kwitter-7dc07-default-rtdb.firebaseio.com",
      projectId: "kwitter-7dc07",
      storageBucket: "kwitter-7dc07.appspot.com",
      messagingSenderId: "359350011677",
      appId: "1:359350011677:web:7583be130f6213a04e03f4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
console.log(user_name);
    document.getElementById("user_name").innerHTML="¡hola " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
