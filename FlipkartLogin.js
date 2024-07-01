function validateMobileNumber() {
    var mobileNumber = $("#mobile-number").val();
    var validMobileNumberPattern = /^[6-9]\d{9}$/;
    if (!validMobileNumberPattern.test(mobileNumber)) {
        $("#alert-message").removeClass("d-none");
    } else {
        $("#alert-message").addClass("d-none");
        alert("Mobile number is valid");
    }
}

// Ensure jQuery is included before this script
    $(document).ready(function() {
        // Show dropdown on hover
        $('.dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
        });

        // Fix hover on dropdown link
        $('.dropdown > a').click(function(e) {
            e.preventDefault();
            var location = $(this).attr('href');
            window.location.href = location;
            return false;
        });
    });
