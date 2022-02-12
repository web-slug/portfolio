<template>
  
  <section class="footer section">
      <div class="footer__heading heading">
        <a class="header__logo" href="#"><img src="../assets/gh.png" alt=""  height="10 0" width="100" /></a>
      </div>
      <div class="footer__socialgrp">
        <a href="" class="footer__social"><i class="fab fa-facebook-f"></i></a>
        <a href="" class="footer__social"><i class="fab fa-twitter"></i></a>
        <a href="" class="footer__social"><i class="fab fa-instagram"></i></a>
        <a href="" class="footer__social"><i class="fab fa-linkedin-in"></i></a>
        <a href="" class="footer__social"><i class="fab fa-behance"></i></a>
      </div>
      <p class="footer__p">© 2021 Saurabh. All Rights Reserved.</p>
  </section>
  
</template>

<script>
export default {
  name: 'ftr'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 50px;
}

.footer__heading h2 {
  margin: 0.5em;
}

.footer__socialgrp {
  padding: 0.5em 0em;
}

.footer__social {
  display: inline-block;
  color: #c49b66;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 15px 10px;
  position: relative;
  z-index: 2;
  text-align: center;
}
.footer__social::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  transform: rotate(45deg);
  background-color: #222;
  z-index: -1;
  transition: all 0.4s;
}

.footer__social:hover {
  background-color: #c49b66;
}
.footer__social:hover::after {
  color: white;
  transform: rotate(0deg);
}

.footer__p {
  color: white;
  font-family: "Rubik";
  font-size: 0.9rem;
}
</style>
