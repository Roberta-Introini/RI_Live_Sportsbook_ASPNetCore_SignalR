"use strict";

 
// Initialize the SignalR client
var connection = new signalR.HubConnectionBuilder()
    .withUrl('/livesportboardhub')
    .build();


//Disable the send button until connection is established.
//document.getElementById("sendButton").disabled = true;

//connection.on("MatchStarted", function (hometeam) {

//   // var li = document.createElement("li");
//   // document.getElementById("gameeventsList").appendChild(li);



//    // Now, you can call the function and append the resulting table element wherever you want:
//    // For example:
//    document.body.appendChild(createMatchRow('00:00', 'HomeTeam', 'AwayTeam', 1));

// //   li.textContent = html + `${hometeam} - ${gameevent}  0 - 0`;
// // li.innerHTML = html;  
//});
function createMatchRow(strtime, hometeam, gameevent, matchId = 0) {
    let table = document.createElement('table');

    let tr = document.createElement('tr');
    tr.setAttribute('data-match-id', matchId);

    let td1 = document.createElement('td');
    let b = document.createElement('b');
    let span1 = document.createElement('span');
    span1.classList.add('timer');
    span1.textContent = strtime;
    b.appendChild(span1);
    td1.appendChild(b);
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    let span2 = document.createElement('span');
    span2.classList.add('team-name');
    span2.textContent = hometeam;
    td2.appendChild(span2);
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    let input1 = document.createElement('input');
    input1.type = 'button';
    input1.value = '0';
    input1.classList.add('btn', 'btn-success');
    input1.setAttribute('data-match-id', matchId);
    input1.setAttribute('data-team-id', hometeam);
    input1.onclick = function () { addGoal(this); };
    td3.appendChild(input1);
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    let span3 = document.createElement('span');
    span3.classList.add('team-separator');
    span3.textContent = ' — ';
    td4.appendChild(span3);
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    let span4 = document.createElement('span');
    span4.classList.add('team-name');
    span4.textContent = gameevent;
    td5.appendChild(span4);
    tr.appendChild(td5);

    let td6 = document.createElement('td');
    let input2 = document.createElement('input');
    input2.type = 'button';
    input2.value = '0';
    input2.classList.add('btn', 'btn-success');
    input2.setAttribute('data-match-id', matchId);
    input2.setAttribute('data-team-id', gameevent);
    input2.onclick = function () { addGoal(this); };
    td6.appendChild(input2);
    tr.appendChild(td6);

    table.appendChild(tr);
    return table;
}

//connection.on("ScoreUpdate", function (param1, param2, param3) {
//    // Your code to handle the "NewFunctionName" event here
//    // You can access the parameters (param1, param2, param3) passed from the server
//    console.log("Received NewFunctionName event with parameters:", param1, param2, param3);
//});


// Start the connection only if it's in the 'Disconnected' state
if (connection.state === signalR.HubConnectionState.Disconnected) {
    connection.start()
        .then((function () {
           // document.getElementById("sendButton").disabled = false;
        }))
        .catch((error) => {
            console.error('Error starting HubConnection:', error);
        });
} else {
    console.log('HubConnection is not in the Disconnected state. It may already be started or in a different state.');
}

 
document.getElementById("sendButton").addEventListener("click", function (event) {
    //var hometeam = document.getElementById("hometeamInput").value;
    //var gameevent = document.getElementById("gameeventInput").value;
  //  alert(connection.state);

    if (connection.state === signalR.HubConnectionState.Disconnected) {
        connection.start()
            .then((function () {
            //    document.getElementById("sendButton").disabled = false;
            }))
            .catch((error) => {
                console.error('Error starting HubConnection:', error);
            });
    } else {
        console.log('HubConnection is not in the Disconnected state. It may already be started or in a different state.');
    }

    //connection.invoke("StartMatch", 'roma', 'inter' ).catch(function (err) {
    //    return console.error(err.toString());
    //});
    event.preventDefault();
});


//document.getElementById("addGoal").addEventListener("click", function (event) {
//    var data =
//    {
//        matchId: $(element).attr("data-match-id"),
//        teamId: $(element).attr("data-team-id")
//    }
//    //connection.invoke("UpdateScore", hometeam, gameevent).catch(function (err) {
//    //    return console.error(err.toString());
//    //});
//    event.preventDefault();
//});


 
function addGoal(element) {
    var data =
    {
        matchId: $(element).attr("data-match-id"),
        teamId: $(element).attr("data-team-id"), 
        pairScore: 0,
        hometeamScore: $(element).value,
        awayteamScore: $(element).value
    }
    //alert(data.matchId);

       ////3. Update score. Receiving the pair score; home team score and away team score updates a
       // //game score.
    //connection.invoke("ScoreUpdate", data.matchId, data.hometeamScore, data.hometeamScore).catch(function (err) {
    //    return console.error(err.toString());
    //});
    event.preventDefault();
}

//connection.onclose((error) => {
//    console.error("Connection closed with error: " + error);
//    alert("Connection closed with error: " + error);
//});


if (connection.state === signalR.HubConnectionState.Disconnected) {
    connection.start()
        .then((function () {
            document.getElementById("sendButton").disabled = false;
        }))
        .catch((error) => {
            console.error('Error starting HubConnection:', error);
        });
} else {
    console.log(connection.state);
}
