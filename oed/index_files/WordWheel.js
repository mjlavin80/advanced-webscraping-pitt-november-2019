// move utilities
var Move =  {
  after:  function(e, target)   {
        var eId =  $(e);
        $(target).appendChild(eId);
  },
  before:  function(e, target)   {
        var eId =  $(e);
        $(target).insertBefore(eId, $(target).firstChild);
  }
}

var Carousel = {
    speed: 0.8, // animation speed    
    resultsPerMove: 20, // number of letters to move per click
    resultHeight: 16, // height (in pixels) of each result
    current: 0,
    totalHeight: 375,
    typingDelay: 0.5,        // typing delay before wheel reloads
    lowestPage: 0,   
    nextLock: false, 
    prevLock: false,
    doingAjaxRequest: false,
    watchdogTimeout : 7500, // milliseconds
    watchdogTimerId : null,
    
    initz: function() {
        this.reset();
    
    	// prevents the enter key from causing another request.
        Event.observe('jumpWord', 'keyup', function(event) {
        	if (event.keyCode == 13) {
        	    ga('send', 'event', {
		            eventCategory: "submit",
		            eventAction: "sidebar-wordwheel-search",
	            });
	            console.log("Sent event for sidebar-wordwheel-search because of keyUp event on #jumpForm");
        		event.stop();
        	}
        });
        
        Event.observe('prevPageButton', 'click', function(event) {
        	if (event) {
        		Event.stop(event);
        	}
        	Carousel.previous();
        });
        
        Event.observe('nextPageButton', 'click', function(event) {
        	if (event) {
        		Event.stop(event);
        	}
        	Carousel.next();
        });
        
        $$('nextPageButton').href = '#';
        $$('prevPageButton').href = '#';
        
        $('nextPageZone').observe(Tapestry.ZONE_UPDATED_EVENT, function(event) {
        	Carousel.notifyAjaxRequestFinished();
        });
        
        $('typingReloadZone').observe(Tapestry.ZONE_UPDATED_EVENT, function(event) {
        	Carousel.notifyAjaxRequestFinished();
        });

        // automatically reset the wordwheel if we jump to a new spot
        $('typingReloadZone').observe(Tapestry.ZONE_UPDATED_EVENT, function() {
            Carousel.reset();
        });  

        // prevent form submissions when using the javascript word wheel 
        Event.observe('jumpForm', 'submit', function(event) {
        	event.stop();
        });
        
    },
    
    reset: function() {
        this.current = 0;
        this.lowestPage = 0;
        
        // automatically move results outside of zone
        $('nextPageZone').observe(Tapestry.ZONE_UPDATED_EVENT, function(event) {
            Carousel.movePageResults();
        
            // stop the "zone reloaded" from bubbling up - it would
            // be misunderstood as the typingReloadZone being reloaded
            Event.stop(event);
        });   
        
        Carousel.updateButtons(0);
    },

    select: function(index) {
        // everytime we get a new lowest page number, 
        // we are pushing out all the content in the div
        if (index < this.lowestPage) {
            this.lowestPage = index;
        }
        
        visualIndex = this.current - this.lowestPage;
        
        // slider works opposite of what you'd think.
        // clicking down slides the content up so you can see what is below
        offset = ((visualIndex * -1) * (this.resultsPerMove * this.resultHeight));
        
        new Effect.Morph('carouselTrack', {
            style: 'top:' + offset + 'px;',
            duration: this.speed,
            afterFinish: function() {
                Carousel.nextLock = false;
                Carousel.prevLock = false;
            }
        });
        Carousel.updateButtons(index);
    },
    
    updateButtons: function(index) {
        // update buttons
        if ($('firstPage_' + index) != null) {
            $('prevPageButton').onclick = function () { return false; };  
            $('prevPageButton').setStyle('visibility:hidden');     
        } else {
            $('prevPageButton').onclick = function () { return true; };  
            $('prevPageButton').setStyle('visibility:visible');          
        }
        
        if ($('lastPage_' + index) != null) {
            $('nextPageButton').onclick = function () { return false; };  
            $('nextPageButton').setStyle('visibility:hidden');     
        } else {
            $('nextPageButton').onclick = function () { return true; };  
            $('nextPageButton').setStyle('visibility:visible');          
        }
    },    

    next: function() {        
        
    		if (Carousel.isDoingAjaxRequest()) {
    			return;
    		}
    	
            preLoadNextPage = this.current + 2;
            
            // if on page 0, page 1 should already be loaded, now load page 2 (a few of it's results appear on next page)
            if ($('page_' + preLoadNextPage) == undefined) {            
            
                if (Carousel.nextLock == false) {
                    Carousel.nextLock = true;
                    
                    this.current = this.current + 1;
                    $('currentPage').value = preLoadNextPage;
                    $('nextCurrentStartWord').value = $('jumpWord').value;
                    $('nextPageForm').fire(Tapestry.FORM_PROCESS_SUBMIT_EVENT)
                    this.select(this.current);     
                    Carousel.notifyAjaxRequestStarted();
                    
                }
                
            } else {
                this.current = this.current + 1;
                this.select(this.current);
            }     
        
    },
    
    previous: function() {
    	
			if (Carousel.isDoingAjaxRequest()) {
				return;
			}
    	
            if ($('page_' + (this.current - 1)) == undefined) {   
                // make sure all zones are loaded before lod
                if (Carousel.prevLock == false) {
                    Carousel.prevLock = true;                    
                     
                    this.current = this.current - 1;
                    $('currentPage').value = this.current;
                    $('nextCurrentStartWord').value = $('jumpWord').value;
                    $('nextPageForm').fire(Tapestry.FORM_PROCESS_SUBMIT_EVENT);
                    Carousel.notifyAjaxRequestStarted();
                    
                }
                
            } else {
                this.current = this.current - 1;
                this.select(this.current);
            }
        
    },
    
    // moves the loaded page of results out of the "zone" and into the wordwheel
    movePageResults: function() {
    
        // a "previous" page needs to be moved into the correct location
        if (this.current < 0) {
        
            // this is to offset the immediate addition of an entire page/div pushing all the current content down
            visualIndex = this.current - this.lowestPage;
            offset = ((visualIndex + 2) * -1) * (this.resultsPerMove * this.resultHeight);
            $('carouselTrack').setStyle('top:' + offset + 'px');

            Move.before('page_' + this.current, 'prevPages');
            this.select(this.current);
        }
        
        // a "next" page needs to be moved into the correct location
        if (this.current > 0) {
            Move.after('page_' + (this.current + 1), 'nextPages');
        }
    },
    
    jumpTo: function() {    
        var reloadWheel = function() {
            $('currentStartWord').value = $('jumpWord').value;
            $('typingReloadForm').fire(Tapestry.FORM_PROCESS_SUBMIT_EVENT)
        };
        
        // reset any waiting reloads
        window.clearTimeout($T('typingReloadForm').handle);
        
        // issue a new waiting reload (expires and runs on it's own)
        // this is for the occasion when a user types an entire word at once, we don't want to issue a bunch of ajax calls
        $T('typingReloadForm').handle = reloadWheel.delay(Carousel.typingDelay);
    },
    
    isDoingAjaxRequest : function() {
    	return Ajax.activeRequestCount > 0;
    },
    
    notifyAjaxRequestStarted: function() {
    	Carousel.doingAjaxRequest = true;
    	if (Carousel.watchdogTimerId == null) {
    		Carousel.watchdogTimerId = setTimeout(
    				"Carousel.notifyAjaxRequestFinished();", 
    				Carousel.watchdogTimeout);
    	}
    },
    
    notifyAjaxRequestFinished: function() {
    	new PeriodicalExecuter(function(pe) {
        	Carousel.doingAjaxRequest = false;
        	if (Carousel.watchdogTimerId != null) {
        		clearTimeout(Carousel.watchdogTimerId);
        		Carousel.watchdogTimerId = null;
        	}
    		pe.stop();
    	}, 1);

    }
    
};