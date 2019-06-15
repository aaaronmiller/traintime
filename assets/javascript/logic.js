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

  
  
  
  // 2. Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
    
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirstDepartureTime = $("#first-departure-time-input").val().trim();
    //   var trainFirstDepartureTime = moment($("#first-departure-time-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();
    var trainNextArrival = 0;
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
  var trainFrequency = parseInt(childSnapshot.val().frequency);
  
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
    // var trainMinutesAway = 50;
    // console.log(trainMinutesAway);
    
    // Calculate the total billed rate  
    // var empBilled = empMonths * trainFrequency;
    // var trainNextArrival = "12:00";
    // console.log(trainNextArrival);
    
    // figure out current Time 0010
    var currentTime = (new Date());
    currentTime = currentTime + "";
    console.log(currentTime);
    
    var aa = currentTime.charAt(16);
    var bb = currentTime.charAt(17);
    var cc = currentTime.charAt(19);
    var dd = currentTime.charAt(20);
    var ee = cc + dd;
    var ff = parseInt(ee);
    var gg = aa + bb;
    console.log(gg);
    var hh = parseInt(gg);
    console.log("hr:" + hh);
    console.log("min:" + ff);
    // convert current time to total minutes (hh * 60 + mm)
    currentTimeInMin = (hh * 60) + ff;
    console.log("current time in min" + currentTimeInMin);
    
    
    
    var a = trainFirstDepartureTime.charAt(0);
    var b = trainFirstDepartureTime.charAt(1);
    var q = trainFirstDepartureTime.charAt(3);
    var w = trainFirstDepartureTime.charAt(4);
    var c = a + b;
    var d = q + w;
    departureInMin = ((parseInt(c)) * 60) + (parseInt(d));
    
    console.log("first depart time in min=" + departureInMin);  
    // is time less than first train departure 0010 < 0030, dif = 0020
   var solved = false;
   var nextTrainDeparture = departureInMin + trainFrequency;
   for (i = 0; i < 100; i++) {

     console.log(nextTrainDeparture);
     console.log(solved);
     if (currentTimeInMin < departureInMin && solved === false) {
       var trainMinutesAway = departureInMin - currentTimeInMin;
       console.log(trainMinutesAway);
       nextTrainInMin = currentTimeInMin + trainFrequency;
       nextTrainHrs = nextTrainInMin / 60;
       console.log("time till next train:" + nextTrainHrs);
       var trainNextArrival = trainFirstDepartureTime;
       console.log(trainNextArrival);
       solved = true;
      }
      if (currentTimeInMin < nextTrainDeparture && solved === false) {
        trainMinutesAway = (nextTrainDeparture - currentTimeInMin);
        nextTrainInMin = trainMinutesAway + currentTimeInMin;
        qqq = nextTrainInMin * 60000;
        trainNextArrival = moment.utc(qqq).format('h:mm');  // "1:00 am" 
        console.log("time till next train:" + trainMinutesAway + ", i =" + i);
        solved = true;
      }
    nextTrainDeparture = nextTrainDeparture + trainFrequency;
    console.log("iteration #:" + i);
    }

      
    //  yes ? what is diff between times 
    // no? add interval to departure time
    //  check if current time is less than new value
    // no? iterate, yes what is difference between time and variable time
    
    
    
      // console.log(new Date());
      // console.log(new Time());
      //  var TimeNow = (new Time());
      //  var convertedDate = moment(TimeNow);
      // console.log(convertedDate.format("hh:mm"));
      // console.log(TimeNow);    
    // Create the new row
    // console.log(trainFrequency);
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(trainNextArrival),
      $("<td>").text(trainMinutesAway),
      );
      
      // Append the new row to the table
      $("#train-table > tbody").append(newRow);
    });