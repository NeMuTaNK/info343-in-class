"use strict";
var myWidth = "480px";

$(document).ready(function() {
    // jQuery methods will go here
    // $(.btn-success, #test3").hide();
    $("ul li:first-child").mouseenter(function() {
        $("#test1").slideToggle(1000, function() {
            $("#test1").toggle();
        });
    });

// on click!
$(".btn-primary").click(function() {
    // alert("Text: " + $("#test1".text() );
    $("#test2").animate({
        height: "300px",
        width: myWidth
    }, 1000, function() {
            // $("#test2").addClass("bg-warning").text("Hello World");
            // alert("the div is now " + $("#test2").outerHeight() + " tall");
            $("main div").html("").css("width", myWidth).append("<div class='card-block'>");
            $(".card-block")
                .html("<h4 class='card-title'>Card Title</h4>")
                .append(
                    $("<p></p>")
                    .text("Card body text!")
                    .addClass("card-text")
                );
            $("#test1").animate({
                left: myWidth,
                top: "300px"
            }, 3000);
        });

        $("ul").children("li").addClass("bg-danger");
        $("ul").find("a").addClass("text-white"); // Find all a's with this ul specifically

    });

    $("#test3").hide();
    $("[name='alternate']").mousedown(function() {
        $("#test3").show();
    });

    $("[name='alternate']").mouseup(function() {
        $("#test3").hide();
        $(this).animate({
            width: myWidth
        });
    });

});