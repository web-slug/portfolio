<template>
    <section class="hero section" id="hero" data-scroll-index="1">
      <svg class="wave " version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve">
        <path style=""
          d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
        </path>
      </svg>
      <div class="hero__container container" >
		<div class="slides slides--contained effect-2">
			<div class="slide slide--current">
				<div class="slide__img glitch"  :style="{backgroundImage: `url('${image}')`}"></div>
				<div class="slide__text">
					<div class="slide__title">
						<p class="slide__description">Sourabh</p>
					</div>
				</div>
			</div>
			<div class="slide">
				<div class=" slide__img glitch"  :style="{backgroundImage: `url('${image2}')`}"></div>
				<div class=" slide__text">
					<div class="slide__title">
						<p class="slide__description">kevin</p>
					</div>
				</div>
			</div>
		</div>
		
		<nav class="slide-nav">
			<button class="slide-nav__button"><span>Previous</span></button>
			<button class="slide-nav__button"><span>Next</span></button>
		</nav>
      </div>
      <svg class="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 1920 81.717" enable-background="new 0 0 1920 81.717" xml:space="preserve">
        <path style=""
          d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
        </path>
      </svg>
    </section>
</template>

<script>
export default{
    name:'welocome',
	data(){
		return{
			image:require('../assets/img/hero.jpg'),
			image2:require('../assets/img/bg.jpg'),
		}
	},
    mounted(){

		{
    class Slide {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.slideImg = this.DOM.el.querySelector('.slide__img');
            this.bgImage = this.DOM.slideImg.style.backgroundImage;
            this.layout();
        }
        layout() {
            this.DOM.slideImg.innerHTML = `<div class='glitch__img' style='background-image: ${this.DOM.slideImg.style.backgroundImage};'></div>`.repeat(5);
            this.DOM.glitchImgs = Array.from(this.DOM.slideImg.querySelectorAll('.glitch__img'));
        }
        changeBGImage(bgimage, pos = 0, delay = 0) {
            setTimeout(() => this.DOM.glitchImgs[pos].style.backgroundImage = bgimage, delay);
        }
    }

    class GlitchSlideshow {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
            this.slidesTotal = this.DOM.slides.length;
            this.slides = [];
            this.DOM.slides.forEach(slide => this.slides.push(new Slide(slide)));
            this.current = 0;
            this.glitchTime = 1800;
            this.totalGlitchSlices = 5;
        }
        glitch(slideFrom, slideTo) {
            return new Promise((resolve) => {
                slideFrom.DOM.slideImg.classList.add('glitch--animate');
                
                const slideFromBGImage = slideFrom.bgImage;
                const slideToBGImage = slideTo.bgImage;

                for (let i = this.totalGlitchSlices-1; i >= 0; --i) {
                    slideFrom.changeBGImage(slideToBGImage, i, this.glitchTime/(this.totalGlitchSlices+1)*(this.totalGlitchSlices-i-1) + this.glitchTime/(this.totalGlitchSlices+1));
                }
                
                setTimeout(() => {
                    slideFrom.DOM.slideImg.classList.remove('glitch--animate');

                    // reset bgimages.
                    for (let i = this.totalGlitchSlices-1; i >= 0; --i) {
                        slideFrom.changeBGImage(slideFromBGImage, i, 0);    
                    }
				
                    resolve();
                }, this.glitchTime);
            });
        }
        navigate(dir) {
			
            if ( this.isAnimating ) return;
            this.isAnimating = true;

            const newCurrent =  dir === 'next' ?
                this.current < this.slidesTotal-1 ? this.current+1 : 0 :
                this.current > 0 ? this.current-1 : this.slidesTotal-1;
            
            this.glitch(this.slides[this.current], this.slides[newCurrent]).then(() => {
				
                this.DOM.slides[this.current].classList.remove('slide--current');
                this.current = newCurrent;
                this.DOM.slides[this.current].classList.add('slide--current');
                this.isAnimating = false;
            });
        }
    }

	const slideshow = new GlitchSlideshow(document.querySelector('.slides'));
	const nav = Array.from(document.querySelectorAll('.slide-nav__button'));
	nav[0].addEventListener('click', () => slideshow.navigate('prev'));
	nav[1].addEventListener('click', () => slideshow.navigate('next'));
}
     
    }
}
</script>

