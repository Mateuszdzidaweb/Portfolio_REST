<template>
  <div>
    <nav
      class="font-sans fixed flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 shadow sm:items-baseline w-full z-10 nav-bg-color"
    >
      <div class="w-full h-full flex m-auto justify-between">
        <div class="mb-2 sm:mb-0 inner ml-20">
          <a
            href="/home"
            class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
            >LogoText</a
          ><br />
          <span class="text-xs text-grey-dark logo-txt">M</span>
        </div>

        <div class="sm:mb-0 self-center text-white">
          <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
          <router-link
            to="/"
            class="text-2xl no-underline text-grey-darker hover:text-blue-dark ml-2 px-1 nav-font" 
          >
            Home
          </router-link>
          <router-link
            to="/portfolio"
            class="text-2xl no-underline text-grey-darker hover:text-blue-dark ml-2 px-1 nav-font"
          >
            Portfolio
          </router-link>

          <!-- <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About Us</a> -->
          <a
            href="#"
            class="text-2xl no-underline text-grey-darker hover:text-blue-dark ml-2 px-1 nav-font"
            >About</a
          >
          <a
            href="#"
            class="text-2xl no-underline text-grey-darker hover:text-blue-dark ml-2 px-1 nav-font"
            >Contact</a
          >
          <!-- </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.nav-bg-color {
  background: #191919;
}

.nav-font{
    font-family: "Ramabhadra", sans-serif;
    

}

.nav-font2{
        font-family: 'Georama', sans-serif;

}





.logo-txt {
  // transform: translate(50%,-50%);
  // text-transform: uppercase;
  font-family: verdana;
  font-size: 3.5vw;
  font-weight: 700;
  color: #1e1e1e;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #00fdd7;
  text-shadow: 1px 1px 1px #00fdd7, 1px 2px 1px #00fdd7, 1px 4px 1px #00fdd7,
    1px 4px 1px #00fdd7, 1px 4px 1px #00fdd7, 1px 4px 1px #00fdd7, 1px 4px 1px #00fdd7,
    1px 4px 1px #00fdd7, 1px 4px 1px #00fdd7, 1px 6px 1px #00fdd7,
    1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2),
    1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);
  &:hover {
    text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
      1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191,
      1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191,
      1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);
  }
}
</style>
