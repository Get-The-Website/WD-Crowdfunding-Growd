(function ($) {

	"use strict";



	gsap.registerPlugin(ScrollTrigger, SplitText);
	gsap.config({
		nullTargetWarn: false,
		trialWarn: false
	});



	//Write Here Nu






	//Main Slider 
	if ($(".main-slider__carousel").length) {
		$(".main-slider__carousel").owlCarousel({
			loop: true,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			margin: 0,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-right-angle"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				800: {
					items: 1,
				},
				992: {
					items: 1,
				},
			},
		});
	}




	//Main Slider Two 
	if ($(".main-slider-two__carousel").length) {
		$(".main-slider-two__carousel").owlCarousel({
			loop: true,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			margin: 0,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-right-angle"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				800: {
					items: 1,
				},
				992: {
					items: 1,
				},
			},
		});
	}




	//Main Slider Three 
	if ($(".main-slider-three__carousel").length) {
		$(".main-slider-three__carousel").owlCarousel({
			loop: true,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			margin: 0,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-right-angle"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				800: {
					items: 1,
				},
				992: {
					items: 1,
				},
			},
		});
	}








	//Blog Three Carousel
	if ($(".blog-three__carousel").length) {
		$(".blog-three__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 3,
				},
			},
		});
	}





	//Team One Carousel
	if ($(".team-one__carousel").length) {
		$(".team-one__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 2,
				},
				1200: {
					items: 3,
				},
			},
		});
	}





	//Event Three Carousel
	if ($(".event-three__carousel").length) {
		$(".event-three__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 1,
				},
				1200: {
					items: 1,
				},
			},
		});
	}





	//Event Two Carousel
	if ($(".event-two__carousel").length) {
		$(".event-two__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 2,
				},
				1200: {
					items: 2,
				},
			},
		});
	}





	//Brand One Carousel
	if ($(".brand-one__carousel").length) {
		$(".brand-one__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 5,
				},
			},
		});
	}





	//Gallery One Carousel
	if ($(".gallery-one__carousel").length) {
		$(".gallery-one__carousel").owlCarousel({
			loop: true,
			margin: 28,
			nav: false,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 5,
				},
			},
		});
	}








	//Testimonial One Carousel
	if ($(".testimonial-one__carousel").length) {
		$(".testimonial-one__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 2,
				},
				1200: {
					items: 2,
				},
			},
		});
	}





	//Project One Carousel
	if ($(".project-one__carousel").length) {
		$(".project-one__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 3,
				},
			},
		});
	}




	//Event One Carousel
	if ($(".event-one__carousel").length) {
		$(".event-one__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 2,
				},
				1200: {
					items: 2,
				},
			},
		});
	}



	//Feature Two Carousel
	if ($(".feature-two__carousel").length) {
		$(".feature-two__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-angle-left"></span>',
				'<span class="icon-right-angle"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 1,
				},
				1200: {
					items: 1,
				},
			},
		});
	}





	// Accrodion
	if ($(".accrodion-grp").length) {
		var accrodionGrp = $(".accrodion-grp");
		accrodionGrp.each(function () {
			var accrodionName = $(this).data("grp-name");
			var Self = $(this);
			var accordion = Self.find(".accrodion");
			Self.addClass(accrodionName);
			Self.find(".accrodion .accrodion-content").hide();
			Self.find(".accrodion.active").find(".accrodion-content").show();
			accordion.each(function () {
				$(this)
					.find(".accrodion-title")
					.on("click", function () {
						if ($(this).parent().hasClass("active") === false) {
							$(".accrodion-grp." + accrodionName)
								.find(".accrodion")
								.removeClass("active");
							$(".accrodion-grp." + accrodionName)
								.find(".accrodion")
								.find(".accrodion-content")
								.slideUp();
							$(this).parent().addClass("active");
							$(this).parent().find(".accrodion-content").slideDown();
						}
					});
			});
		});
	}





	// Tab Box
	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab");
				$(target).fadeIn(300);
				$(target).addClass("active-tab");
			}
		});
	}




	if ($(".video-popup").length) {
		$(".video-popup").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: true,

			fixedContentPos: false
		});
	}

	if ($(".img-popup").length) {
		var groups = {};
		$(".img-popup").each(function () {
			var id = parseInt($(this).attr("data-group"), 10);

			if (!groups[id]) {
				groups[id] = [];
			}

			groups[id].push(this);
		});

		$.each(groups, function () {
			$(this).magnificPopup({
				type: "image",
				closeOnContentClick: true,
				closeBtnInside: false,
				gallery: {
					enabled: true
				}
			});
		});
	}





	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="far fa-angle-down fa-fw"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});


		$('.hamburger').on('click', function (e) {
			$('.about-sidebar').addClass('active');
		});

		$('.about-sidebar .close-button').on('click', function (e) {
			$('.about-sidebar').removeClass('active');
		});

		$('.about-sidebar .gradient-layer').on('click', function (e) {
			$('.about-sidebar').removeClass('active');
		});

		$('.xs-sidebar-group .close-button').on('click', function (e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});

	}



	// Mobile Nav Hide Show
	if ($('.mobile-menu').length) {
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function (e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');

			if ($(target).is(':visible')) {
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			} else {
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function (e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');

			if ($(targetInner).is(':visible')) {
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			} else {
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});


		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
				$('.mobile-menu .navigation > li').removeClass('open');
				$('.mobile-menu .navigation li ul').slideUp(0);
			}
		});

	}


	//  Progress Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			}, {
				accY: 150
			}
		);
	}

	//Progress Bar / Levels
	if ($(".progress-levels .progress-box .bar-fill").length) {
		$(".progress-box .bar-fill").each(
			function () {
				$(".progress-box .bar-fill").appear(function () {
					var progressWidth = $(this).attr("data-percent");
					$(this).css("width", progressWidth + "%");
				});
			}, {
				accY: 0
			}
		);
	}


	//Progress Bar / Levels
	if ($(".progress-levels-2 .progress-box .bar-fill").length) {
		$(".progress-box .bar-fill").each(
			function () {
				$(".progress-box .bar-fill").appear(function () {
					var progressWidth = $(this).attr("data-percent");
					$(this).css("width", progressWidth + "%");
				});
			}, {
				accY: 0
			}
		);
	}

	//Progress Bar / Levels
	if ($(".progress-levels-3 .progress-box .bar-fill").length) {
		$(".progress-box .bar-fill").each(
			function () {
				$(".progress-box .bar-fill").appear(function () {
					var progressWidth = $(this).attr("data-percent");
					$(this).css("width", progressWidth + "%");
				});
			}, {
				accY: 0
			}
		);
	}

	//Progress Bar / Levels
	if ($(".progress-levels-4 .progress-box .bar-fill").length) {
		$(".progress-box .bar-fill").each(
			function () {
				$(".progress-box .bar-fill").appear(function () {
					var progressWidth = $(this).attr("data-percent");
					$(this).css("width", progressWidth + "%");
				});
			}, {
				accY: 0
			}
		);
	}


	//Progress Bar / Levels
	if ($(".progress-levels-5 .progress-box .bar-fill").length) {
		$(".progress-box .bar-fill").each(
			function () {
				$(".progress-box .bar-fill").appear(function () {
					var progressWidth = $(this).attr("data-percent");
					$(this).css("width", progressWidth + "%");
				});
			}, {
				accY: 0
			}
		);
	}


	$(".add").on("click", function () {
		if ($(this).prev().val() < 999) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
				.next()
				.val(+$(this).next().val() - 1);
		}
	});

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function () {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
			}, {
				accY: 0
			}
		);
	}





	if ($('.paroller').length) {
		$('.paroller').paroller({
			factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control  
			factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			type: 'foreground', // background, foreground  
			direction: 'horizontal' // vertical, horizontal  
		});
	}





	if ($(".odometer").length) {
		var odo = $(".odometer");
		odo.each(function () {
			$(this).appear(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});

		});
	}


	// LightBox Image
	if ($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}


	//LightBox Video
	if ($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
			// disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%'
					},
				},
				srcAction: 'iframe_src',
			},
			fixedContentPos: false
		});
	}



	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true
				},
				organization: {
					required: true
				},
				job: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}



	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: 0
			}, 100);
			return false;

		});
	}



	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}


	//Header Search
	if ($('.searcher-toggler-box').length) {
		$('.searcher-toggler-box').on('click', function () {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function () {
			$('body').removeClass('search-active');
		});

		$('.search-popup .color-layer').on('click', function () {
			$('body').removeClass('search-active');
		});
	}










	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');

			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}

		}
	}



	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(100).fadeOut(100);
		}
	}





	// ===Portfolio===
	function projectMasonaryLayout() {
		if ($(".masonary-layout").length) {
			$(".masonary-layout").isotope({
				layoutMode: "masonry"
			});
		}
		if ($(".post-filter").length) {
			$(".post-filter li")
				.children(".filter-text")
				.on("click", function () {
					var Self = $(this);
					var selector = Self.parent().attr("data-filter");
					$(".post-filter li").removeClass("active");
					Self.parent().addClass("active");
					$(".filter-layout").isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: "linear",
							queue: false
						}
					});
					return false;
				});
		}

		if ($(".post-filter.has-dynamic-filters-counter").length) {
			// var allItem = $('.single-filter-item').length;
			var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
				"li"
			);
			activeFilterItem.each(function () {
				var filterElement = $(this).data("filter");
				var count = $(".filter-layout").find(filterElement).length;
				$(this)
					.children(".filter-text")
					.append('<span class="count">' + count + "</span>");
			});
		}
	}


	function SmoothMenuScroll() {
		var anchor = $(".scrollToLink");
		if (anchor.length) {
			anchor.children("a").bind("click", function (event) {
				if ($(window).scrollTop() > 10) {
					var headerH = "90";
				} else {
					var headerH = "90";
				}
				var target = $(this);
				$("html, body")
					.stop()
					.animate({
							scrollTop: $(target.attr("href")).offset().top - headerH + "px"
						},
						200,
						"easeInOutExpo"
					);
				anchor.removeClass("current");
				anchor.removeClass("current-menu-ancestor");
				anchor.removeClass("current_page_item");
				anchor.removeClass("current-menu-parent");
				target.parent().addClass("current");
				event.preventDefault();
			});
		}
	}


	function OnePageMenuScroll() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 117) {
			var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
			menuAnchor.each(function () {
				var sections = $(this).attr("href");
				$(sections).each(function () {
					if ($(this).offset().top <= windscroll + 120) {
						var Sectionid = $(sections).attr("id");
						$(".one-page-scroll-menu").find("li").removeClass("current");
						$(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
						$(".one-page-scroll-menu").find("li").removeClass("current_page_item");
						$(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
						$(".one-page-scroll-menu")
							.find("a[href*=\\#" + Sectionid + "]")
							.parent()
							.addClass("current");
					}
				});
			});
		} else {
			$(".one-page-scroll-menu li.current").removeClass("current");
			$(".one-page-scroll-menu li:first").addClass("current");
		}
	}






	//  Animation Fade Left End
	/////////////////////////////////////////////////////
	// CURSOR
	var cursor = $(".cursor"),
		follower = $(".cursor-follower");

	var posX = 0,
		posY = 0;

	var mouseX = 0,
		mouseY = 0;

	TweenMax.to({}, 0.016, {
		repeat: -1,
		onRepeat: function () {
			posX += (mouseX - posX) / 9;
			posY += (mouseY - posY) / 9;

			TweenMax.set(follower, {
				css: {
					left: posX - 12,
					top: posY - 12
				}
			});

			TweenMax.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			});
		}
	});

	$(document).on("mousemove", function (e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	//circle
	$(".theme-btn, a").on("mouseenter", function () {
		cursor.addClass("active");
		follower.addClass("active");
	});
	$(".theme-btn, a").on("mouseleave", function () {
		cursor.removeClass("active");
		follower.removeClass("active");
	});
	// CURSOR End




	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("https://themecraze.net/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .main-menu .navigation'));
	}




	//Write Here Nu






	// Animation gsap 
	function title_animation() {
		var tg_var = jQuery('.sec-title-animation');
		if (!tg_var.length) {
			return;
		}
		const quotes = document.querySelectorAll(".sec-title-animation .title-animation");

		quotes.forEach(quote => {

			//Reset if needed
			if (quote.animation) {
				quote.animation.progress(1).kill();
				quote.split.revert();
			}

			var getclass = quote.closest('.sec-title-animation').className;
			var animation = getclass.split('animation-');
			if (animation[1] == "style4") return

			quote.split = new SplitText(quote, {
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(quote, {
				perspective: 400
			});

			if (animation[1] == "style1") {
				gsap.set(quote.split.chars, {
					opacity: 0,
					y: "90%",
					rotateX: "-40deg"
				});
			}
			if (animation[1] == "style2") {
				gsap.set(quote.split.chars, {
					opacity: 0,
					x: "50"
				});
			}
			if (animation[1] == "style3") {
				gsap.set(quote.split.chars, {
					opacity: 0,
				});
			}
			quote.animation = gsap.to(quote.split.chars, {
				scrollTrigger: {
					trigger: quote,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: .02
			});
		});
	}
	ScrollTrigger.addEventListener("refresh", title_animation);


	// Title Animation
	let splitTitleLines = gsap.utils.toArray(".title-anim");

	splitTitleLines.forEach(splitTextLine => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});

		const itemSplitted = new SplitText(splitTextLine, {
			type: "words, lines"
		});
		gsap.set(splitTextLine, {
			perspective: 400
		});
		itemSplitted.split({
			type: "lines"
		})
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: 0.3,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1
		});
	});




	// coming soon
    if ($(".clock-wrapper").length) {
      (function () {
        // Generate clock animations
        var now = new Date();
        var hourDeg =
          (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30;
        var minuteDeg =
          (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
        var secondDeg = (now.getSeconds() / 60) * 360;

        var stylesDeg = [
          "@-webkit-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-webkit-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-hour{from{transform:rotate(" +
            hourDeg +
            "deg);}to{transform:rotate(" +
            (hourDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-minute{from{transform:rotate(" +
            minuteDeg +
            "deg);}to{transform:rotate(" +
            (minuteDeg + 360) +
            "deg);}}",
          "@-moz-keyframes rotate-second{from{transform:rotate(" +
            secondDeg +
            "deg);}to{transform:rotate(" +
            (secondDeg + 360) +
            "deg);}}",
        ].join("");
        document.getElementById("clock-animations").innerHTML = stylesDeg;
      })();
    }

    // Event Countdown Timer
    if ($(".time-countdown1").length) {
      $(".time-countdown1").each(function () {
        var $this = $(this);
        var finalDate = new Date("29 April 2025 9:56:00 GMT+01:00");
        finalDate.setDate(finalDate.getDate()); // Add 365 days from today

        $this.countdown(finalDate, function (event) {
          var $this = $(this).html(
            event.strftime(
              "" +
                '<div class="counter-column"><span class="count">%D</span>Days</div> ' +
                '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' +
                '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' +
                '<div class="counter-column"><span class="count">%S</span>Seconds</div>'
            )
          );
        });
      });
    }



    // product slider
	if ($(".image-carousel").length) {
		$(".image-carousel").not(".slick-initialized").slick({
		  infinite: true,
		  autoplay: true,
		  focusOnSelect: true,
		  slidesToShow: 1,
		  speed: 2000,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: false,
		  centerMode: false,
		  centerPadding: "0px",
		  autoplaySpeed: 2000,
		});

		$(".thumbs-carousel")
		  .not(".slick-initialized")
		  .slick({
		    infinite: true,
		    autoplay: true,
		    focusOnSelect: true,
		    slidesToShow: 4,
		    speed: 2000,
		    slidesToScroll: 1,
		    arrows: false,
		    dots: false,
		    centerMode: false,
		    asNavFor: ".image-carousel",
		    autoplaySpeed: 2000,
		    responsive: [
		      {
		        breakpoint: 576,
		        settings: {
		          slidesToShow: 3,
		        },
		      },
		      {
		        breakpoint: 375,
		        settings: {
		          slidesToShow: 2,
		        },
		      },
		    ],
		  });

	}



      // shop single tab
    if ($(".tabs-box").length) {
      $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          target
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn");
          $(this).addClass("active-btn");
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .fadeOut(0);
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab");
          $(target).fadeIn(300);
          $(target).addClass("active-tab");
        }
      });
    }
	
	// cart increaser
    if ($(".quantity-spinner").length) {
      $("input.quantity-spinner").TouchSpin({
        verticalbuttons: true,
      });
    }




	/* ==========================================================================
	   When document is Scrollig, do
	   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});

	/* ==========================================================================
	   When document is loading, do
	   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
		projectMasonaryLayout();
		SmoothMenuScroll();
		OnePageMenuScroll();
		title_animation();





		if ($("select:not(.ignore)").length) {
			$("select:not(.ignore)").niceSelect();
		}














	});


})(window.jQuery);