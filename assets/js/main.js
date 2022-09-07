jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

// Checking if switch exists
if (document.querySelector(".switch label")) {
	const langSwitcher = document.querySelector(".switch label");
	langSwitcher.addEventListener("click", () => {
	  switchLang();
	});
  
	// Switching language
	function switchLang() {
	  var i18n = {};
	  // Selecting all language specific elements
	  i18n.de = document.getElementsByClassName("contentdeutsch");
	  i18n.en = document.getElementsByClassName("contentenglish");
	  // Determining current language
	  i18n.lang =
		window.getComputedStyle(i18n.en[0]).display != "none" ? "en" : "de";
  
	  // Hiding current language and turning on the other one
	  if (i18n.lang == "en") {
		for (var i = 0; i < i18n.de.length; i++) {
		  i18n.de[i].style.display = "block";
		  i18n.en[i].style.display = "none";
		}
	  } else {
		for (var i = 0; i < i18n.de.length; i++) {
		  i18n.de[i].style.display = "none";
		  i18n.en[i].style.display = "block";
		}
	  }
	}
  }