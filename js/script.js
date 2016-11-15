$(document).ready(function(){
    $("#inputs").validate({
        rules: {
            first: {
                required: true,
                digits: true,
                range: [0, parseInt($("#second").val())]
            },
            second: {
                required: true,
                digits: true,
                range: [parseInt($("#first").val()), Number.MAX_SAFE_INTEGER]
            },
            third: {
                required: true,
                digits: true,
                range: [0, parseInt($("#fourth").val())]
            },
            fourth: {
                required: true,
                digits: true,
                range: [parseInt($("#third").val()), Number.MAX_SAFE_INTEGER]

            }
        }
    });
    $("#inputs").on("submit", function() {
        return false;
    });
    $("#inputs .btn").click(function() {
        if(!$("#inputs").valid()) {
            return;
        }
        var first = parseInt($("#first").val());
        var second = parseInt($("#second").val());
        var third = parseInt($("#third").val());
        var fourth = parseInt($("#fourth").val());

        // Remove the previous table since we want a fresh table each time
        $(".table table").remove();

        // Hide popus if they were showing
        $(".popup").hide();
        $(".popup-range").hide();

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
