  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDdNMfxTPLre_6vh4-i5EQd2Y4rm9yewII",
    authDomain: "traintime-2l33t4u.firebaseapp.com",
    databaseURL: "https://traintime-2l33t4u.firebaseio.com",
    projectId: "traintime-2l33t4u",
    storageBucket: "traintime-2l33t4u.appspot.com",
    messagingSenderId: "331104113713",
    appId: "1:331104113713:web:edc23362ac6dbfe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFirstDepartureTime = $("#first-departure-time-input").val().trim();
//   var trainFirstDepartureTime = moment($("#first-departure-time-input").val().trim(), "HH:mm").format("X");
  var trainFrequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainFirstDepartureTime,
    frequency: trainFrequency
  };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);   
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-departure-time-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstDepartureTime = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().frequency;
  
    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirstDepartureTime);   
    console.log(trainFrequency);
    
    // Prettify the train start
    // var trainFirstDepartureTimePretty = moment.unix(trainFirstDepartureTime).format("HH:mm");
    
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    // var empMonths = moment().diff(moment(trainFirstDepartureTime, "X"), "months");
    var trainMinutesAway = 50;
    console.log(trainMinutesAway);
    
    // Calculate the total billed rate
    // var empBilled = empMonths * trainFrequency;
    var trainNextArrival = "12:00";
    console.log(trainNextArrival);
    
    // Create the new row
    // console.log(trainFrequency);
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(trainMinutesAway),
        $("<td>").text(trainNextArrival),
        );
        
        // Append the new row to the table
        $("#train-table > tbody").append(newRow);
    });