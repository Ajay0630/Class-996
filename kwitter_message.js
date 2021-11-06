
const firebaseConfig = {
      apiKey: "AIzaSyBLeYFXIY84O74i46AGLnWX0D7jS9o_ibM",
      authDomain: "kwitter-2e680.firebaseapp.com",
      databaseURL: "https://kwitter-2e680-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e680",
      storageBucket: "kwitter-2e680.appspot.com",
      messagingSenderId: "428623542676",
      appId: "1:428623542676:web:046b9ab7ff19f968a4f781"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userthename = localStorage.getItem("username");
roomthename = localStorage.getItem("roomname");

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
function send_the_message_into_the_room_in_one_second() {
      msg = document.getElementById("message").value;
      firebase.database().ref(roomthename).push({name : userthename, message : msg, like : 0});
      document.getElementById("message").value = null;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
