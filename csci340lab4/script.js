$(document).ready(function() {
    $.ajax({
        dataType: "html",
        url: "https://nekos.best/api/v2/neko",
        success: function(results) {
            if(results["url"].endsWith(".gif")) {
                $(".cat").attr("src","images/blank.png");
            } else {
                $(".cat").attr("src", results["url"]);
            }
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    })
})