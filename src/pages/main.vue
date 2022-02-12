<template>

       
      <home/>
      <welcome/>
      <service/>
      <portfolio/>
      <!-- <blog/> -->
      <contact/>
      
    
 
</template>

<script>

import home from './home.vue';
import welcome from './welcome.vue';
import service from './service.vue';
import portfolio from './portfolio.vue';
// import blog from  './blog.vue'
import contact  from  './contact.vue';

export default {
  name: 'App',
  components: {
    home,
    welcome,
    service,
    portfolio,
    // blog,
    contact

  }
}
</script>

<style>


@font-face {
  font-family: "Rubik";
  src: url("../assets/fonts/Rubik-Regular.ttf");
}
@font-face {
  font-family: "Rubik light";
  src: url("../assets/fonts/Rubik-Light.ttf");
}
@font-face {
  font-family: "Rubik medium";
  src: url("../assets/fonts/Rubik-Medium.ttf");
}
@font-face {
  font-family: "Rubik bold";
  src: url("../assets/fonts/Rubik-Bold.ttf");
}
@font-face {
  font-family: "Rubik black";
  src: url("../assets/fonts/Rubik-Black.ttf");
}
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1024px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.section {
  padding: max(40px, 10vw) 0em max(40px, 8vw);
}

h1,
h2,
h3,
h5,
h6 {
  margin: 0;
  padding: 0;
}




.loading-finished {
  display: none;
}

.loading .gooey,.loading .glitch{
width: 100%;
height: 100%;
}
.loading .glitch__img{
  position: absolute;  
  width: 40%;
  height: calc(100% + 5px * 2);
  background: url(../assets/img/bg.jpg) no-repeat 50% 0;
  background-color: transparent;
  background-size: cover;
  transform: translate3d(0,0,0);
  background-blend-mode: none;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  z-index: 9999999999999;
}

.gooey {
  position: absolute;
  top: 15%;
  left: 30%;  
}
.gooey img{ 
width: 100%;
height: 100%;
max-width: 50%;
max-height: 54%;
}

.gooey .dot {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
  transform: translateX(0);
  animation: dot 5s infinite;
}

.gooey .dots {
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: dots 5s infinite;
}

.gooey .dots span {
  display: block;
  float: left;
  width: 16px;
  height: 16px;
  margin-left: 16px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
}

.heading {
  text-align: center;
}
.heading h2 {
  font-size: calc(3.8vw + 1.4rem);
  font-family: "Rubik black";
  color: #222;
  background-clip: text;
  letter-spacing: 1px;
  font-weight: 300;
  margin-bottom: 50px;
  transition: all 100ms ease-in-out;
}
.heading h2:hover {
  -webkit-text-stroke: 1px #333;
  color: transparent;
}

.btn {
  font-family: "Rubik medium";
  font-weight: 300;
  padding: 12px 34px;
  border-radius: 30px;
  border-color: white;
  color: #fff;
  font-size: 0.875rem;
  line-height: 18.5px;
  background-color: transparent;
  outline: none;
  border-width: 1px;
}
.btn:hover {
  border-color: #c49b66;
}

button:link,
button:visited,
button:checked {
  outline: none;
}

@media (max-width: 500px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
}


.mfp-zoom-out {
  /* start state */
  /* animate in */
  /* animate out */
}
.mfp-zoom-out .mfp-with-anim {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform: scale(1.3);
}
.mfp-zoom-out.mfp-bg {
  opacity: 0;
  transition: all 0.3s ease-out;
}
.mfp-zoom-out.mfp-ready .mfp-with-anim {
  opacity: 1;
  transform: scale(1);
}
.mfp-zoom-out.mfp-ready.mfp-bg {
  opacity: 0.8;
}
.mfp-zoom-out.mfp-removing .mfp-with-anim {
  transform: scale(1.3);
  opacity: 0;
}
.mfp-zoom-out.mfp-removing.mfp-bg {
  opacity: 0;
}

.wave {
  fill: #161617;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(180deg);
  background-color: #161617;
}
.wave.black {
  background-color: #0f0f0f;
}

svg.wave:nth-child(3) {
  bottom: 0;
  top: 100%;
  transform: rotate(0deg) translateY(0%);
}

.hero .wave {
  transform: rotate(180deg) translateY(100%);
  background-color: transparent;
}

a {
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;
}
a:hover {
  color: #c49b66;
}


.right {
  text-align: right;
  width: 100%;
}

