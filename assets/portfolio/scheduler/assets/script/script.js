// Initialize Firebase 
window.onload = function(){
var index = 0;

var config = {
    apiKey: "AIzaSyCZswvWMe04KYH_XKRA1R2maGG-4B0pC14",
    authDomain: "train-scheduler-21e7b.firebaseapp.com",
    databaseURL: "https://train-scheduler-21e7b.firebaseio.com",
    projectId: "train-scheduler-21e7b",
    storageBucket: "",
    messagingSenderId: "90490777937"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  

  $("#submitbutton").on("click", function(){
      event.preventDefault();
      name = $("#input_name").val().trim();
      destination = $("#input_destination").val().trim();
      firsttime = $("#input_firsttime").val().trim();
      frequency = $("#input_frequency").val().trim();

      database.ref().push({
          name: name,
          destination: destination,
          firsttime: firsttime,
          frequency: frequency

        });
        $("#input_name").val("");
        $("#input_destination").val("");
        $("#input_firsttime").val("");
        $("#input_frequency").val("");

        return false;
  })

  database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {
        var removeButton = $("<button>").html("<span class='glyphicon glyphicon-remove'></span>").addClass("removeButton").attr("data-index", index).attr("data-key", childSnapshot.key);
  
        var firsttime = childSnapshot.val().firsttime;
        var tfrequency = parseInt(childSnapshot.val().frequency);
        var firsttrain = moment(firsttime, "HH:mm").subtract(1, "years");
        console.log(firsttrain);
        console.log(firsttime);
        var currentTime = moment();
        var currentTimeCalc = moment().subtract(1, "years");
        var difftime = moment().diff(moment(firsttrain), "minutes");
        var tremainder = difftime%tfrequency;
        var minutesremaining = tfrequency - tremainder;
        var nexttrain = moment().add(minutesremaining, "minutes").format ("hh:mm A");
        var beforeCalc = moment(firsttrain).diff(currentTimeCalc, "minutes");
        var beforeminutes = Math.ceil(moment.duration(beforeCalc).asMinutes());

        if ((currentTimeCalc - firsttrain) < 0) {
            nexttrain = childSnapshot.val().firsttime;;
            minutesremaining = beforeminutes;
          }
          else {
            nexttrain = moment().add(minutesremaining, "minutes").format("hh:mm A");
            minutesremaining = tfrequency - tremainder;
          }


          var newRow = $("<tr>");
          newRow.addClass("row-" + index);
            var cell1 = $("<td>").text(childSnapshot.val().name);
            var cell2 = $("<td>").text(childSnapshot.val().destination);
            var cell3 = $("<td>").text(firsttrain)
            var cell4 = $("<td>").text(childSnapshot.val().frequency);
            var cell5 = $("<td>").text(nexttrain);
            var cell6 = $("<td>").text(minutesremaining);
            var cell7 = $("<td>").append(removeButton);
      
            newRow
                .append(cell1)
                .append(cell2)
                .append(cell3)
                .append(cell4)
                .append(cell5)
                .append(cell6)
                .append(cell7);
      
           $("tbody").append(newRow);
           index++;
        })

        function removeRow () {
            $(".row-" + $(this).attr("data-index")).remove();
            database.ref().child($(this).attr("data-key")).remove();
          };
        
          function submitRow () {
            var newname = $(".newName").val().trim();
            var newdestination = $(".newDestination").val().trim();
            var newfrequency = $(".newFrequency").val().trim();
        
            database.ref().child($(this).attr("data-key")).child("name").set(newname);
            database.ref().child($(this).attr("data-key")).child("destination").set(newdestination);
            database.ref().child($(this).attr("data-key")).child("frequency").set(newfrequency);
        
            $(".row-" + $(this).attr("data-index")).children().eq(1).html(newname);
            $(".row-" + $(this).attr("data-index")).children().eq(2).html(newdestination);
            $(".row-" + $(this).attr("data-index")).children().eq(3).html(newfrequency);
            
          };
        
          $(document).on("click", ".removeButton", removeRow);
          $(document).on("click", ".submitButton", submitRow);
}