<style scoped>




.hero {
  background-color: #161617;
  position: relative;
  padding: 80px 0 100px;
}


.hero__container {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1025px) {
  .hero__container {
    flex-direction: column;
    text-align: center;
  }
  .hero__container .hero__img,
.hero__container .hero__txt {
    width: 100%;
    min-width: unset;
  }
  .hero__container .hero__img {
    max-width: 500px;
  }
}

.hero__img,
.hero__txt {
  width: 50%;
  min-width: 380px;
  margin: 0 auto;
}

.hero__img img {
  width: 75%;
  height: 100%;
  object-fit: cover;
}

.hero__txt {
  display: flex;
  align-items: center;
}

.hero__title {
  display: inline-block;
  font-family: "Rubik medium";
  background-color: #c49b66;
  color: #fff;
  letter-spacing: 5px;
  padding: 5px 10px;
  font-size: calc(1.2vw + 1.3rem);
}

.hero__title {
  margin-top: 0;
  margin-bottom: 32px;
}

.hero__subtitle {
  color: #fff;
  margin: 0em;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  font-family: "Rubik light";
}

.hero__p {
  color: #8f8f8f;
  letter-spacing: 0.5px;
  font-family: "Rubik";
  margin-bottom: 2em;
  font-size: calc(0.25vw + 0.8rem);
  line-height: 1.8;
}

.hero__who {
  margin-bottom: 1em;
  color: #8f8f8f;
  font-size: 0.75rem;
  font-family: "Rubik medium";
  letter-spacing: 8px;
}

.hero__btn__grp .btn {
  position: relative;
  transition: all 0.5s ease;
  overflow: hidden;
}
.hero__btn__grp .btn span {
  position: relative;
  outline: none;
  z-index: 2;
}
.hero__btn__grp .btn--skin {
  border-width: 1px;
  background-color: transparent;
  margin-right: 1em;
}
.hero__btn__grp .btn--skin--light {
  border-width: 1px;
  background-color: #fff;
  color: #c49b66;
}

.hero__btn__grp .btn::before,
.hero__btn__grp .btn::after {
  content: "";
  width: 0;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  transition: width 0.5s ease-in-out;
  opacity: 0.4;
  border-radius: 30px;
  border-width: 1px;
  z-index: 1;
}
.hero__btn__grp .btn::before {
  background-color: #c49b66;
  opacity: 0.9;
  transition-delay: 200ms;
}
.hero__btn__grp .btn::after {
  background-color: #c49b668c;
  transition-delay: 50ms;
}
.hero__btn__grp .btn:hover::after,
.hero__btn__grp .btn:hover::before {
  width: 100%;
}
.hero__btn__grp .btn--skin--light:hover {
  color: white;
}

@media (max-width: 400px) {
  .hero__img,
.hero__txt {
    min-width: 300px;
  }

  .hero__btn__grp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
  }
}

.slides {
	position: relative;
}

.slides--contained {
	margin: 6rem 11rem 0 0;
}

.js .slides--contained {
	margin: 0 11rem 0 0;
	width: calc(100vw - 11rem - 4rem);
	display: flex;
	justify-content: flex-end;
}

.js .slide {
	position: absolute;
	opacity: 0;
	top: 0;
	left: 0;
	pointer-events: none;
}

.js .slide--current {
	position: relative;
	opacity: 1;
	pointer-events: auto;
}

.slide__img {
	width: 100vw;
	height: 100vh;
}

.slides--contained .slide__img {
	width: 600px;
	max-width: 100%;
}

.slide__text {
	position: absolute;
	top: 50%;
	left: 20vw;
}

.slides--contained .slide__text {
	left: -10vw;
}

.slide:first-child .slide__text {
	color: #ffae1a;
}

.slide:nth-child(2) .slide__text {
	color: #58e8b3;
}

.slide:nth-child(3) .slide__text {
	color: #15c9ff;
}

