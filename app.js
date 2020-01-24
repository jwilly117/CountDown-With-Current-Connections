
// Test
console.log("This is a console test");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDKn1ffRT-0K5JpwhjtWKwBgyPStv8rihE",
    authDomain: "clickmonitor-d53e1.firebaseapp.com",
    databaseURL: "https://clickmonitor-d53e1.firebaseio.com",
    projectId: "clickmonitor-d53e1",
    storageBucket: "clickmonitor-d53e1.appspot.com",
    messagingSenderId: "879460493695",
    appId: "1:879460493695:web:c52cc0e0a8ef95b1f7924a",
    measurementId: "G-EXLPYXHKR7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();

  // Initialize the Local Variables
  var initialValue = 100;
  var clickCounter = initialValue;

  database.ref("/clicks").on("value", function(snapshot){

    console.log(snapshot.val());

    // Change the HTML to reflect the local value in firebase
    // clickCounter = snapshot.val().clickCount;




  }, function(err) {
      console.log("The firebase read failed, error: " + err);
  })

    // Create a jquery call for when a user clicks the clik button
    $("#click-button").on("click", function(){

        // Reduce the click counter
        clickCounter--;

        // Alert the user if they won

        // Save new value to firebase
        database.ref("/clicks").set({
            clickCount: clickCounter
        });

    })