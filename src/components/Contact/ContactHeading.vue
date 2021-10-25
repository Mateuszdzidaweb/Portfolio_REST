<template>
  <div>
    <div
      v-observe-visibility="ObjectVisible"
      class="flex flex-row w-auto justify-center lg:justify-start xl:mb-10 2xl:mb-20 h-20 md:h-24 lg:h-32"
    >
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible1"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        C
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible2"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        o
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible3"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        n
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible4"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        t
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible5"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        a
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible6"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        c
      </h1>
      <h1
        class="portfolio-heading text-7xl flex py-4"
        v-show="letterVisible7"
        v-bind:class="{ fadeSlideDown: isFade }"
      >
        t
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
      }
    },
  },
};
</script>

<style lang="less"></style>