.slide:nth-child(4) .slide__text {
	color: #ffc107;
}

.slide:nth-child(5) .slide__text {
	color: #fff;
}

.slide--current .slide__title {
	animation: glitch-anim-title 0.25s linear alternate 1 backwards;
}

.slide__title {
	font-weight: 400;
	font-size: 6rem;
	margin: 0 0 0.25rem;
	font-family: 'Playfair Display', sans-serif;
	font-weight: 900;
	text-transform: none;
	cursor: default;
}

.slide__description {
	font-size: 1.35rem;
	font-weight: 400;
	text-transform: none;
	margin: 0;
	max-width: 70%;
	cursor: default;
	color: #fff;
}

.slide__description a {
	color: #aaa;
	pointer-events: auto;
}

.slide__description a:hover {
	color: #fff;
}

.slide-nav {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	left: 20vw;
	width: 60vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
}

.slides--contained + .slide-nav {
	flex-direction: row;
	justify-content: flex-start;
	height: auto;
	margin: 0 0 0 0.25rem;
	top: calc(50% - 0.5rem);
	left: calc(100vw - 600px - 11rem - 4rem - 10vw);
}

.slide-nav__button {
	display: block;
	background: none;
	border: 0;
	margin: 0 1rem 0 0;
	padding: 0;
	text-transform: inherit;
	letter-spacing: inherit;
	font-weight: inherit;
	color: var(--color-link);
}

.slide-nav__button span {
	display: block;
}

.slide-nav__button:focus {
	outline: none;
}

.slide-nav__button:hover span {
	animation: glitch-anim-text 0.5s linear alternate 1 backwards;
}

.slide-nav__text {
	font-size: 4vw;
	margin: 0.75rem 0;
	font-family: 'Playfair Display', sans-serif;
	font-weight: 900;
	text-transform: lowercase;
	letter-spacing: 0;
	color: inherit;
}

.slide-nav__text:hover {
	color: var(--color-link-hover);
}

.slide-nav__text--current:hover,
.slide-nav__text:focus {
	color: var(--color-link);
}

.slide-nav__text--current {
	background-image: linear-gradient(transparent 58%, var(--color-link) 58%, var(--color-link) 64%,transparent 64%);
}

@media screen and (max-width: 65em) {
	.slides--contained {
		margin: 0 !important;
		width: 80vw !important;
		padding: 0 0 2rem 0;
		justify-content: center !important;
	} 
	.slide__text {
		position: relative;
		top: auto;
		left: auto;
		margin: 1rem 0 0 0;
		text-align: center;
	}
	.slides--contained .slide__text {
		left: auto;
	}
	.slide {
		width: 100%;
	}
	.slide__title {
		font-size: 2rem;
	}
	.slide__description {
		font-size: 1rem;
	}
	.slides--contained .slide__img {
		height: 80vh;
		width: 100%;
	}
	.slide__description {
		max-width: none;
	}
	.slides--contained + .slide-nav {
		left: auto !important;
		justify-content: center !important;
		position: relative !important;
		top: auto !important;
	}
	.slide-nav__text {
		font-size: 1.5rem;
	}
}

.effect-1 {
	--gap-horizontal: 40px;
	--gap-vertical: 50px;
	--time-anim: 2s;
	--delay-anim: 0s;
	--blend-mode-1: none;
	--blend-mode-2: luminosity;
	--blend-mode-3: none;
	--blend-mode-4: none;
	--blend-mode-5: overlay;
	--blend-color-1: transparent;
	--blend-color-2: #436161;
	--blend-color-3: transparent;
	--blend-color-4: transparent;
	--blend-color-5: #af4949;
}

.effect-2 {
	--gap-horizontal: 10px;
	--gap-vertical: 5px;
	--time-anim: 2s;
	--delay-anim: 0s;
	--blend-mode-1: none;
	--blend-mode-2: none;
	--blend-mode-3: none;
	--blend-mode-4: none;
	--blend-mode-5: overlay;
	--blend-color-1: transparent;
	--blend-color-2: transparent;
	--blend-color-3: transparent;
	--blend-color-4: transparent;
	--blend-color-5: #af4949;
}

