/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function() {
    $('#dune-quote-button').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://dune-api-a4iq.onrender.com/quotes/1",
            method: "GET",
            success: function(results) {
            console.log(results[0]["quote"]);
            $('#dune-quote').text(results[0]["quote"]);
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
        });
    });
    $('#kanye-quote-button').click(function() {
        $.ajax({
            dataType: "json",
            url: "https://api.kanye.rest/",
            success: function(results) {
                console.log(results["quote"]);
                $('#kanye-quote').text(results["quote"]);
            },
            error: function(xhr,status,error) {
                console.log(error)
            }
        });
    });
});