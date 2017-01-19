
$(document).ready(function(){

var imgUrl, imgIndex, imgCount, imgCount2, styleCss, lightBoxAnimation, className, next, prev, gallery;

// animations scc vars: ZoomIn, AnimRotate, AnimFadeIn, flipInX, rollIn, slideInUp, lightSpeedIn, bounceIn, rubberBand

$.fn.LightBox = function(){

var svgRightArrow = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="arrow next" viewBox="0 0 512 512" fill="#000000"><path d="M 64.00,416.00l 96.00,96.00l 256.00-256.00L 160.00,0.00L 64.00,96.00l 160.00,160.00L 64.00,416.00z"/></svg>';	
var svgLefttArrow = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="arrow prev" viewBox="0 0 512 512" fill="#000000"><path d="M 64.00,416.00l 96.00,96.00l 256.00-256.00L 160.00,0.00L 64.00,96.00l 160.00,160.00L 64.00,416.00z"/></svg>';	
var svgClose = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgclose"  viewBox="50 98.5 412 315" enable-background="new 50 98.5 412 315" xml:space="preserve"><polygon id="x-mark-icon" points="401.405,348.958 304.885,252.454 401.394,155.938 349.501,104.078 253.013,200.585   156.508,104.091 104.627,155.941 201.15,252.459 104.639,348.983 156.489,400.864 253.018,304.323 349.547,400.852 "/></svg>';
	
	$.fn.CreateLightBox = function(){ 
		$('body').append('<style id="lightBoxCss">'+ styleCss + lightBoxAnimation +'</style>');
		$('body').append('<div  id="lightBox" class="backgroun"><div class="imageBox">'+ svgLefttArrow +'</i><img src="" alt="">'+ svgRightArrow +'</i><div class="close" onclick="$.fn.DestroyLightBox();">'+ svgClose +'</div></div></div>');
	};
	
	$(this).CreateLightBox();

	$.fn.DestroyLightBox = function(){
		$('body #lightBox, #lightBoxCss, #Awesome').fadeOut();
	};

	$(this).on("click", function () {
		imgUrl = $(this).attr('src');
		imgIndex = $(this).index();
		$('#lightBox').find('img').attr('src', imgUrl);
		$('#lightBox').fadeIn();
		imgCount = $(this).parent().find('img');
		imgCount2 = $(this).parent().find('img').length;
	});

	next = $('#lightBox .next');
	prev = $('#lightBox .prev');

	next.click(function() {

		if ((imgIndex + 1) !== imgCount2) {
			imgUrl = imgCount.eq(imgIndex + 1).attr('src');
			imgIndex ++;
			$('#lightBox').find('img').attr('src', imgUrl);
		} else {
			imgUrl = imgCount.eq(0).attr('src');
			imgIndex = 0;
			$('#lightBox').find('img').attr('src', imgUrl);
		}
	});

	prev.click(function() {

		if ((imgIndex + 1) !== imgCount2) {
			imgUrl = imgCount.eq(imgIndex - 1).attr('src');
			imgIndex --;
			$('#lightBox').find('img').attr('src', imgUrl);
		} else {
			imgUrl = imgCount.eq(0).attr('src');
			imgIndex = 0;
			$('#lightBox').find('img').attr('src', imgUrl);
		}

	});
};

// LightBox Css
styleCss = `

#lightBox {
	display: none;
}

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
    border: 5px solid #000;
    border-radius: 10px;
    box-shadow: 0px 0px 60px 8px #bfbfbf;
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

svg.arrow {
	display: inline-block;
    width: 50px;
    cursor: pointer;
    margin-top: 35vh;
    fill: #dedede;
}

svg.arrow:hover {
	fill: #fffafa;
}

svg.arrow.prev {
	display: inline-block;
    width: 50px;
    transform: rotate(180deg);
}

svg.svgclose {
	width: 30px;
	height: 30px;
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
	break;

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
	break;


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
	break;

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
	break;

}

});
