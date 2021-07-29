$(function () {


	$('.header__burger').click(function (event) {
		$('.header__burger, .header__mnu, .swiper-pagination').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
		$('.header__burger, .header__mnu').removeClass('active');
		$('body').removeClass('lock');
	});

	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
		// autoHeight: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	var swiper2 = new Swiper(".subSwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		observer: true,
		observeParents: true,
		pagination: {
			el: ".subSwiper-pagination",
			clickable: true,
		},
	});

});


window.addEventListener('DOMContentLoaded', () => {

	// фулл скрин

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	// конец фулл скрина

	let swiperLlide = document.querySelectorAll('.swiper-slide');
	let mySwiperSystemNum = document.querySelectorAll('.mySwiper__system-num > span');

	mySwiperSystemNum.forEach((el, i) => {
		el.innerHTML = `0${i + 1}`;
	})

});