/* Glitch styles */
.glitch {
	overflow: hidden;
	position: relative;
}

.glitch,
.glitch__img {
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: cover;
}

.glitch__img {
	position: absolute;
	top: calc(-1 * var(--gap-vertical));
	left: calc(-1 * var(--gap-horizontal));
	width: calc(100% + var(--gap-horizontal) * 2);
	height: calc(100% + var(--gap-vertical) * 2);
	background-color: var(--blend-color-1);
	transform: translate3d(0,0,0);
	background-blend-mode: var(--blend-mode-1);
}

.glitch__img:nth-child(n+2) {
	opacity: 0;
}

.glitch--animate .glitch__img:nth-child(n+2) {
	animation-duration: var(--time-anim);
	animation-delay: var(--delay-anim);
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-fill-mode: forwards;
}

.glitch--animate .glitch__img:nth-child(2) {
	background-color: var(--blend-color-2);
	background-blend-mode: var(--blend-mode-2);
	animation-name: glitch-anim-1;
}

.glitch--animate .glitch__img:nth-child(3) {
	background-color: var(--blend-color-3);
	background-blend-mode: var(--blend-mode-3);
	animation-name: glitch-anim-2;
}

.glitch--animate .glitch__img:nth-child(4) {
	background-color: var(--blend-color-4);
	background-blend-mode: var(--blend-mode-4);
	animation-name: glitch-anim-3;
}

.glitch--animate .glitch__img:nth-child(5) {
	background-color: var(--blend-color-5);
	background-blend-mode: var(--blend-mode-5);
	animation-name: glitch-anim-flash;
}

/* Fade effect */
.js body {
	opacity: 0;
	transition: opacity 0.3s;
}

.js body.render {
	opacity: 1;
}


/* Animations */

@keyframes glitch-anim-1 {
	0%, 100% { 
		opacity: 1;
		transform: translate3d(var(--gap-horizontal),0,0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}
	20% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	30% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	40% {
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	50% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	55% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	60% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	65% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	70% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	85% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
		clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
	}
	95% {
		-webkit-clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
		clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
	}
}

@keyframes glitch-anim-2 {
	0%, 100% { 
		opacity: 1;
		transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
		-webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
		clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
	}
	10% {
		-webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	15% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
		clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
	}
	17% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	19% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
		clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
	}
	33% {
		-webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
		clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
	}
	35% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	40% {
		-webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
		clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
	}
	45% {
		-webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
		clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
	}
	49% {
		-webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
		clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
	}
	50% {
		-webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
		clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
	}
	55% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
		clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
	}
	60% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	70% {
		-webkit-clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
		clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
	}
	80% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
		clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
	}
	90% {
		-webkit-clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
		clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
	}
}

@keyframes glitch-anim-3 {
	0%, 100% { 
		opacity: 1;
		transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
		clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
	}
	5% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
		clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
	}
	11% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
		clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
	}
	20% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	25% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
	}
	35% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
		clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
	}
	42% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
		clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
	}
	48% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
		clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
	}
	50% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	56% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
		clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
	}
	61% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
		clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
	}
	68% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
		clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
	}
	72% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
		clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
	}
	77% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
		clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
	}
	81% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
		clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
	}
	86% {
		-webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
		clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
	}
	90% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	92% {
		-webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
		clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
	}
	94% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
		clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
	}
}

@keyframes glitch-anim-text {
	0%, 100% { 
		transform: translate3d(2px, -2px, 0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	20% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	41% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	52% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	61% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	75% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	96% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
}

@keyframes glitch-anim-title {
	0%, 100% { 
		transform: translate3d(2px, -2px, 0);
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	20% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	41% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	52% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	61% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	75% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	96% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
}

/* Flash */
@keyframes glitch-anim-flash {
	0%, 5% { 
		opacity: 0.2; 
		transform: translate3d(var(--gap-horizontal), var(--gap-vertical), 0);
	}
	5.5%, 100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
	}
}




</style>
