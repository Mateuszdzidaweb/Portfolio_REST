<template>
  <div class="w-full h-screen main-bg">
    <vue-canvas-nest
      class="mobile-hidden"
      :config="{ color: canvasNestColor, count: 200 }"
    ></vue-canvas-nest>
    <div class="w-full h-screen flex items-center justify-star">
      <div class="flex flex-col w-auto pl-4">
        <div class="w-auto h-auto flex flex-center pl-2 lg:ml-20">
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible1"
            v-bind:class="{ bounce: isBounced }"
          >
            H
          </h1>
          <h1
            class="text-white text-left title-font swing mr-5 effect-shine"
            v-show="letterVisible2"
            v-bind:class="{ bounce: isBounced }"
          >
            i
          </h1>
        </div>
        <div class="w-auto h-auto flex flex-start py-2 pl-2 lg:ml-20">
          <h1
            class="text-white text-left title-font effect-shine swing"
            v-show="letterVisible3"
            v-bind:class="{ bounce: isBounced }"
          >
            M
          </h1>
          <h1
            class="text-white text-left title-font swing mr-3 lg:mr-5"
            v-show="letterVisible4"
            v-bind:class="{ bounce: isBounced }"
          >
            y
          </h1>

          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible5"
            v-bind:class="{ bounce: isBounced }"
          >
            n
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible6"
            v-bind:class="{ bounce: isBounced }"
          >
            a
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible7"
            v-bind:class="{ bounce: isBounced }"
          >
            m
          </h1>
          <h1
            class="text-white text-left title-font swing mr-3 lg:mr-5"
            v-show="letterVisible8"
            v-bind:class="{ bounce: isBounced }"
          >
            e
          </h1>

          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible9"
            v-bind:class="{ bounce: isBounced }"
          >
            i
          </h1>
          <h1
            class="text-white text-left title-font swing mr-3 lg:mr-5"
            v-show="letterVisible10"
            v-bind:class="{ bounce: isBounced }"
          >
            s
          </h1>

          <h1
            class="text-white text-left title-font logo-txt swing"
            v-show="letterVisible11"
            v-bind:class="{ bounce: isBounced }"
          >
            M
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible12"
            v-bind:class="{ bounce: isBounced }"
          >
            a
          </h1>
          <span
            class="text-white text-left title-font swing"
            v-show="letterVisible13"
            v-bind:class="{ bounce: isBounced }"
            >t</span
          >
        </div>

        <div class="w-auto h-auto flex flex-star pl-2 lg:ml-20">
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible14"
            v-bind:class="{ bounce: isBounced }"
          >
            I'
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible16"
            v-bind:class="{ bounce: isBounced }"
          >
            m
          </h1>
          <h1
            class="text-white text-left title-font swing ml-3 lg:ml-5"
            v-show="letterVisible17"
            v-bind:class="{ bounce: isBounced }"
          >
            W
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible18"
            v-bind:class="{ bounce: isBounced }"
          >
            e
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible19"
            v-bind:class="{ bounce: isBounced }"
          >
            b
          </h1>

          <h1
            class="text-white text-left title-font swing ml-3 lg:ml-5"
            v-show="letterVisible20"
            v-bind:class="{ bounce: isBounced }"
          >
            D
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible21"
            v-bind:class="{ bounce: isBounced }"
          >
            e
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible22"
            v-bind:class="{ bounce: isBounced }"
          >
            v
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible23"
            v-bind:class="{ bounce: isBounced }"
          >
            e
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible24"
            v-bind:class="{ bounce: isBounced }"
          >
            l
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible25"
            v-bind:class="{ bounce: isBounced }"
          >
            o
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible26"
            v-bind:class="{ bounce: isBounced }"
          >
            p
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible27"
            v-bind:class="{ bounce: isBounced }"
          >
            e
          </h1>
          <h1
            class="text-white text-left title-font swing"
            v-show="letterVisible28"
            v-bind:class="{ bounce: isBounced }"
          >
            r
          </h1>
        </div>

        <div class="w-auto h-20 border-0 flex flex-star mt-10 lg:py-2 pl-2 lg:ml-20">
          <div
            class="button_slide slide_right py-2 px-2 lg:px-5 text-xl lg:text-2xl h-12 lg:h-14"
            v-show="btnContactVisible"
          >
            Contact Me
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-down-left w-auto h-auto absolute bottom-4 left-2 flex flex-row">
      <span class="text-white text-sm lg:text-xl px-1">Scroll down</span>
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow down icon" />
    </div>
    <div class="scroll-down-left w-auto h-auto absolute bottom-4 right-2 flex flex-row">
      <span class="text-white text-sm lg:text-xl px-1">Scroll down</span>
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow down icon" />
    </div>
  </div>
