<template>
  
   <header class="header">
    <div class="container header__container">
      <a class="header__logo" href="#"><img src="../assets/gh.png" alt="" /></a>
         
      <input type="checkbox" name="header__toggler" id="header__toggler" />
      <label for="header__toggler" class="header__toggler"><i class="fas fa-bars"></i></label>
      <nav class="header__nav" id="nav">
        <ul class="header__ul">
          <li class="header__li">
            <a href="#home" class="header__link" data-scroll-nav="0">Home</a>
          </li>
          <li class="header__li">
            <a href="#hero" class="header__link" data-scroll-nav="1">About</a>
          </li>
          <li class="header__li">
            <a href="#services" class="header__link" data-scroll-nav="2">Services</a>
          </li>
          <li class="header__li">
            <a href="#portfolio" class="header__link" data-scroll-nav="3">Portfolio</a>
          </li>
          <li class="header__li">
            <a href="#blog" class="header__link" data-scroll-nav="4">Blog</a>
          </li>
          <li class="header__li">
            <a href="#contact" class="header__link" data-scroll-nav="5">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
</template>

<script>
export default {
  name: 'hdr'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.header-link:focus {
  outline: none;
}

a {
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;
}
a:hover {
  color: #c49b66;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 1em 0em;
  transition: background-color 0.6s ease;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.header__logo {
  color: #fff;
  margin: 0;
}

.menu-icon {
  width: max-content;
}

#header__toggler,
.header__toggler {
  display: none;
}

.header__ul {
  display: flex;
  list-style: none;
  width: max-content;
}

.header__li {
  padding: 0.2em 0.8em;
}
.header__li .header__link {
  color: white;
  text-decoration: none;
  font-size: 0.87rem;
  font-family: "Rubik medium";
  letter-spacing: 1.5px;
  transition: all 0.5s ease;
}

@media (max-width: 768px) {
  .header__toggler {
    display: initial;
    position: absolute;
    z-index: 2;
    right: 0;
    width: 40px;
    font-size: 1.5rem;
  }
  .header__toggler i {
    color: white;
  }

  .header__nav {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #161617;
    transform-origin: top;
    transform: scale(1, 0);
    width: 100%;
    transition: all 0.5s ease;
  }

  .header__ul {
    flex-direction: column;
  }

  .header__li {
    opacity: 0;
    padding: 0.6em 0em;
  }

  #header__toggler:checked ~ .header__nav {
    transform: scale(1, 1);
  }

  #header__toggler:checked ~ .header__nav .header__li {
    opacity: 1;
    transition: opacity 0.6s ease;
  }
}
.header.active {
  background-color: #161617;
}

.header__li.active .header__link {
  color: #c49b66;
}

</style>