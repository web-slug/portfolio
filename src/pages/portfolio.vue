<template>
    <section class="portfolio section" id="portfolio" data-scroll-index="3">
    <svg class="wave black" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717"
      enable-background="new 0 0 1920 81.717" xml:space="preserve">
      <path style=""
        d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
      </path>
    </svg>
    <div class="container portfolio__container">
      <div class="portfolio__heading heading">
        <h2>
          Portfolio
        </h2>
      </div>
      <div class="filtering filter-button-group">
        <button class="btn btn__filter active" data-filter="*">ALL</button>
        <button class="btn btn__filter" data-filter=".brand">BRAND</button>
        <button class="btn btn__filter" data-filter=".web">DESIGN</button>
        <button class="btn btn__filter" data-filter=".graphic">GRAPHIC</button>
      </div>
      <div class="portfolio__grid gallery">
        <div class="items graphic">
          <div class="pf__item">
            <img src="../assets/img/portfolio/1.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/1.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items web">
          <div class="pf__item">
            <img src="../assets/img/portfolio/2.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/2.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items width2 graphic">
          <div class="pf__item">
            <img src="../assets/img/portfolio/3.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/3.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items width2 brand">
          <div class="pf__item">
            <img src="../assets/img/portfolio/4.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/4.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items brand">
          <div class="pf__item">
            <img src="../assets/img/portfolio/5.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/5.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items web">
          <div class="pf__item">
            <img src="../assets/img/portfolio/6.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/6.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
        <div class="items brand">
          <div class="pf__item">
            <img src="../assets/img/portfolio/7.jpg" alt="" class="pf__img" />
            <div class="pf__txtoly">
              <div class="pf__txt">
                <h3 class="pf__title">Creative Design</h3>
                <p class="pf__p">Work Description</p>
              </div>
              <a href="../assets/img/portfolio/7.jpg" class="popup"><i class="fas fa-image"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="wave black" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717"
      enable-background="new 0 0 1920 81.717" xml:space="preserve">
      <path style=""
        d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
      </path>
    </svg>
  </section>
</template>
<script>
export default {
    name:'portfolio'
}
</script>

<style scoped>
.portfolio {
  position: relative;
  background-color: #161617;
  height: max-content;
}

.filter-button-group {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.filter-button-group .btn__filter {
  margin: 0em 0.5em;
  padding: 5px 20px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.3px;
}
.filter-button-group .btn__filter:active {
  background-color: #c49b66;
}
.filter-button-group .active {
  outline: none;
  stroke-width: 0px;
  background-color: #c49b66;
}

.gutter-sizer {
  width: 20px;
}

.portfolio__grid {
  width: 100% !important;
  text-align: center;
}

.items {
  margin-top: 60px;
  padding: 0 30px;
  width: 50%;
}

.pf__item {
  position: relative;
  border-radius: 5px;
}
.pf__item .pf__img {
  width: 100%;
  vertical-align: middle;
  height: auto;
}
.pf__item .pf__txtoly {
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  opacity: 0;
  transform: translateY(10px);
  transition: all 500ms ease;
}
.pf__item .pf__txtoly .pf__txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
}
.pf__item .popup {
  position: absolute;
  right: 8px;
  bottom: 8px;
}
.pf__item .popup i {
  font-size: 1.5rem;
  color: #c49b66;
}
.pf__item .pf__title {
  margin-bottom: 2em;
  -webkit-animation-name: glitch-anim-text;
  animation-name: glitch-anim-text;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.pf__item .pf__title,
.pf__item .pf__p {
  font-family: "Rubik";
  transition: all 0.5s ease;
}
.pf__item:hover .pf__txtoly {
  opacity: 1;
  transform: translateY(0px);
}
.pf__item:hover .pf__title,
.pf__item:hover .pf__p {
  font-family: "Rubik";
  margin: 0.4em;
}

.width2 {
  width: 25%;
}

@media (max-width: 1082px) {
  .items,
.width2 {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    min-width: 300px;
  }
}
@media (max-width: 705px) {
  .items,
.width2 {
    width: 100%;
  }
}
@media (max-width: 460px) {
  .items {
    padding: 0;
    min-width: unset;
    margin-top: 10px;
  }

  .filter-button-group .btn__filter {
    font-size: 0.6rem;
    padding: 7px 12px;
  }
}
</style>