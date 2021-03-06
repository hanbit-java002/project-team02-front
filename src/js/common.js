define([
	"bootstrap",
], function() {
	$(".dropdown-content li a").on("click", function() {
		$(".avaliable:first-child").text($(this).text());
		$(".avaliable:first-child").val($(this).text());
	});

	$(".dropdown-content2 li a").on("click", function() {
		$(".pension-theme").text($(this).text());
		$(".pension-theme").text($(this).text());
	});

	/* $(".gg").on("click", function() {
		$(".btn_region_search").text($(this).text());
		$(".btn_region_search").text($(this).text());
	});*/

	function switchmenu() {
		$(".room-menu").show();
		$(".pension-menu").hide();
		$(".location-menu").hide();
		$(".reviews-menu").hide();

		$(".room-info").on("click", function() {
			$(".room-menu").show();
			$(".pension-menu").hide();
			$(".location-menu").hide();
			$(".reviews-menu").hide();
			$(".room-info").addClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").removeClass("active");
		});
		$(".pension-info").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").show();
			$(".location-menu").hide();
			$(".reviews-menu").hide();
			$(".room-info").removeClass("active");
			$(".pension-info").addClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").removeClass("active");
		});
		$(".location-info").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").hide();
			$(".location-menu").show();
			$(".reviews-menu").hide();
			$(".room-info").removeClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").addClass("active");
			$(".reviews").removeClass("active");
		});
		$(".reviews").on("click", function() {
			$(".room-menu").hide();
			$(".pension-menu").hide();
			$(".location-menu").hide();
			$(".reviews-menu").show();
			$(".room-info").removeClass("active");
			$(".pension-info").removeClass("active");
			$(".location-info").removeClass("active");
			$(".reviews").addClass("active");
		});
	}
	$(".room-detail-info").on("click", function() {
		location.href = global.root + "/main-room.html";
	});
	$(".footer-nav-box>ul>li:first-child").on("click", function() {
		location.href = global.root + "/index.html";
	});
	$(".footer-nav-box>ul>li:last-child").on("click", function() {
		location.href = global.root + "/viewmore.html";
	});
	$(".back-history").on("click", function() {
		window.history.back();
	});
	$("#reservation-check").on("click", function() {
		location.href = global.root + "/reservation_result.html";
	});
	$(".search-btn").on("click", function() {
		location.href = global.root + "/pension_list.html";
	});
	switchmenu();
});
