//
//Burger menu
//
$(document).ready(function () {
	$("#burger-btn").click(function () {
	  $(this).toggleClass("open");
	  $('.main-header').toggleClass("menu-active");
	});
});


gsap.registerPlugin(ScrollTrigger);

//
//Sections animations
//
const h = gsap.utils.toArray('.text-highlight-bg');
h.forEach(text => {
  gsap.to(text, { 
    height: "100%",
	top: 0,
	duration: .5,
 	ease: "expo.out",
	delay: .3,
    scrollTrigger: {
      	trigger: text,
	  	start: "top 90%",
    	end: "bottom top"
    }
  })
});

const g = gsap.utils.toArray('.img-wrap');
g.forEach(img => {
	gsap.to(img, {
		width: "100%",
		duration: .75,
        ease: "expo.out",
		scrollTrigger: {
			trigger: img,
			start: "top 80%",
    		end: "bottom top"
		}
	})
});

//
// Section scroll element
//
const s = gsap.utils.toArray('.section-scroll-container1');
s.forEach(s => {
	i = s.querySelectorAll(".section-scroll-element-dynamic-wrapper1");
	
	ScrollTrigger.create({
	trigger: s,
	start: "top center",
	end: "bottom center",
	id: "two"
	})

	const stepsTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.section-scroll-container1',
		start: 'top center',
		end: "bottom center",
		scrub: true
	}
	});


	const steps = gsap.utils.toArray(".section-scroll-element-dynamic1");

	steps.forEach((step, i) => {
	stepsTimeline.add(() => {
		const forward = stepsTimeline.scrollTrigger.direction > 0,
			inEl = forward ? step : steps[i - 1],
			outEl = forward ? steps[i - 1] : step;
		outEl && gsap.to(outEl, {autoAlpha: 0, duration: 0.3, overwrite: true});
		inEl && gsap.to(inEl, {autoAlpha: 1, duration: 0.3, overwrite: true});
	}, i || 0.001);
	});
	stepsTimeline.to({}, {duration: 1})
});

//
// Section scroll element 2
//
const y = gsap.utils.toArray('.section-scroll-container2');
s.forEach(y => {
	i = y.querySelectorAll(".section-scroll-element-dynamic-wrapper2");

	ScrollTrigger.create({
	trigger: y,
	start: "top center",
	end: "bottom center",
	id: "two"
	})

	const stepsTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.section-scroll-container2',
		start: 'top center',
		end: "bottom center",
		scrub: true
	}
	});

	const steps = gsap.utils.toArray(".section-scroll-element-dynamic2");

	steps.forEach((step, i) => {
	stepsTimeline.add(() => {
		const forward = stepsTimeline.scrollTrigger.direction > 0,
			inEl = forward ? step : steps[i - 1],
			outEl = forward ? steps[i - 1] : step;
			outEl && gsap.to(outEl, {autoAlpha: 0, duration: 0.3, overwrite: true});
			inEl && gsap.to(inEl, {autoAlpha: 1, duration: 0.3, overwrite: true});
	}, i || 0.001);
	});
	stepsTimeline.to({}, {duration: 1})
});

//
//Search pop up
//
$(document).ready(function () {
	$(".search-btn, .search-form__close-btn").click(function () {
	  $('body').toggleClass("search-active");
	});
});


//
//Slider hero
//
var carousel = document.querySelector('.media-carousel');
var z = new Flickity( carousel, {
  	prevNextButtons: false,
  	pageDots: false,
	wrapAround: true,
	contain:true
});

var previousButton = document.querySelector('.hero-nav-btn-prev');
previousButton.addEventListener( 'click', function() {
	z.previous();
});

var nextButton = document.querySelector('.hero-nav-btn-next');
nextButton.addEventListener( 'click', function() {
	z.next();
});

z.on("change", function(t) {
	document.querySelector(".hero-nav-current").textContent = t + 1
})


//
//Slider article
//
function sliderarticle () {
	const article = document.querySelector('.article-slider');
	let w = new Flickity( article, {
		prevNextButtons: false,
		pageDots: false,
		wrapAround: true,
		
	});

	const previousButton = document.querySelector('.hero-art-btn-prev');
	previousButton.addEventListener( 'click', function() {
		w.previous();
	});

	const nextButton = document.querySelector('.hero-art-btn-next');
	nextButton.addEventListener( 'click', function() {
		w.next();
	});
};

sliderarticle();


//
//instagram
//
var instagram= document.querySelector('.section-instagram-slider');
var q = new Flickity( instagram, {
  	prevNextButtons: false,
  	pageDots: false,
	wrapAround: false,
	cellAlign: 'left'
	
});

//
// Progress scroll bar
//
window.onscroll = function() {headerscroll()};

function headerscroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("header-progress").style.width = scrolled + "%";
}

//
// Pop up video
//
$(document).ready(function () {
	$(".section-media-video-btn").click(function () {
	  	$(".overlay, .overlay-video").toggleClass("overlay-open");
		let select = document.querySelector(".section-media");
	  	let source = select.querySelector("iframe");
    	source && (source.src = source.dataset.src)
	});

	let cv = document.querySelector(".overlay");
	let ev = cv.querySelector(".overlay-wrap");
	cv.addEventListener("click", function() {
		cv.classList.remove("overlay-open")
	})
	ev.addEventListener("click", function(cv) {
		cv.stopPropagation()
	})
});

//
// Mobile submenu
//
$(document).ready(function () {
	$(".has-submenu").click(function () {
		$(".has-submenu").toggleClass("submenu-active");
	});
});

//
//Desktop submenu
//
function submenu (){
	let x = document.querySelectorAll(".main-nav .sub-menu");
	x.forEach(function(x) {
		let y = x.parentElement;
		y.classList.add("has-submenu"),
		y.addEventListener("mouseenter", function(x) {
			y.classList.contains("submenu-active") || y.classList.add("submenu-active")
		}),
		y.addEventListener("mouseleave", function(x) {
			y.classList.remove("submenu-active")
		});
	});
};

submenu();