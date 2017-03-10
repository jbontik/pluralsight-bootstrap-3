(function() {
    "use strict";

    var $pickbutton = $("#pickButton");

$("#reasonDropdown").find("li a").click(function() {

    var $reason = $(this).text();
    $pickbutton.text($reason);
})
})()