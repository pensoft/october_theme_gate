$(window).scroll(animateNumbers);

var viewed = false;

var width = window.innerWidth;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};

$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}


    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (width < 992) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }


    $('body').on('click', '.work_packages .accordion-toggle, .mission .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".plusminus").html('<span class="plus"></span>');
            $(this).children(".green_bullet").removeClass('toggled');

        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".plusminus").html('<span class="minus"></span>');
            $(this).children(".green_bullet").addClass('toggled');
        }
    });

    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });

    if(width >= 1024){
        $('.work_packages .key_0, .work_packages .key_2, .work_packages .key_4, .work_packages .key_6, .work_packages .key_8, .work_packages .key_10, .work_packages .key_12').wrapAll('<div class="col-md-6 col-xs-12" />');
        $('.work_packages .key_1, .work_packages .key_3, .work_packages .key_5, .work_packages .key_7, .work_packages .key_9, .work_packages .key_11').wrapAll('<div class="col-md-6 col-xs-12" />');
    }

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if($("#"+anchorId).offset()){
            $('html, body').animate({
                scrollTop: $("#"+anchorId).offset().top - 150
            }, 500);
        }else{
            $('.accordion-border').each(function(){
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger( "click" );
                }
            });
        }
    }

    $('.dropdown a').click(function(event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if($("#"+anchorId).length>0){
                $('html, body').animate({
                    scrollTop: $("#"+anchorId).offset().top - 150
                }, 500);
            }else{
                // event.preventDefault();
                $("g[title='"+anchorId.toUpperCase()+"']").addClass('active_path');

                $('.accordion-border').each(function(){
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger( "click" );
                        event.preventDefault();
                    }
                });
            }
        }
    });


    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });


	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

	var count = $("h1").text().length;

	$('.library-item').attr('data-aos', 'fade-up');
	$('.partner-item').attr('data-aos', 'fade-up');
	$('.profile-item').attr('data-aos', 'flip-left');
	$('.mission-card').attr('data-aos', 'flip-left');
	$('.about img').attr('data-aos', 'flip-left');


	$('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function() {
        return (innerWidth - $('.container').width())/2;
    });

    $('.library .form-wrapper, .library-items').wrapAll('<div class="container-fluid bg-secondary"><div class="container"></div></div>');
    $('.library .tabs').wrapAll('<div class="container"></div>');
    $('.library_content .row.center-xs.mb-1').wrapAll('<div class="container_relative"></div>');

    if($('.stakeholders-carousel').length) {
        /* News highlights carousel **/
        $('.stakeholders-carousel').slick({
            autoplay: false,
            // autoplaySpeed: 2000,
            draggable: true,
            // pauseOnHover: true,
            centerMode: false,
            variableWidth: true,
            infinite: false,
            slidesToShow: 2,
            speed: 1000,
            centerPadding: '4%',
            slidesToScroll: 1,
            // centerPadding: '40px',
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        centerMode: true,
                        centerPadding: '2%',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".trigger_prev").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next").click(function () {
            $(".slick-next").click();
            return false;
        });

        $(".trigger_prev_arrow").click(function () {
            $(".slick-prev").click();
            return false;
        });
        $(".trigger_next_arrow").click(function () {
            $(".slick-next").click();
            return false;
        });
    }


    /* News highlights carousel **/
    $('.news-carousel').slick({
        autoplay: false,
        // autoplaySpeed: 2000,
        draggable: true,
        // pauseOnHover: true,
        centerMode: false,
        variableWidth: true,
        infinite: false,
        slidesToShow: 3,
        speed: 1000,
        centerPadding: '4%',
        slidesToScroll: 1,
        // centerPadding: '40px',
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '2%',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('<small>To download individual image please right click</small>').insertAfter($('.all_images_container'));

    $('<div class="mark"></div>').insertAfter($('.group-holder input'));


    // type(0, 20, "text", "screen");


});





function onHashChange(){
	$("g").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("g[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');


	}
}

function redirectAndRefresh(url){
	$(".tabs a").each(function() {
		this.href = window.location.hash;
	});
	window.open(url, '_blank');
	location.reload();
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}

function showSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').toggle();
	$('.navbar a.p-search').css('visibility', 'hidden');
	// $('#menu li').hide();
	// $('nav a:not(.navbar-brand)').hide();
}

function hideSearchForm(){
	$('#layout-header').toggleClass('full-width');
	$('#search').hide();
    $('.navbar a.p-search').css('visibility', 'visible');
	// $('#menu li').show();
    // $('nav a').show();
}


function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	if($(elem).height()){
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	return;

}



function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}


function hideMe(elem){
    $(elem).parent().hide();
}