</template>

<script>
import vueCanvasNest from "vue-canvas-nest";

export default {
  data() {
    return {
      canvasNestColor: '255,255,255',
      isBounced: false,
      letterVisible1: false,
      letterVisible2: false,
      letterVisible3: false,
      letterVisible4: false,
      letterVisible5: false,
      letterVisible6: false,
      letterVisible7: false,
      letterVisible8: false,
      letterVisible9: false,
      letterVisible10: false,
      letterVisible11: false,
      letterVisible12: false,
      letterVisible13: false,
      letterVisible14: false,
      letterVisible15: false,
      letterVisible16: false,
      letterVisible17: false,
      letterVisible18: false,
      letterVisible19: false,
      letterVisible20: false,
      letterVisible21: false,
      letterVisible22: false,
      letterVisible23: false,
      letterVisible24: false,
      letterVisible25: false,
      letterVisible26: false,
      letterVisible27: false,
      letterVisible28: false,
      btnContactVisible: false,
    };
  },
  components: { vueCanvasNest },
  created() {
    setTimeout(() => {
      this.letterVisible1 = true;
      this.isBounced = true;
    }, 1000);
    setTimeout(() => {
      this.letterVisible2 = true;
    }, 1050);
    setTimeout(() => {
      this.letterVisible3 = true;
    }, 1100);
    setTimeout(() => {
      this.letterVisible4 = true;
    }, 1150),
      setTimeout(() => {
        this.letterVisible5 = true;
      }, 1200);
    setTimeout(() => {
      this.letterVisible6 = true;
    }, 1250);
    setTimeout(() => {
      this.letterVisible7 = true;
    }, 1300);
    setTimeout(() => {
      this.letterVisible8 = true;
    }, 1350),
      setTimeout(() => {
        this.letterVisible9 = true;
      }, 1400),
      setTimeout(() => {
        this.letterVisible10 = true;
      }, 1450),
      setTimeout(() => {
        this.letterVisible11 = true;
      }, 1500);
    setTimeout(() => {
      this.letterVisible12 = true;
    }, 1550);
    setTimeout(() => {
      this.letterVisible13 = true;
    }, 1600);
    setTimeout(() => {
      this.letterVisible14 = true;
    }, 1650),
      setTimeout(() => {
        this.letterVisible15 = true;
      }, 1700);
    setTimeout(() => {
      this.letterVisible16 = true;
    }, 1750),
      setTimeout(() => {
        this.letterVisible17 = true;
      }, 1800),
      setTimeout(() => {
        this.letterVisible18 = true;
      }, 1850),
      setTimeout(() => {
        this.letterVisible19 = true;
      }, 1900),
      setTimeout(() => {
        this.letterVisible20 = true;
      }, 1950),
      setTimeout(() => {
        this.letterVisible21 = true;
      }, 2000),
      setTimeout(() => {
        this.letterVisible22 = true;
      }, 2050),
      setTimeout(() => {
        this.letterVisible23 = true;
      }, 2100),
      setTimeout(() => {
        this.letterVisible24 = true;
      }, 2200),
      setTimeout(() => {
        this.letterVisible25 = true;
      }, 2250),
      setTimeout(() => {
        this.letterVisible26 = true;
      }, 2300),
      setTimeout(() => {
        this.letterVisible27 = true;
      }, 2400),
      setTimeout(() => {
        this.letterVisible28 = true;
        //   this.isBounced = false
      }, 2450),
      setTimeout(() => {
        this.isBounced = false;
      }, 4000),
      setTimeout(() => {
        this.btnContactVisible = true;
      }, 2500);

      this.dynamicColor();
  },
  methods: {
    dynamicColor() {
    //   var r = () => (Math.random() * 256) >> 0;
    //     this.canvasNestColor = `${r()}, ${r()}, ${r()}`;
    //     console.log(this.canvasNestColor);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.vue-canvas-nest-element {
  background-color: #1e1e1e;
  opacity: 1 !important;
}

.title-font {
  font-family: "Ramabhadra", sans-serif;
  font-weight: 700;
  font-size: 3.5vw;
  line-height: 4vw;
  letter-spacing: -1px;
}

.bounce {
  //   color: #00FDD7;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-name: rubberBand;
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

.button_slide {
  color: #00fdd7;
  border: 2px solid #00fdd7;
  border-radius: 0px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  letter-spacing: 1px;
  cursor: pointer;
  animation: fadein 2s;
  box-shadow: inset 0 0 0 0 #00fdd7;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  overflow: hidden;
  transition: 0.1s ease-in-out;
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 0.7;
    transform: translateY(0);
  }
  to {
    opacity: 1;
  }
}

.slide_right:hover {
  box-shadow: inset 400px 0 0 0 #00fdd7;
  border: 2px solid #00fdd7;
  color: #1e1e1e;
}

.swing {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

.swing:hover {
  color: #00fdd7;
  /* animation: rubberBand 5s infinite; */
  animation-name: rubberBand;
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
    opacity: 0;
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
    opacity: 1;
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounce-1 {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.scroll-down-left {
  writing-mode: vertical-rl;
  animation-name: bounce-1;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  span {
    //  animation-name: bounce-1;
    //  animation-duration: 2s;
    // animation-timing-function: linear;
  }
}

@media only screen and (max-width: 1024px) {
  .title-font {
    font-family: "Ramabhadra", sans-serif;
    font-weight: 700;
    font-size: 9.5vw;
    line-height: 10vw;
    letter-spacing: -2px;
  }

  .text {
    // transform: translate(50%,-50%);
    // text-transform: uppercase;
    font-family: verdana;
    font-size: 9.5vw;
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
}

@media only screen and (max-width: 600px) {
  .main-bg {
    background-color: #1e1e1e;
    opacity: 1 !important;
  }

  .mobile-hidden {
    display: none;
  }
  .title-font {
    font-family: "Ramabhadra", sans-serif;
    font-weight: 700;
    font-size: 9.5vw;
    line-height: 10vw;
    letter-spacing: -2px;
  }

  .text {
    // transform: translate(50%,-50%);
    // text-transform: uppercase;
    font-family: verdana;
    font-size: 9.5vw;
    font-weight: 700;
    color: #1e1e1e;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #00fdd7;
    text-shadow: 1px 1px 1px #00fdd7, 1px 2px 1px #00fdd7, 1px 2px 1px #00fdd7,
      1px 2px 1px #00fdd7, 1px 2px 1px #00fdd7, 1px 2px 1px #00fdd7, 1px 2px 1px #00fdd7,
      1px 2px 1px #00fdd7, 1px 2px 1px #00fdd7, 1px 3px 1px #00fdd7,
      1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2),
      1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);
    &:hover {
      text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 4px 1px #919191,
        1px 4px 1px #919191, 1px 4px 1px #919191, 1px 4px 1px #919191, 1px 4px 1px #919191,
        1px 4px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191,
        1px 18px 6px rgba(16, 16, 16, 0.4), 1px 22px 10px rgba(16, 16, 16, 0.2),
        1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);
    }
  }
}
</style>
