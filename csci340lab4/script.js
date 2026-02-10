$(document).ready(function() {
    $.ajax({
        dataType: "json",
        url: "https://cataas.com/doc.json",
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