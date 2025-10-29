import $ from "jquery";
import "slick-carousel";

// ========== Einheitliche Breite für datetime ==========
function updateDatetimeWidths() {
	// Nur anwenden, wenn Bildschirm > 1000px
	if ($(window).width() <= 1000) {
		$(
			".wp-block-ud-content-for-loop-block.is-content-type-datetime .wp-block-ud-datetime-block .datetime"
		).css("width", "");
		return;
	}

	// NEU: Kompaktlayout überall erkennen
	if (
		$(".is-compact-layout").length ||
		$(".ud-loop-list.is-compact-layout").length
	) {
		$(
			".wp-block-ud-content-for-loop-block.is-content-type-datetime .wp-block-ud-datetime-block .datetime"
		).css("width", "");
		return;
	}

	let maxWidth = 0;

	const items = $(
		".wp-block-ud-content-for-loop-block.is-content-type-datetime .wp-block-ud-datetime-block .datetime"
	);

	items.css("width", "auto").each(function () {
		const width = $(this).outerWidth();
		if (width > maxWidth) maxWidth = width;
	});

	items.css("width", maxWidth + "px");
}


// ========== Slick Slider Initialisierung ==========

function initSlickSlider() {
	const slider = $(".wp-block-ud-content-for-loop-block .wp-block-gallery");

	if (slider.length) {
		slider.slick({
			arrows: true,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><span class="slick-icon"><i class="fa-sharp fa-solid fa-circle-chevron-left"></i></span></button>',
			nextArrow: '<button type="button" class="slick-next" aria-label="Next"><span class="slick-icon"><i class="fa-sharp fa-solid fa-circle-chevron-right"></i></span></button>',
		});
	}
}

// ========== DOM Ready Hook ==========

$(function () {
	updateDatetimeWidths();
	initSlickSlider();

	$(window).on("resize", updateDatetimeWidths);
});
