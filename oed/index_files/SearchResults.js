document.observe("dom:loaded", function() {
	$$('#refineSearch li.topLevel').each(function(li) {
		if (li.down('a')) {
			li.down('a').observe('click', function(evt) {
				expand(li.down('a'));
			});

			if (li.down('a').next('a')) {
				li.down('a').next('a').observe('click', function(evt) {
					expand(li.down('a'));
				});
			}
		}
	});
	
	$$('div.result span.word a').each(function(a) {
		a.observe('click', function(event) {
			// TRAC #1684: handling control-click and middle button click
			if (event.ctrlKey) {
				window.open(a.href);
				event.stop();
			}
		});
	});

	if (top != self) {
		top.onbeforeunload = function() {
		};
		top.location.replace(self.location.href);
	}
	
});

function expand(expandArrow) {
	if (expandArrow.hasClassName('expanded')) {
		expandArrow.removeClassName('expanded');
		expandArrow.addClassName('collapsed');
		if (expandArrow.up('li')) {
			expandArrow.up('li').down('ul').hide();
		}
	} else {
		expandArrow.removeClassName('collapsed');
		expandArrow.addClassName('expanded');
		if (expandArrow.up('li')) {
			expandArrow.up('li').down('ul').show();
		}
	}
}
