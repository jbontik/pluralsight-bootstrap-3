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

    var $sentAlert = $("#sentAlert");

    $sentDialog.on("hidden.bs.modal", function () {
        $sentAlert.show();
    });

    $sentAlert.on("close.bs.alert", function () {
        $sentAlert.hide();
        return false;
    });

    contactForm.find("input[type=submit]").tooltip(
        {
            delay: {show: 500, hide: 0}
        }
    );

    $("#theCarousel").carousel();

})();