.demo-1 {
	--color-text: #fff;
	--color-bg: #000;
	--color-link: #f9d77e;
	--color-link-hover: #fff;
	--color-info: #efc453;
	--glitch-width: 100vw;
	--glitch-height: 100vh;
	--gap-horizontal: 10px;
	--gap-vertical: 5px;
	--time-anim: 4s;
	--delay-anim: 2s;
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

.imgloaded .content__title,
.imgloaded .content__text {
	animation-name: glitch-anim-text;
	animation-duration: 4s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
.imgloaded .glitch__img {
background-blend-mode: color-dodge;
}
.content__title {
	font-size: 12vw;
	margin: 35vh 0 0 0;
	position: relative;
	font-family: 'Playfair Display', serif;
	animation-delay: calc(2S + 4s * 0.2);
	color:white
}

.content__text {
	font-family: 'IM Fell English', serif;
	position: absolute;
	font-size: 1.5em;
	top: 4em;
	right: 10vw;
	max-width: 500px;
	text-align: right;
	font-weight: 400;
	animation-delay: calc(2S + 4s * 0.25);
	color:white;
}

@media screen and (max-width: 55em) {
	.content__text {
		position: relative;
		right: auto;
		top: auto;
		font-size: 1.25em;
		padding: 0 1em;
		text-align: center;
	}
}
@media screen and (max-width: 55em) {
	.content {
		flex-direction: column;
	}
}

/* Glitch styles */
.glitch {
	/* position: absolute;
	top: 0;
	left: 0; */
	/* width: 100vw;
	height: 100vh; */
	/* overflow: hidden; */
}
.header__logo img{
	width: 100%;
    height: 100%;
    max-width: 10%;
}
.header__nav,.header__logo{
flex:0 0 50%;
}
@media screen and (max-width: 55em) {
.header__logo img{
	width: 100%;
	height: 100%;
	max-width: 20%;
}
}
.glitch__img {
	position: absolute;
	top: calc(-1 * 5px);
	left: calc(-1 * 10px);
	width: calc(100% + 15px);
	height: calc(100% + 5px * 2);
	background: url(../assets/img/bg.jpg) no-repeat 50% 0;
	background-color: transparent;
	background-size: cover;
	transform: translate3d(0,0,0);
	background-blend-mode: none;
}

.glitch__img:nth-child(n+2) {
	opacity: 0;
}
.content {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	min-height: 100vh;
	overflow: hidden;
}
.imgloaded .glitch__img:nth-child(n+2) {
	animation-duration: 4s;
	animation-delay: 2S;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}

.imgloaded .glitch__img:nth-child(2) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-1;
}

.imgloaded .glitch__img:nth-child(3) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-2;
}

.imgloaded .glitch__img:nth-child(4) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-3;
}

.imgloaded .glitch__img:nth-child(5) {
	background-color: transparent;
	background-blend-mode: none;
	animation-name: glitch-anim-flash;
}

/* Animations */

@keyframes glitch-anim-1 {
	0% { 
		opacity: 1;
		transform: translate3d(10px,0,0);
		-webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}
	2% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	4% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	6% {
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	8% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	10% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	12% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	14% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	16% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	18% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	20% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
	21.9% {
		opacity: 1;
		transform: translate3d(10px,0,0);
	}
	22%, 100% {
		opacity: 0;
		transform: translate3d(0,0,0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}

@keyframes glitch-anim-2 {
	0% { 
		opacity: 1;
		transform: translate3d(calc(-1 * 10px),0,0);
		-webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
		clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
	}
	3% {
		-webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	5% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
		clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
	}
	7% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	9% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
		clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
	}
	11% {
		-webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
		clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
	}
	13% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	15% {
		-webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
		clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
	}
	17% {
		-webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
		clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
	}
	19% {
		-webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
		clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
	}
	20% {
		-webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
		clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
	}
	21.9% {
		opacity: 1;
		transform: translate3d(calc(-1 * 10px),0,0);
	}
	22%, 100% {
		opacity: 0;
		transform: translate3d(0,0,0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}

@keyframes glitch-anim-3 {
	0% { 
		opacity: 1;
		transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
		clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
	}
	1.5% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
		clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
	}
	2% {
		-webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
		clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
	}
	2.5% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	3% {
		-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
		clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
	}
	5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
		clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
	}
	5.5% {
		-webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
		clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
	}
	7% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
		clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
	}
	8% {
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	9% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
		clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
	}
	10.5% {
		-webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
		clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
	}
	11% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
		clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
	}
	13% {
		-webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
		clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
	}
	14% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
		clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
	}
	14.5% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
		clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
	}
	15% {
		-webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
		clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
	}
	16% {
		-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	18% {
		-webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
		clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
	}
	20% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
		clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
	}
	21.9% {
		opacity: 1;
		transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1,-1,1);
	}
	22%, 100% {
		opacity: 0;
		transform: translate3d(0,0,0);
		-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		clip-path: polygon(0 0, 0 0, 0 0, 0 0);
	}
}

@keyframes glitch-anim-text {
	0% { 
		transform: translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1);
		-webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
		clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
	}
	2% {
		-webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
		clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
	}
	4% {
		-webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
		clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
	}
	5% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
		clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
	}
	6% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	7% {
		-webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	8% {
		-webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	9% {
		-webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
		clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
	}
	9.9% {
		transform: translate3d(calc(-1 * 10px),0,0) scale3d(-1,-1,1);
	}
	10%, 100% {
		transform: translate3d(0,0,0) scale3d(1,1,1);
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
}

/* Flash */
@keyframes glitch-anim-flash {
	0%, 5% { 
		opacity: 0.2; 
		transform: translate3d(10px, 5px, 0);
	}
	5.5%, 100% {
		opacity: 0;
		transform: translate3d(0, 0, 0);
	}
}

</style>
