$(document).ready(function() {
    $("#switch-dog").click(function() {
        $.ajax({
            dataType: "json",
            url: "https://random.dog/woof.json",
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                 $('#dog').attr("src", "images/blank.png");
                } else {
                    $('#dog').attr("src", results["url"]);
                }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
        })
    })

    $("#switch-catgirl").click(function() {
        $.ajax({
            url: "https://nekos.best/api/v2/neko",
            method: "GET",
            dataType: "json",
            success: function(results) {
                console.log(results.results[0].url);
                if (results.results[0].url.endsWith(".mp4")) {
                 $('#catgirl').attr("src", "images/blank.png");
                } else {
                    $('#catgirl').attr("src", results.results[0].url);
                }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
        })
    })
})