<template>
    <section class="services section" id="services" data-scroll-index="2">
      <div class="services__container container">
        <div class="services__heading heading">
          <h2>Services</h2>
        </div>
        <div class="services__services">
          <div class="services__item">
            <i class="fas fa-palette"></i>
            <h3 class="service__title">Web Design</h3>
            <p class="service__p">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              Quisque volutpat</p>
          </div>
          <div class="services__item">
            <i class="fas fa-shield-alt"></i>
            <h3 class="service__title">Development</h3>
            <p class="service__p">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              Quisque volutpat</p>
          </div>
          <div class="services__item">
            <i class="fas fa-pencil-ruler"></i>
            <h3 class="service__title">Branding</h3>
            <p class="service__p">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              Quisque volutpat</p>
          </div>
          <div class="services__item">
            <i class="fas fa-chart-line"></i>
            <h3 class="service__title">Marketing</h3>
            <p class="service__p">Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
              Quisque volutpat</p>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
    name:'service'
}
</script>
<style scoped>

.services {
  background-color: #0f0f0f;
}

.services__services {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: min(5%, 50px);
  gap: 15px;
}

.services__item {
  flex: 0 0 clamp(250px, 25%, 288px);
  text-align: center;
  background-color: #0a0a0c;
  padding: 3em 1em 2em;
  border-radius: 10px;
}
@media (max-width: 1025px) {
  .services__item {
    flex: 0 0 clamp(250px, 45%, 400px);
  }
}
.services__item .fas {
  display: inline-block;
  color: #c49b66;
  font-size: 45px;
  width: 85px;
  height: 85px;
  line-height: 85px;
  margin-bottom: 30px;
  position: relative;
  transition: all 0.4s;
  z-index: 3;
}
.services__item .fas::after {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 30px;
  background: rgba(53, 14, 14, 0.55);
  z-index: -1;
  transform: rotate(45deg);
  transition: all 0.4s;
}
.services__item:hover .fas {
  color: white;
}
.services__item:hover .fas::after {
  transform: rotate(0deg);
  background-color: #c49b66;
}

.service__title {
  color: #fff;
  font-weight: 3 0;
  font-family: "Rubik medium";
}

.service__p {
  color: #8f8f8f;
  font-weight: 300;
  font-family: "Rubik";
}


</style>