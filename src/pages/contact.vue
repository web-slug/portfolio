<template>
    <section class="contact section" id="contact" data-scroll-index="5">
    <svg class="wave black" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 81.717"
      enable-background="new 0 0 1920 81.717" xml:space="preserve">
      <path style=""
        d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z">
      </path>
    </svg>
    <div class="container">
      <div class="contact__heading heading">
        <h2>Contact Us</h2>
      </div>
      <div class="contact__container">
        <div class="contact__address contact__section">
          <p class="contact__p"><span class="contact__span">Phone:</span><br />+919924285936</p>
          <p class="contact__p"><span class="contact__span">Address:</span><br />3rd Avenue,
            Upper East Side, Sans Francisco</p>
          <p class="contact__p"><span class="contact__span">Email:</span><br /><a
              href="mailto:randomemail@gmail.com">randomemail@gmail.com</a></p>
        </div>
        <div class="contact__form contact__section">
          <div class="contact__first">
            <input type="text" name="text" class="form-control" placeholder="Name" />
            <input type="email" name="email" class="form-control" placeholder="Email" />
          </div>
          <input type="text" name="Subject" class="form-control" placeholder="Subject" />
          <textarea name="Message" class="form-control" placeholder="Message"></textarea>
          <div class="btn-grp">
            <button class="btn btn--skin--light"><span>Send Message</span></button>
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

<style scoped>
.contact {
  background-color: #161617;
  position: relative;
}

.contact__container {
  display: flex;
  flex-wrap: wrap;
}
.contact__container .contact__address {
  width: 40%;
  min-width: 230px;
}
.contact__container .contact__form {
  width: 60%;
  min-width: 350px;
}
@media (max-width: 1025px) {
  .contact__container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    text-align: center;
  }
  .contact__container > div {
    width: 100%;
  }
  .contact__container .contact__form {
    order: -1;
    width: 100%;
    max-width: 650px;
  }
}

.contact__address {
  background-image: url("../assets/img/map.png");
  background-size: cover;
}
.contact__address .contact__p {
  margin: 0em 0em 2em;
  line-height: 1.5;
  color: white;
  font-family: "Rubik";
  font-size: 0.9rem;
}
.contact__address .contact__p .contact__span {
  display: inline-block;
  font-size: 1.1rem;
  color: #c49b66;
  padding-bottom: 0.7em;
  text-transform: uppercase;
}

.contact__form {
  display: flex;
  flex-direction: column;
}
.contact__form .contact__first {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contact__form .contact__first .form-control {
  width: 49%;
}
@media (max-width: 1025px) {
  .contact__form .contact__first .form-control {
    width: 100%;
  }
}
.contact__form .form-control {
  margin-bottom: 1em;
  background-color: #222;
  border-color: transparent;
  color: white;
  padding: 0.7em;
  border-radius: 30px;
  font-size: 1rem;
  font-family: "Rubik medium";
  transition: all 0.4s ease;
  outline: 2px solid transparent;
}
.contact__form .form-control:focus-visible {
  outline: 2px solid #c49b66;
}
.contact__form textarea.form-control {
  border-radius: 10px 10px 0px 10px;
  height: 200px;
}

</style>