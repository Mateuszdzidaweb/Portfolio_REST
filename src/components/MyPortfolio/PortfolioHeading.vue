<template>
  <div>
    <div v-observe-visibility="ObjectVisible" class="flex flex-row w-auto ml-2 lg:ml-0  lg:justify-start h-20 lg:h-32">
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible1"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        M
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4 mr-4"
        v-show="letterVisible1"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        y
      </h1>

      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible2"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        P
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible3"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        o
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible4"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        r
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible5"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        t
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible6"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        f
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible7"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        o
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible8"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        l
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible9"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        i
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible10"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        o
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isFade: false,
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
    };
  },
  methods: {
    ObjectVisible(isVisible) {
      this.isVisible = true;
      if (isVisible === true) {
        setTimeout(() => {
          this.letterVisible1 = true;
          this.isFade = true;
        }, 1000);
        setTimeout(() => {
          this.letterVisible2 = true;
        }, 1050);
        setTimeout(() => {
          this.letterVisible3 = true;
        }, 1100);
        setTimeout(() => {
          this.letterVisible4 = true;
        }, 1150);
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
        }, 1350);
        setTimeout(() => {
          this.letterVisible9 = true;
        }, 1400);
        setTimeout(() => {
          this.letterVisible10 = true;
        }, 1450);
      }
    },
  },
};
</script>

<style lang="less">
.portfolio-heading {
  color: #00fdd7;
  font-family: "Ramabhadra", sans-serif;
  letter-spacing: -1px;
  font-size: 4.5vw;

    &:hover{
        color: #00fdd7;
        animation-name: rubberBand;
    }
}

.fadeSlideDown {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-name: fadeSlideDown;
}



@keyframes fadeSlideDown {
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

@media only screen and (max-width: 1024px) {
  .portfolio-heading {
    font-size: 6.5vw;
  }
}

@media only screen and (max-width: 600px) {
  .portfolio-heading {
    color: #00fdd7;
    font-family: "Ramabhadra", sans-serif;
    letter-spacing: -1px;
    font-size: 12.5vw;
  }
}
</style>
