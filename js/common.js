$(document).ready(function() {
	//Плавная прокрутка меню
	$(".menu a[href*='#']").mPageScroll2id({
		scrollSpeed: 700,
		offset: 70
	});
	$(".menu li").click(function() {
		$(".menu li").removeClass("active");
		$(this).addClass("active");
	});

	//Переключение категорий в портфолио
	$("#portfolio-grid").mixItUp();
	$("#portfolio li").click(function() {
		$("#portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup-content').magnificPopup({type:'inline', midClick: true, showCloseBtn: true});

	//Автоматический подгон высоты хедера под высоту экрана
	function heightDetect() {
		$("header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//Адаптивное меню
	var touch = $('.nav-icon');
	var menu = $('.menu');
		 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $('.menu li').on('click', function(e) {
    	var wid = $(window).width();
        if(wid < 769) {
        	e.preventDefault();
        	menu.slideToggle();
        }
    });
  
    $(window).resize(function(){
    	var wid = $(window).width();     
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    setEqualHeight($(".services-wrap > div"));

});

//Уменьшение полосы навбара при прокрутке
$(document).on("scroll",function() {
	if($(document).scrollTop()>100) { 
		$(".top-panel").removeClass("large").addClass("small");
	} else {
		$(".top-panel").removeClass("small").addClass("large");
	}
});

//Выравнивание блоков по высоте
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
	columns.height(tallestcolumn);
}