function getScreenSize() {
    var myHeight = 0;
    var myWidth = 0;
    if (window.innerWidth && window.innerHeight) {
        // Netscape & Mozilla
        myHeight = window.innerHeight;
        myWidth = window.innerWidth;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE > 6
        myHeight = document.documentElement.clientHeight;
        myWidth = document.documentElement.clientWidth;
    } else if (document.body.offsetWidth && document.body.offsetHeight) {
        // IE = 6
        myHeight = document.body.offsetHeight;
        myWidth = document.body.offsetWidth;
    } else if (document.body.clientWidth && document.body.clientHeight) {
        // IE < 6
        myHeight = document.body.clientHeight;
        myWidth = document.body.clientWidth;
    }

    return {'width': myWidth, 'height': myHeight};
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev"/>',
                    nextArrow: '<i class="slick-next"/>',
                });
            }
        }
		// appendSearchAndSocialMedia()
		// requestFormPartners()
        // keepFooter(documentHasScroll());

    });
}

function scrollToField(errors){
    $(".get_involved_form input, .get_involved_form select, .get_involved_form .row").removeClass('red_err_field');
    $.each(errors.scroll_to_field, function(key,valueObj){
        $("#"+key).addClass('red_err_field');
        $('html, body').animate({
            scrollTop: $("#"+key).offset().top - 200
        }, 1000);
        return false; // breaks
    });
}

function handlePilotsSVGMapMouseMove(event) {
    var title = $(event.target).parent().attr('title');
    var tooltip = document.getElementById("tooltip");

    switch (title) {
        case 'San Miguel Island':
        case 'Xistral Mountains of Galicia':
        case 'Ebro':
        case 'Eifel - High Fens':
        case 'Weiße Elster catchment':
        case 'Pärnu catchment':
        case 'Alam-Pedja':
            break;
        default:
            return tooltip.classList.remove("active");
    }
    // var x = event.clientX;
    // var y = event.clientY;

    var x = $(event.target).offset().left;
    var y = $(event.target).offset().top;

    tooltip.style.left = (x + 30) + "px";
    tooltip.style.top = (y - 30) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}

function onPilots(pTitle) {
    var tooltip = document.getElementById("tooltip");
    // tooltip.classList.remove("active");
    if(!$("g[title='"+pTitle+"']").hasClass('active_path')){
        $("g[title='"+pTitle+"']").addClass('active_path');

        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
                $('html, body').animate({
                    scrollTop: toggler.parent().offset().top - 150
                }, 500);
            }
        });
    }else{
        $("g[title='"+pTitle+"']").removeClass('active_path');
        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
            }
        });
    }
}

function initButtonStyle(){
    $( "<span class=\"su_button_circle desplode-circle\"></span>" ).insertBefore( ".btn.btn-primary" );
    $('.btn.btn-primary').wrapInner('<span class="button_text_container">');
    $('.btn.btn-primary').addClass('button_su_inner').removeClass('btn-primary');
    $('.col-xs-12.col-md-3.end-xs.end-md').wrapInner('<div class="button_su download">');
    $('.library form:has(.button_su_inner)').wrap('<div class="button_su download">');
    $('.library a .button_text_container').text('Download');
}

function animateNumbers() {
	if (isScrolledIntoView($(".numbers")) && !viewed) {
		viewed = true;
		$('.count').each(function () {
			var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 1800,
				easing: 'swing',
				step: function (now) {
					$(this).text(parseFloat(now).toFixed(size));
				}
			});
		});
	}
}

function fetchMails(i, searchStr){
    // $('.group_mailing_list').hide();
    if($('.group_mailing_list_'+i).is(":visible")){
        $('.group_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchMailingList', {
            update: { 'mailing_list': '#mailing_list_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.group_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.mailing_list);
        });
        $('.group_mailing_list').hide();
        $('.group_mailing_list_'+i).show();
    }

}


function fetchSingleMail(i, searchStr){
    if($('.single_mailing_list_'+i).is(":visible")){
        $('.single_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchSingleMail', {
            update: { 'individual_email': '#individual_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.single_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.individual_email);
        });
        $('.single_mailing_list').hide();
        $('.single_mailing_list_'+i).show();
    }
}

function initMailingTooltip(){
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $(this).parent().css('display', 'inline-grid');
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_'+i+'" onclick="fetchMails('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $('<div class="group_mailing_list group_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());


    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_individuals_'+i+'" onclick="fetchSingleMail('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $(this).parent().css('display', 'inline-grid');
        $('<div class="single_mailing_list single_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());
    });

    $('.group-holder').eq(0).prepend( "<p style='margin-left: 10px; width: 100%;'>Prior to sending group emails, please make sure that all individuals you want to contact have been included in the respective group by clicking on the group icon.</p><p></p>" );
    $('.group-holder').eq(1).prepend( "<p style='margin-left: 10px; width: 100%;'>To see each person’s email, click on the account icon.</p><p></p>" );

}

init()
