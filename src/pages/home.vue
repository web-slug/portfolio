<template>
  <section class="home" id="home" data-scroll-index="0">
        <div class="content">
          <div class="glitch">
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
            <div class="glitch__img"></div>
          </div>
          <h2 class="content__title">Glitch Head</h2>
        </div>
    </section>
</template>

<script>



</script>

<style scoped>

.home__container {	
  max-width: 1200px;	
  margin: 0 auto;	
}	
.home{	
  position: relative;	
}	
.home__social__grp {	
display: inline-flex;	
  margin: auto;	
  position: absolute;	
  left: 16%;	
  bottom: 13%;	
  transform: translateX(201px);	
}	
.home__social__grp .home__social {	
  display: inline-flex;	
  justify-content: center;	
  align-items: center;	
  padding: 0.5em 0.2em;	
  width: 40px;	
  height: 40px;	
  color: white;	
  background-color: rgba(200, 200, 200, 0.2);	
  text-decoration: none;	
  transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);	
}	
.home__social__grp .home__social:first-child {	
  border-radius: 40px 0px 0px 40px;	
  width: 50px;	
}	
.home__social__grp .home__social:last-child {	
  width: 50px;	
  border-radius: 0px 40px 40px 0;	
}	
.home__social__grp .home__social:hover {	
  background-color: #fff;	
}	
.home__h1 {	
  font-size: clamp(30px, 3vw + 1rem, 65px);	
  font-family: "Rubik";	
  letter-spacing: 2px;	
  margin: 0 0 10px;	
}	
.home__h1-contain {	
  font-size: 2rem;	
  margin: auto;	
}	
.home__h1-contain .cd-headline {	
  display: flex;	
  justify-content: center;	
  margin-top: 10px;	
}	
.home__h1-contain .cd-headline span {	
  font-family: "Rubik";	
  font-weight: 700;	
  font-size: clamp(30px, 3.8vw + 1rem, 65px);	
}	



</style>