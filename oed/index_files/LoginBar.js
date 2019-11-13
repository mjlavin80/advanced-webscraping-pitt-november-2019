var LoginBar = {
  
    init: function(startOpened, homepageUrl) {
        if (!startOpened) {
        	if($("loginState")) {
            	$("loginState").addClassName("closed");
            }
        }
        else {
        	$("loginState").show();
        	if ( $("loginWithoutJS") != undefined) {
        		$("loginWithoutJS").href="#";
        		$("loginWithoutJS").observe('click', function() { LoginBar.show(); });
        	}
        }
        
        var openButton = $('openLoginBar');
        if (openButton != null) {
        	openButton.writeAttribute('href', '#');
            openButton.observe('click', onClickLoginTop);
        }
        
        //are the next 4 lines ever used? 
        var openButtonTop = $("openLoginBarTop");
        if (openButtonTop != null) {
            openButtonTop.observe('click', onClickLoginTop);
        }
        
        var closeButton = $$("#loginBar #closeLoginPanel a").first();       
        if (closeButton != null) {
        	closeButton.href = homepageUrl;
            /* closeButton.observe('click', function(evt) {
                LoginBar.hide();
                Event.stop(evt);
            }); */
        }
        
        /** Remove all cookie logic.  comment out instead of delete incase OUP want it back        
        var cookies = document.cookie.split(";");
        var cookie = null;
        for (i = 0; i < cookies.length; i++)
        {
        	cookie = cookies[i].split("=");
        	while (cookie[0].charAt(0) == ' ' && cookie[0].length > 1)
        	{
        		cookie[0] = cookie[0].substring(1);
        	}
        	if (cookie[0].indexOf("username") == 0 && (cookie[0].length == 8 || cookie[0].charAt(7) == ' '))
        	{
        		$("subLoginUsername").value = cookie[1];
        	}
        	else
        	{
        		if (cookie[0].indexOf("libLoginCard") == 0 && (cookie[0].length == 12 || cookie[0].charAt(11) == ' '))
        		{
        			$("libLoginCard").value = cookie[1];
        		}
        	}
        }**/

        // IE8 fix, since forms don't submit upon rendering show() on HTML
        // See: http://stackoverflow.com/questions/1795985/ie8-form-within-a-hidden-div-return-key-no-longer-works
		if (!Prototype.Browser.Gecko) {
			// The Enter key press event is captured in Firefox when selecting an item from the autocomplete menu
			$("subLoginUsername").observe('keydown', function(evt) { if(evt.keyCode == 13) { $("subLoginForm").submit(); } });
			$("libLoginCard").observe('keydown', function(evt) { if(evt.keyCode == 13) { $("libLoginForm").submit(); } });
		}
		$("subLoginPassword").observe('keydown', function(evt) { if(evt.keyCode == 13) { $("subLoginForm").submit(); } });
		$("subLoginBtn").observe('keydown', function(evt) { 
			if(evt.keyCode == 13) { 
				$("subLoginForm").submit(); 
			} 
		});
		$("libLoginBtn").observe('keydown', function(evt) { if(evt.keyCode == 13) { $("libLoginForm").submit(); } });
		window.onbeforeunload = function(evnt) {
			document.cookie = "username=" + $("subLoginUsername").value;
			document.cookie = "libLoginCard=" + $("libLoginCard").value;
		};
    },
    
    // bar appears
    show: function() {
        //console.log("slide down!");
    	if($$("body.publicPages").length > 0) { $("loginState").setStyle({display:"block"}); }
        $("loginBackdrop").setStyle({ display: "block" });
        $("loginBarWrap").setStyle({ display: "block" });
        new Effect.Move("loginBarWrap", {
            x: 0,
            y: 0,
            mode: "absolute",
            duration: .65,
            afterFinish: function(effect) {
                $("loginState").removeClassName("closed");
            }
        });
        $("subLoginUsername").focus();
    },
    
    // bar hides
    hide: function() {
        //console.log("slide up!");
        new Effect.Move("loginBarWrap", {
            x: 0,
            y: -156,
            mode: "absolute",
            duration: .65,
            afterFinish: function(effect) {
                $("loginBackdrop").setStyle({ display: "none" });
                $("loginBarWrap").setStyle({ display: "none" });
                $("loginState").addClassName("closed");
            }
        });
    } 
    
}

function onClickLoginTop() {
     if($("loginState").hasClassName("closed")) {
         LoginBar.show();
     }
     else {
         LoginBar.hide();
     }
}

function getInternetExplorerVersion() {
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	var rv = -1; // Return value assumes failure.
	var ua = window.navigator.userAgent;
	if (ua.indexOf("MSIE ")>-1) {
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) {
			rv = parseFloat(RegExp.$1);
		}
	} 
	if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		rv = 11;
	}
	if (ua.indexOf("Edge/")>-1) {
		rv=99;
	} 
	return rv;
}