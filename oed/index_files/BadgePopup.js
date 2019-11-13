document.observe("dom:loaded", function() {
	var looseFocusAction = function() {
		$j(".badge-popup").addClass("hidden");
	};

	var hoverAction = function(e) {
		var badgePopup = $j(this).siblings(".badge-popup");
		if (badgePopup.hasClass("hidden")) {
			badgePopup.removeClass("hidden");
		} else {
			badgePopup.addClass("hidden");
		}
		$j(".badge-popup").each(function() {
			if (!badgePopup.is(this)) {
				$j(this).addClass("hidden")
			}
		});
		e.stopPropagation();
	};
		
	$j(".authed-user").click(hoverAction);
	$j(".personalized-user").click(hoverAction);
	$j("#usernav").click(hoverAction);
	$j('body').click(looseFocusAction);
});