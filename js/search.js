function load_list() {
    $.getJSON('spotify.json', function (data) {
        const x = [];
        for (i = 0; i < data.allPlaylists.length; i++) {
            var listName = data.allPlaylists[i].name;
            x.push(listName);
        }

        for (i = 0; i < x.length; i++) {
            7
            var tblRow = "<li class=" + "\"yourplaylist\">" + x[i] + "</li>";
            $("#myVerySpecialDiv ul").prepend(tblRow);
            // data.allPlaylists[i].style.display = "none";
        }
    });
}

function search_process() {
    $.getJSON('spotify.json', function (data) {
        let input = document.getElementById('searchbar').value
        input = input.toLowerCase();
        $("#myVerySpecialDiv ul").empty();
        if(input==""){
            load_list();
            return;
        }
        const x = [];
        for (i = 0; i < data.allPlaylists.length; i++) {
            var listName = data.allPlaylists[i].name;
            x.push(listName);
        }
        console.log(x);

        for (i = 0; i < x.length; i++) {
            
            if (x[i].toLowerCase().includes(input)) {
                var tblRow = "<li class=" + "\"yourplaylist\">" + x[i] + "</li>";
                $("#myVerySpecialDiv ul").prepend(tblRow);
                // data.allPlaylists[i].style.display = "none";
            }
            else {
                // data.allPlaylists[i].style.display = "list-item";
            }
        }
    });
}

// $.getJSON('spotify.json', function(data) {
//     $.each(data.person, function(i, f) {
//        var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
//         "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
//         $(tblRow).appendTo("#userdata tbody");
//   });

// });
// // console.log (myJson.allPlaylists[0]);
// $.getJSON('spotify.json', function(data) {
//     $.each(data.allPlaylists, function(i, f) {
//        var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
//         "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
//         $(tblRow).appendTo("#userdata tbody");
//   });

// });
// //