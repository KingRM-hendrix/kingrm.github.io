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

    $("#switch-catboy").click(function() {
        $.ajax({
            dataType: "json",
            url: "https://nekos.best/api/v2/neko.json",
            success: function(results) {
                console.log(results["url"]);
                if (results["url"].endsWith(".mp4")) {
                 $('#catboy').attr("src", "images/blank.png");
                } else {
                    $('#catboy').attr("src", results["url"]);
                }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
        })
    })
})