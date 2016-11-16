/*   Name: Yusuf Yildiz
     Email: GUI I
     Date: November 11, 2016
     Assignment No. 7
     This webpage allows the user to create a dynamic multiplication table.
     */

$(document).ready(function(){
    $("#inputs").validate({
        rules: {
            // Make sure that the first input isn't bigger than the second
            first: {
                required: true,
                digits: true,
                range: [0, parseInt($("#second").val())]
            },
            // Make sure that the second input is bigger than the first
            second: {
                required: true,
                digits: true,
                range: [parseInt($("#first").val()), Number.MAX_SAFE_INTEGER]
            },
            // Make sure that the third input isn't bigger than the fourth
            third: {
                required: true,
                digits: true,
                range: [0, parseInt($("#fourth").val())]
            },
            // Make sure that the fourth input is bigger than the third
            fourth: {
                required: true,
                digits: true,
                range: [parseInt($("#third").val()), Number.MAX_SAFE_INTEGER]

            }
        }
    });
    // Stop the default behavior of the submit button
    $("#inputs").on("submit", function() {
        return false;
    });

    $("#inputs .btn").click(function() {
        // Make sure that all inputs are valid before continuing
        if(!$("#inputs").valid()) {
            return;
        }


        var first = parseInt($("#first").val());
        var second = parseInt($("#second").val());
        var third = parseInt($("#third").val());
        var fourth = parseInt($("#fourth").val());

        // Remove the previous table since we want a fresh table each time
        $(".table table").remove();

        // Create out table
        $(".table").append("<table>");
        var table = $("table");


        for(i = first-1; i <= second; i++) {
            // Create the rows each iteration
            var tr = $("<tr>");
            for(j = third-1; j <= fourth; j++) {
                var td = "<td>" + i*j + "</td>"
                // If it's the first block, leave it blank
                if(i == first-1 && j == third-1) {
                    var td = "<td></td>";
                }
                // if we're creating a row, fill that td with j
                else if(i == first -1) {
                    var td = "<td>" + j + "</td>"
                }
                //if were creating a column, fill that td with i
                else if(j == third -1) {
                    var td = "<td>" + i + "</td>"
                }
                tr.append(td);
            }
        table.append(tr);
        }
    });

});
