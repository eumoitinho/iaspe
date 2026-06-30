(function ($) {

	"use strict";

	mobileNav();

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();
		$('input[name=cep]').mask('00000-000');
		$('input[name=telefone]').mask('(00) 0 0000-0000');
		$('input[name=telefone_fixo]').mask('(00) 0000-0000');
		$('input[name=cpf]').mask('000.000.000-00', {reverse: true});

		function activateTabFromHash() {
			var hash = window.location.hash;
			if (!hash || hash.length < 2) return;
			var $tab = $('.nav-tabs a[href="' + hash + '"][data-toggle="tab"]');
			if ($tab.length) $tab.tab('show');
		}

		activateTabFromHash();
		$(window).on('hashchange', activateTabFromHash);

		$(".lightbox")[0] && $(".lightbox").lightGallery({enableTouch: !0});

		$(".owl-carousel")[0] && $('.owl-carousel').owlCarousel({
			loop: false,
			dots: false,
			margin: 10,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				600: {
					items: 2,
					nav: false,
				},
				1000: {
					items: 3,
					nav: false,
				}
			}
		});

		$(document).on("scroll", onScroll);
		$('select[name=estado]').change(function () {
			$('select[name=cidade]').attr('disabled','disabled');
			$('select[name=cidade]').html('<option value="">buscando cidades...</option');
			if ($(this).val()) {
				$.getJSON(BASE_URL+'cidade/busca/'+$(this).val(), function (j) {
					var options = '<option value="">selecione a cidade</option>';
					for (var i = 0; i < j.length; i++) {
						options += '<option value="' + j[i].CidId + '">' + j[i].CidNome + '</option>';
					}
					$('select[name=cidade]').html(options).show();
					$('select[name=cidade]').removeAttr('disabled');
				});
			} else {
				$('select[name=cidade]').html('<option value="">Escolha um estado</option>');
			}
		});
	});

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.main-nav .nav a').each(function () {
			var currLink = $(this);
			var href = currLink.attr("href");
			if (href && href.startsWith('#') && href.length > 1) {
				var refElement = $(href);
				if (refElement.length) {
					var top = refElement.offset().top;
					if (top <= scrollPos && top + refElement.outerHeight() > scrollPos) {
						$('.main-nav .nav li a').removeClass("active");
						currLink.addClass("active");
					} else {
						currLink.removeClass("active");
					}
				}
			}
		});
	}


	// Home seperator
	if($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

})(window.jQuery);
