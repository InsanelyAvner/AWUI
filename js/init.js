$(() => {
	"use strict";
	
	aw_resume_image_width();
	aw_nav_bg();
	aw_trigger_menu();
	aw_hero_image();
	aw_service_popup();
	aw_portfolio_popup();
	aw_imgtosvg();
	aw_popup();
	aw_data_images();
	aw_contact_form();
	aw_jarallax();
	aw_testimonial_arrow();
	aw_about_animation();
	aw_moving_animation();
	aw_down();
	aw_totop();
	
	jQuery(window).on('resize', function(){
		aw_resume_image_width();
	});
	
});

$(window).on('load', function() {
	aw_portfolio();
})

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

function aw_testimonial_arrow(){
	
	"use strict";
	
	$('.aw_testimonials .direct a').on('mouseenter',function(){
		var e = $(this);
		var p = e.closest('.direct');
		if(e.hasClass('prev_button')){
			p.addClass('prev');
		}else{
			p.addClass('next');
		}
		e.addClass('hovered');
		p.addClass('hovered');
	}).on('mouseleave',function(){
		var e = $(this);
		e.removeClass('hovered');
		e.closest('.direct').removeClass('hovered prev next');
	});
}

// -----------------------------------------------------
// ------------   RESUME IMAGE WIDTH    ----------------
// -----------------------------------------------------

function aw_resume_image_width(){
	
	"use strict";
	
	var media			= jQuery('.aw_resume .media');
	var contentWidth	= jQuery('.aw_resume .resume_in').width();
	media.css({width: (($(window).width() - contentWidth)/2 + 0.15*contentWidth) +'px'});
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function aw_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.aw_header');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function aw_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.aw_mobile_menu .trigger .hamburger');
	var mobileMenu		= jQuery('.aw_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.aw_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.aw_mobile_menu .trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ---------------   HERO IMAGE  -----------------------
// -----------------------------------------------------

function aw_hero_image(){
	
	"use strict";
	
	var FixedImage	= jQuery('.aw_hero .right .image .main').data('img-url');
	var wrapper	= jQuery('.aw_hero .services ul');
	var list	= wrapper.find('li a');
	list.on('mouseenter',function(){
		var element = jQuery(this);
		var image	= element.find('.image').attr('src');
		element.closest('.aw_hero').find('.right .image .main').css({backgroundImage:'url('+image+')'});
		console.log(image);
	});
	wrapper.on('mouseleave',function(){
		jQuery('.aw_hero .right .image .main').css({backgroundImage:'url('+FixedImage+')'});
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function aw_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aw_modalbox');
	var button			= jQuery('.aw_service .service_list ul li .aw_full_link, .aw_service .service_list ul li .title, .aw_service .service_list ul li i');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function() {
		var element = jQuery(this);
		var parent	= element.closest('.aw_service .service_list ul li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		var title	= parent.find('.title').attr("data-modal-title");
		var link    = element.closest('.aw_service .service_list ul li').attr("data-project-link")
		
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend(`<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><a href="${link}" target="_blank"><div class="main" data-img-url="${elImage}"></div></div></a>`);
		aw_data_images();
		modalBox.find('.service_popup_informations .image').after(`<div class="main_title"><h3>${title} <a href="${link}" target="_blank"><i class="fa-theme fa-duotone fa-arrow-up-right-from-square"></i></a></h3></div>`);
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function aw_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aw_modalbox');
	var button			= jQuery('.aw_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image	= parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">'+details+'<div>');
		aw_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function aw_news_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.aw_modalbox');
	var button			= jQuery('.aw_news .list_inner .aw_full_link,.aw_news .news_list ul li .details .title a,.aw_news .aw_learn_more a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.news_hidden_details').html();
		var image	= element.closest('.list_inner').find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details">'+details+'<div>');
		aw_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.dodo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function aw_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function aw_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function aw_portfolio(){	
	if(jQuery().isotope) {
		var filter		 = jQuery('.aw_portfolio .portfolio_filter ul');
		var element		= jQuery(this);
		var list		= jQuery('.aw_portfolio').find('.portfolio_list').children('ul');
		list.isotope({ 
			filter				: "*",
			animationOptions	: {
				duration			: 750,
				easing				: 'linear',
				queue				: false
			}
		});

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.aw_portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function aw_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function aw_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function aw_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
			videoVolume: 0,
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();


// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function aw_about_animation(){

	"use strict";

	jQuery('.parallax').each(function(){
		var element = jQuery(this);
		var scene = element.get(0);
		var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
			} });
		});
}

// -----------------------------------------------------
// -------------    MOVING ANIMATION    ----------------
// -----------------------------------------------------

function aw_moving_animation(){
	
	"use strict";
	
	var detail     	= $('.moving_effect');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		var direction = element.attr('data-direction');
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			var x	= direction === 'x' ?  (i*70)/h : 0;
			var y 	= direction === 'x' ?  0 : (i*70)/h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			if((i*(-1))<h+300 && i<300){
				element.css({transform: 'translate3d('+x+'px, '+y+'px, 0px)'});
			}
		});
	});
}


// -----------------------------------------------------
// -----------------    TILT    ------------------------
// -----------------------------------------------------

jQuery('.tilt-effect').tilt({
    maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
})

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function aw_down(){
	
	"use strict";
	
	var topbar = jQuery('.aw_header').outerHeight();
	
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+20
			}, 800);
		}
		
		return false;
	});
}

/****************************/ 
/********** TOTOP ***********/ 
/****************************/ 

function aw_totop(){
  
  "use strict";
  
  jQuery(".totop").on('click', function(e) {
    e.preventDefault();    
    jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}

function formEmail() {
	// mailto:j.doe@example.com?cc=m.bowen@example.com&subject=Quick%20question&body=Hi%20team%22%0aHow%20are%20you%20doing%3F
	let subject = document.getElementsByTagName("input")[0].value
	let message = document.getElementsByTagName("textarea")[0].value
	window.open(`mailto:avner.keinan@gmail.com?subject=${subject}&body=${message}`);
}