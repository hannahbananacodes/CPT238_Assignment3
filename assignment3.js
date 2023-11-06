var pic = document.createElement("img");
pic.setAttribute("src", "jquery_cover.jpg");

$(document).ready(function() {
    // on click of format table 
    $(".format").click(function() {
        $("th").addClass("header");
        $("tr:nth-of-type(odd)").addClass("altrow");
    });

    // on click of add image and change size
    $(".image").click(function() {
        document.getElementById("myImage").appendChild(pic);
        $("img").mouseenter(function() {
            $("img").addClass("doublesize");
        });
        $("img").mouseleave(function() {
            pic.classList.remove("doublesize");
        });
    });

    // on click of borders
    $(".borders").click(function() {
        $("div").addClass("enclose");
    });

});
