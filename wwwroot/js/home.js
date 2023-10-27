 
 

function StartGamxxxe(zzz) {
    var html = "";
    $("#listMatches").html("");


    html += "<tr data-match-id='" +   "'>";

    html += "<td>";

    html += "<span class='team-name'>" + zzz + "</span>";
    html += "</td>";


    html += "</tr>";

    $("#listMatches").append(html);
}



function addGoal(element) {
    var data =
    {
        matchId: $(element).attr("data-match-id"),
        teamId: $(element).attr("data-team-id")
    }

}

//function bindMatches(matches) {
//    var html = "";
//    $("#listMatches").html("");
//    $.each(matches,
//        function (index, match) {
//            html += "<tr data-match-id='" + match.id + "'>";

//            html += "<td>";
//            html += "<img class='team-logo' src='/images/" + match.team1Logo + "'/>";
//            html += "<span class='team-name'>" + match.team1Name + "</span>";
//            html += "</td>";

//            html += "<td>";
//            html += "<span data-team-id='" + match.team1Id + "' class='team-goals'>" + match.team1Goals + "</span>";
//            html += "</td>";

//            html += "<td>";
//            html += "<span class='team-separator'> &mdash; </span>";
//            html += "</td>";

//            html += "<td>";
//            html += "<span data-team-id='" + match.team2Id + "' class='team-goals'>" + match.team2Goals + "</span>";
//            html += "</td>";

//            html += "<td>";
//            html += "<img class='team-logo' src='/images/" + match.team2Logo + "'/>";
//            html += "<span class='team-name'>" + match.team2Name + "</span>";
//            html += "</td>";

//            html += "</tr>";
//        });
//    $("#listMatches").append(html);
//}

//connection.on("RefreshMatchCenter", function (match) {
//    loadMatches();
//});

