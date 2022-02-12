/*===============================
 	Author's Custom JavaScript
  ===============================*/



(function($, window, document) {
	
"use strict";

$(function() {
	$('#slider_big').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	  pager: true,
	  speed:1000,
	  nextText: '',
	  prevText: ''
	});
	$('#offerSlide').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	  pager: true,
	  speed:1000,
	  nextText: '',
	  prevText: ''
	});
	$('#vidSecSlide').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	  pager: false,
	  speed:1000,
	  nextText: '',
	  prevText: ''
	});
	$('.owl-carousel_main').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		autoPlay: true,
		navText: ["<img src='images/icons/main_prev.png'>","<img src='images/icons/main_next.png'>"],
		responsive:{
			0:{
				items:1
			},
			490:{
				items:2
			},
			992:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	
	$('.owl-carousel_second').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		autoPlay: true,
		responsive:{
			0:{
				items:2
			},
			490:{
				items:3
			},
			992:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	
	$(document).on('click', '.mega-dropdown', function(e) {
  		e.stopPropagation();
	});
	
	var deleteData = function(){
		$(this).remove();	
	};
	
	$('#search_button').on('click', function(fn){
		fn.preventDefault();
		$('.search_box_cover').addClass('active');
	});
	$('#closeButton').on('click', function(fn){
		fn.preventDefault();
		$('.search_box_cover').removeClass('active');
	});
	
	$('.remove').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.border_dashed').slideUp('300' , deleteData());
	});
	$('.remove_list').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.whish_gray_bx').slideUp('300' , deleteData());
	});
	$('#cartEnable').on('click', function(e){
		$(this).addClass('car_act');
		e.preventDefault();
		e.stopPropagation();
		$('.cart_box').slideDown(300);
	});
	$(document).on('click', function(e){
		$('#cartEnable').removeClass('.car_act');
		if (e.target.id === 'cart_bx' || $(e.target).parents('#cart_bx').length > 0) {
        	e.stopPropagation();
    	} else {
        	$('.cart_box').slideUp(300);
    	}
	});
	
	var resizeId;
	var $windowSizeG = $(window).width();
	var $firstElem = $('.cover_box_br > ul > li > span > input');
	var $setClick = $('.setClick').closest('li').find('input');
	var $pushThis = function(){
		$setClick.change(function() {
			if(this.checked) {
        		$(this).closest('li').find('ul').slideDown(300);
			}else {
				$(this).closest('li').find('ul').slideUp(300);
			}
		});
	};

	$('.setClick').on('click', function(){
		$pushThis();
	});
	
	$firstElem.on('change', function() {
    	$('.check input').not(this).prop('checked', false);
		$firstElem.closest('li').not(this).find('ul').slideUp(300);
	});
	
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(setSizing, 100);
	});
 
	function setSizing(){
		var $windowSize = $(window).width();
		if($windowSize > 992) {
			$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(4)');
			$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(1)');
			$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(2)');
			$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(2)');
			$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(3)');
			
		}else if($windowSize < 992 && $windowSize > 768) {
			$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(1)');
			$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(2)');
			$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(2)');
			$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(3)');
			$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(3)');
		}else if($windowSize < 767 && $windowSize > 200) {
			$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(1)');
			$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(1)');
			$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(1)');
			$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(4)');
			$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(4)');
			
		}
	}
	
	if($windowSizeG > 992) {
		$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(4)');
		$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(1)');
		$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(2)');
		$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(2)');
		$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(3)');
	}else if($windowSizeG < 992 && $windowSizeG > 768) {
		$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(1)');
		$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(2)');
		$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(2)');
		$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(3)');
		$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(3)');
	}else if($windowSizeG < 767 && $windowSizeG > 200) {
		$('.first_bc3').appendTo('.sitemap .row .col-md-3:nth-child(1)');
		$('.first_bc5').appendTo('.sitemap .row .col-md-3:nth-child(1)');
		$('.first_bc6').appendTo('.sitemap .row .col-md-3:nth-child(1)');
		$('.first_bc2').appendTo('.sitemap .row .col-md-3:nth-child(4)');
		$('.first_bc4').appendTo('.sitemap .row .col-md-3:nth-child(4)');
			
	}
	
});
	
	
}(window.jQuery, window, document));
