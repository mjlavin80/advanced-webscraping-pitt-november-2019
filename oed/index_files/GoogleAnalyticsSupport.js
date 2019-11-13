/* Please note that the WordWheel enter event exists in WordWheel.js rather than in this file 
due to code in WordWheel that is designed to stop keyup events for the enter key */
var analyticsEvent = '{"events": [{' +
			'"cssSelector": ".homeSubscriber #topPanel #quickSearch #quickLinks",' +
			'"eventCategory": "submit",' +
			'"eventAction": "homepage-search"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #topPanel #quickSearch #lostForWordsLink",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-lost-for-words"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #topPanel #quickSearch #advancedSearchLink",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-advanced-search"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #topPanel #quickSearch #helpLink",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-help"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber .navContainer #browseDictionary",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-dictionary"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber .navContainer #browseCategory",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-categories"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber .navContainer #timelines",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-timelines"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber .navContainer #sources",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-sources"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber .navContainer #historical",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-historical-thesaurus"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #aboutOED a[href$=\'about/\']",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-more-about-OED"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #aboutOED a[href$=\'print-and-on-cd-rom/\']",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-print"' +
		'},' +
		'{' +
			'"cssSelector": ".homeSubscriber #savedEntries a",' +
			'"eventCategory": "click",' +
			'"eventAction": "homepage-my-entries"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber .richMedia a[href$=\'appeals\']",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-appeals"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber .wordOfTheDay .word a",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-WOTD"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber .wordOfTheDay .btnRss, .wordOfTheDay .newsByEmail",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-WOTD-signup"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #columnTwo .recentlyPublished",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-recently-published"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #publisherPanel",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-twitter"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #leftPanelWrap",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-bottom-left"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #midPanelWrap",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-bottom-centre"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #rightPanelWrap",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-bottom-right"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #viewOutline",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-outline"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #viewFull",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-full-entry"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pronunciationText",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-pronunciation-text"' +
        '},' +
        '{' +
            '"cssSelector": ".entry .pronunciation-wrapper",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-pronunciation-audio"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #formsMoreLess",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-forms-show-more"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #showFrequencyBandInformationLink",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-frequency-bar"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #etymSummary a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-cross-reference"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #etymologyMoreLess",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-etymology-show-more"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pageLinks .help",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-help-on-dict-entry"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pageLinks .print",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-print"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pageLinks .save",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-save"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pageLinks .email",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-email"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #pageLinks .cite",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-cite"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #showAllQuotations a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-show-all"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #hideAll a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-hide-all"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #keywordsOn a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-keywords-on"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #keywordsOff a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-keywords-off"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #publicationHistory a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-publication-history"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #entryProfile a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-entry-profile"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #previousLink",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-previous-version"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #inThisEntry a",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-in-this-entry"' +
        '},' +
        '{' +
            '"cssSelector": ".entry .senseGroup .thesaurusRef",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-sense-thesaurus"' +
        '},' +
        '{' +
            '"cssSelector": ".entry .senseGroup .categoriesRef",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-sense-categories"' +
        '},' +
        '{' +
            '"cssSelector": ".entry .quotationsBlock .quotation .sourcePopup",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-citation-details"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #hideQuotations",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-sense-hide-quotation"' +
        '},' +
        '{' +
            '"cssSelector": ".entry .quotationsBlock a.oseo",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-oseo-icon"' +
        '},' +
        '{' +
            '"cssSelector": ".entry #showQuotations",' +
            '"eventCategory": "click",' +
            '"eventAction": "entry-sense-show-quotation"' +
        '},' +
        '{' +
            '"cssSelector": "#utilityNavHome",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-home"' +
        '},' +
        '{' +
            '"cssSelector": "#utilityNav a[href$=\'about\']",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-about"' +
        '},' +
        '{' +
            '"cssSelector": "#utilityNav a[href$=\'community\']",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-community"' +
        '},' +
                '{' +
            '"cssSelector": "#utilityNav a[href$=\'blog\']",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-blog"' +
        '},' +
        '{' +
            '"cssSelector": "#headerLogo",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-logo"' +
        '},' +
        '{' +
            '"cssSelector": "#header #quickSearch #quickLinks",' +
            '"eventCategory": "submit",' +
            '"eventAction": "header-quick-search"' +
        '},' +
        '{' +
            '"cssSelector": "#header #loginNav",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-my-oed"' +
        '},' +
        '{' +
            '"cssSelector": "#header #lostForWordsLink",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-lost-for-words"' +
        '},' +
        '{' +
            '"cssSelector": "#header #advancedSearchLink",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-advanced-search"' +
        '},' +
        '{' +
            '"cssSelector": "#header #helpLink",' +
            '"eventCategory": "click",' +
            '"eventAction": "header-entry-help"' +
        '},' +
        '{' +
            '"cssSelector": ".homeSubscriber #columnTwo #mySearches",' +
            '"eventCategory": "click",' +
            '"eventAction": "homepage-my-searches"' +
        '},' +
        '{' +
            '"cssSelector": "#header #navigation #dictionary a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-dictionary"' +
        '},' +
        '{' +
            '"cssSelector": "#header #navigation #categories a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-categories"' +
        '},' +
        '{' +
            '"cssSelector": "#header #navigation #timelines a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-timelines"' +
        '},' +
        '{' +
            '"cssSelector": "#header #navigation #sources a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-sources"' +
        '},' +
        '{' +
            '"cssSelector": "#header #navigation #historical a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-historical-thesaurus"' +
        '},' +
        '{' +
            '"cssSelector": ".use-sidebar #columnTwo #savedEntries",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-my-entries"' +
        '},' +
        '{' +
            '"cssSelector": ".use-sidebar #columnTwo #mySearches",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-my-searches"' +
        '},' +
        '{' +
            '"cssSelector": "#columnTwo #carouselTrack a",' +
            '"eventCategory": "click",' +
            '"eventAction": "sidebar-wordwheel"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #widenSearchPhrases",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-phrases"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #widenSearchDefinitions",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-definitions"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #widenSearchEtymologies",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-etymologies"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #widenSearchQuotations",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-quotations"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #widenSearchFullText",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-full-text"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #sortEntry a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-sort-entry"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #sortFrequency a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-sort-frequency"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #sortDate a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-sort-date"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #saveSearch a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-save"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #refineSearch a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-search-button"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #viewAsList a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-view-list"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #viewAsTimeline a",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-view-timeline"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #columnOneWrap #refineSearch",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-refine-search-options"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #columnOneWrap #searchWithinForm",' +
            '"eventCategory": "submit",' +
            '"eventAction": "quick-search-results-search-within-results"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #resultItem1.quicksearch",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-result-one"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #resultItem2.quicksearch",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-result-two"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #resultItem3.quicksearch",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-result-three"' +
        '},' +
        '{' +
            '"cssSelector": ".quicksearch #resultItem4.quicksearch",' +
            '"eventCategory": "click",' +
            '"eventAction": "quick-search-results-result-four"' +
        '}' +
	']' +
'}';

var analyticsList = JSON.parse(analyticsEvent);

function createAnalyticsFunction(index) 
{
    return function() {
        ga('send', 'event', {
		    eventCategory: analyticsList.events[index].eventCategory,
		    eventAction: analyticsList.events[index].eventAction,
	      });
	    console.log("Sent event for " + analyticsList.events[index].eventAction + " because of " + analyticsList.events[index].eventCategory + " event on " + analyticsList.events[index].cssSelector);
    }
}

jQuery(function($) {

for (i = 0; i < analyticsList.events.length; i++)
{
    if (analyticsList.events[i].eventCategory === "submit")
    {
        $(document).on("submit", analyticsList.events[i].cssSelector, createAnalyticsFunction(i));
    }
    else
    {
        if (analyticsList.events[i].eventCategory === "click")
        {
            $(analyticsList.events[i].cssSelector).on("click", createAnalyticsFunction(i));
        }
    }
}

});