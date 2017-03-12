(function () {
    "use strict";

    var $pickButton = $("#pickButton");

    $("#reasonDropdown li a").on("click", function () {
        var reason = $(this).text();
        $pickButton.text(reason);
    });

    var $sentDialog = $("#sentDialog");
    var contactForm = $("#contactForm");
    contactForm.on("submit", function () {
        $sentDialog.modal("show");
        return false;
    });

    // $sentDialog.on("hidden.bs.modal", function () {
    //     alert("close");
    // })

    contactForm.find("input[type=submit]").tooltip(
        {
            delay: {show: 500, hide: 0}
        }
    );

})();