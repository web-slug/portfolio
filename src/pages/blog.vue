<template>
    <section class="blog section" id="blog" data-scroll-index="4">
      <div class="container">
        <div class="blog__heading heading">
          <h2>Our Blog</h2>
        </div>
        <div class="blog__container">
          <div class="blog__item">
            <div class="blog__img__contain">
              <img src="../assets/img/blog/01.jpg" alt="" class="blog__img" />
            </div>
            <div class="blog__txtoly">
              <p class="blog__p">WORDPRESS / MARCH 21 - 2018</p>
              <h2 class="blog__title">Your Ideal Wordpress Theme is Here</h2>
              <a href="" class="blog__link">Read More</a>
            </div>
          </div>
          <div class="blog__item">
            <div class="blog__img__contain">
              <img src="../assets/img/blog/02.jpg" alt="" class="blog__img" />
            </div>
            <div class="blog__txtoly">
              <p class="blog__p">THEMEFOREST / MARCH 21 - 2018</p>
              <h2 class="blog__title">How To Improve Your Business ?</h2>
              <a href="" class="blog__link">Read More</a>
            </div>
          </div>
          <div class="blog__item">
            <div class="blog__img__contain">
              <img src="../assets/img/blog/03.jpg" alt="" class="blog__img" />
            </div>
            <div class="blog__txtoly">
              <p class="blog__p">LIFESTYLE / MARCH 21 - 2018</p>
              <h2 class="blog__title">Style workspaces for your inspiration.</h2>
              <a href="" class="blog__link">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name:'blog'
}
</script>

<style scoped>
.blog {
  background-color: #0f0f0f;
}

.blog__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: min(35px, 5vw);
}
@media (max-width: 1025px) {
  .blog__container {
    gap: 5px;
  }
}

.blog__item {
  flex: 0 0 clamp(300px, 33%, 375px);
  position: relative;
  overflow: hidden;
  min-width: 300px;
}
@media (max-width: 1025px) {
  .blog__item {
    flex: 0 0 clamp(300px, 33%, 324px);
  }
}
.blog__item .blog__img__contain {
  background-color: rgba(0, 0, 0, 0.171);
  filter: blur(2px);
  transition: all 0.5s;
}
.blog__item .blog__txtoly {
  position: absolute;
  bottom: 0;
  padding: 2em;
  color: white;
  transform: translateY(55px);
  transition: all 0.3s;
}
.blog__item .blog__txtoly .blog__p {
  color: #c49b66;
  font-family: "Rubik";
  letter-spacing: 1px;
  font-size: 0.8rem;
}
.blog__item .blog__txtoly .blog__title {
  font-family: "Rubik medium";
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.blog__img {
  width: 100%;
  object-fit: cover;
}

.blog__item:hover .blog__img__contain {
  filter: none;
  transform: scale(1.05, 1.05);
}
.blog__item:hover .blog__txtoly {
  transform: translateY(0px);
}

.blog__link {
  text-decoration: none;
  font-family: "Rubik";
  padding: 0.5em;
  color: white;
  border-bottom: 1px solid #c49b66;
}

</style>