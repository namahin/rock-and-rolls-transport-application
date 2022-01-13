// Uploaded image slider
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<img src="images/arrow-left.svg">', '<img src="images/arrow-right.svg">'],
    navContainerClass: "ui-slider-nav",
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
})


// All Checkbox

$(function () {

    // Header All Checkbox Event
    $("#allCheck").on("click", function () {
        if ($("input:checkbox").prop("checked")) {
            $("input:checkbox[name='row-check']").prop("checked", true);
        } else {
            $("input:checkbox[name='row-check']").prop("checked", false);
        }
    });

    // Check event on each table row checkbox
    $("input:checkbox[name='row-check']").on("change", function () {
        var total_check_boxes = $("input:checkbox[name='row-check']").length;
        var total_checked_boxes = $("input:checkbox[name='row-check']:checked").length;

        // If all checked manually then check master checkbox
        if (total_check_boxes === total_checked_boxes) {
            $("#allCheck").prop("checked", true);
        } else {
            $("#allCheck").prop("checked", false);
        }
    });
});

// OTP input filed

$('.digit-group').find('input').each(function () {
	$(this).attr('maxlength', 1);
	$(this).attr('required', 'required');
	$(this).on('keyup', function (e) {
		var parent = $($(this).parent());

		if (e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));

			if (prev.length) {
				$(prev).select();
			}
		} else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));

			if (next.length) {
				$(next).select();
			} else {
				if (parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});