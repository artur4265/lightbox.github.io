


$(document).ready(function(){

	var imgUrl, styleCss, lightBoxAnimation, className, next, prev, nowSrc, nextImg, prevImg;


// animations scc vars: ZoomIn, AnimRotate, AnimFadeIn, flipInX, rollIn, slideInUp, lightSpeedIn, bounceIn, rubberBand


$('.gallery img').on('click', function() {


// next prev vars
next = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
prev = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';


// Append LightBox
imgUrl = $(this).attr('src');
$('body').append('<link id="Awesome" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
$('body').append('<style id="lightBoxCss">'+ styleCss + lightBoxAnimation +'</style>');
$('body').append('<div  id="lightBox" class="backgroun"><div class="imageBox"><i class="fa fa-chevron-left" aria-hidden="true"></i><img src="'+ imgUrl +'" alt=""><i class="fa fa-chevron-right" aria-hidden="true"></i><div class="close"><i class="fa fa-close"></i></div></div></div>');



nextImg = $(this).next().attr('src');
prevImg = $(this).prev().attr('src');
//console.log(nextImg);

// destroy LightBox
var destroy = $('body #lightBox .imageBox .close, .fa-chevron-right1, .fa-chevron-left').click(function() {
	$('body #lightBox').remove();
	$('#lightBoxCss').remove();
	$('#Awesome').remove();
});


$('.fa-chevron-right').click(function() {

setTimeout(function(){
	imgUrl = nextImg;
	console.log(nextImg);

}, 400);



});



});



$('.gallery img:last').on('click', function() {
	$('.fa-chevron-right').css('display', 'none');
});

$('.gallery img:first').on('click', function() {
	$('.fa-chevron-left').css('display', 'none');
});







// LightBox Css
styleCss = `



.backgroun {
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.45);
}

.backgroun .imageBox {	
	width: 60%;
	margin: 0 auto;
	height: 100%;
	text-align: center;
	position: relative;
}

.backgroun .imageBox img {
	height: 65vh;
	margin-top: 10vh;
	-webkit-animation-name: LightBoxAnimation;
	animation-name: LightBoxAnimation;
	-webkit-animation-duration: 0.5s;
	animation-duration: 0.5s;
	-webkit-animation-timing-function: ease-in-out;
	animation-timing-function: ease-in-out;
	display: inline-block;
	vertical-align: top;
}


.backgroun .imageBox .close {
	margin-top: 8vh;
	margin-left: -40px;
	cursor: pointer;
	background-color: #fff;
	display: inline-block;
	width: 30px;
	vertical-align: top;
	height: 30px;
	line-height: 1.8;
	border-radius: 50%;
	box-shadow: 0px 3px 8px rgba(56, 54, 54, 0.79);
}

.fa-chevron-right, .fa-chevron-left {
	margin-top: 35vh;
	font-size: 36px;
	color: #cecece;
	cursor: pointer;
}

.fa-chevron-right {
	margin-left: 10px;
}

.fa-chevron-left {
	margin-right: 10px;
}




`;



// lightBox Css Animations 

var galleryClass = $('body .gallery');

switch (true) {
	case galleryClass.hasClass('ZoomIn'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	@keyframes LightBoxAnimation {
		from {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	`;
	break;

	case galleryClass.hasClass('AnimRotate'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from {
			-webkit-transform: scale(0.5, 0.5) rotate(0deg);
			transform: scale(0.5, 0.5) rotate(0deg);
		}
		to {
			-webkit-transform: scale(1, 1) rotate(360deg);
			transform: scale(1, 1) rotate(360deg);
		}
	}

	@keyframes LightBoxAnimation {
		from {
			-webkit-transform: scale(0.5, 0.5) rotate(0deg);
			transform: scale(0.5, 0.5) rotate(0deg);
		}
		to {
			-webkit-transform: scale(1, 1) rotate(360deg);
			transform: scale(1, 1) rotate(360deg);
		}
	}

	`; 
	break;

	case galleryClass.hasClass('AnimFadeIn'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from {
			opacity: 0.3;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes LightBoxAnimation {
		from {
			opacity: 0.3;
		}
		to {
			opacity: 1;
		}
	}

	`;
	break;

	case galleryClass.hasClass('flipInX'):
	lightBoxAnimation = `


	@-webkit-keyframes LightBoxAnimation {
		from {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0;
		}

		40% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}

		60% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			opacity: 1;
		}

		80% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
	}

	@keyframes LightBoxAnimation {
		from {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
			opacity: 0;
		}

		40% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}

		60% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
			opacity: 1;
		}

		80% {
			-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
			transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		}

		to {
			-webkit-transform: perspective(400px);
			transform: perspective(400px);
		}
	}

	`;
	break;

	case galleryClass.hasClass('rollIn'):
	lightBoxAnimation = `
	@-webkit-keyframes LightBoxAnimation {
		from {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
			transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none;
		}
	}

	@keyframes LightBoxAnimation {
		from {
			opacity: 0;
			-webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
			transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
		}

		to {
			opacity: 1;
			-webkit-transform: none;
			transform: none;
		}
	}
	`;
	break;


	case galleryClass.hasClass('slideInUp'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from {
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			visibility: visible;
		}

		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes LightBoxAnimation {
		from {
			-webkit-transform: translate3d(0, 100%, 0);
			transform: translate3d(0, 100%, 0);
			visibility: visible;
		}

		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}

	`;

	case galleryClass.hasClass('lightSpeedIn'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from {
			-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
			transform: translate3d(100%, 0, 0) skewX(-30deg);
			opacity: 0;
		}

		60% {
			-webkit-transform: skewX(20deg);
			transform: skewX(20deg);
			opacity: 1;
		}

		80% {
			-webkit-transform: skewX(-5deg);
			transform: skewX(-5deg);
			opacity: 1;
		}

		to {
			-webkit-transform: none;
			transform: none;
			opacity: 1;
		}
	}

	@keyframes LightBoxAnimation {
		from {
			-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
			transform: translate3d(100%, 0, 0) skewX(-30deg);
			opacity: 0;
		}

		60% {
			-webkit-transform: skewX(20deg);
			transform: skewX(20deg);
			opacity: 1;
		}

		80% {
			-webkit-transform: skewX(-5deg);
			transform: skewX(-5deg);
			opacity: 1;
		}

		to {
			-webkit-transform: none;
			transform: none;
			opacity: 1;
		}
	}

	`;



	case galleryClass.hasClass('bounceIn'):
	lightBoxAnimation = `

	@-webkit-keyframes LightBoxAnimation {
		from, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
		}

		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3);
		}

		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1);
		}

		40% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9);
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03);
		}

		80% {
			-webkit-transform: scale3d(.97, .97, .97);
			transform: scale3d(.97, .97, .97);
		}

		to {
			opacity: 1;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	@keyframes LightBoxAnimation {
		from, 20%, 40%, 60%, 80%, to {
			-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
		}

		0% {
			opacity: 0;
			-webkit-transform: scale3d(.3, .3, .3);
			transform: scale3d(.3, .3, .3);
		}

		20% {
			-webkit-transform: scale3d(1.1, 1.1, 1.1);
			transform: scale3d(1.1, 1.1, 1.1);
		}

		40% {
			-webkit-transform: scale3d(.9, .9, .9);
			transform: scale3d(.9, .9, .9);
		}

		60% {
			opacity: 1;
			-webkit-transform: scale3d(1.03, 1.03, 1.03);
			transform: scale3d(1.03, 1.03, 1.03);
		}

		80% {
			-webkit-transform: scale3d(.97, .97, .97);
			transform: scale3d(.97, .97, .97);
		}

		to {
			opacity: 1;
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	`;


	case galleryClass.hasClass('rubberBand'):
	lightBoxAnimation = `


	@-webkit-keyframes LightBoxAnimation {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(.95, 1.05, 1);
			transform: scale3d(.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, .95, 1);
			transform: scale3d(1.05, .95, 1);
		}

		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	@keyframes LightBoxAnimation {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(.95, 1.05, 1);
			transform: scale3d(.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, .95, 1);
			transform: scale3d(1.05, .95, 1);
		}

		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}

	`;


}











});




























