
   var firebaseConfig = {
    apiKey: "AIzaSyDUoi7e8NPslEQtKXWKsDZjBt_bSfbx3a8",
    authDomain: "kwitter-app-176d9.firebaseapp.com",
    databaseURL: "https://kwitter-app-176d9-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-176d9",
    storageBucket: "kwitter-app-176d9.appspot.com",
    messagingSenderId: "223964622926",
    appId: "1:223964622926:web:96910566db031ab463931f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });
}