<template>
  <div v-observe-visibility="ObjectVisible">
    <figure
      v-show="overlayVisible"
      v-bind:class="{ fade: isFade }"
      class="image-overlay flex justify-center items-center w-full h-full lg:w-96 lg:h-96"
    >
      <picture>
        <source media="(min-width:650px)" srcset="@/assets/images/Mat-nobg.png" />
        <source media="(min-width:465px)" srcset="@/assets/images/Mat-nobg-mobile.png" />
        <img
          v-show="photoVisible"
          v-bind:class="{ fadeAndSlide: isFadeAndSlide }"
          class="flex mt-24"
          src="@/assets/images/Mat-nobg.png"
          alt="Personal Photo"
          style="width: auto"
        />
      </picture>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      overlayVisible: false,
      isFade: false,

      photoVisible: false,
      isFadeAndSlide: false,
    };
  },
  methods: {
    ObjectVisible(isVisible) {
      this.isVisible = false;

      if (isVisible === true) {
        this.overlayVisible = true;
        this.isFade = true;
        if (this.overlayVisible === true) {
          this.photoVisible = true;
          this.isFadeAndSlide = true;
        }
      }
    },
  },
};
</script>

<style lang="less">
.fade {
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  animation-duration: 4s;
  animation-name: fade;
}

.fadeAndSlide {
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  animation-duration: 4s;
  animation-name: fadeAndSlide;
}

@keyframes fade {
  from {
    opacity: 0;
    // transform: translateY(40%);
  }
  25% {
    opacity: 0.33;
  }
  50% {
    opacity: 0.66;
    // transform: translateY(0);
  }
  75% {
    opacity: 0.99;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeAndSlide {
  from {
    opacity: 0;
    transform: translateY(40%);
  }
  50% {
    opacity: 0.7;
    transform: translateY(0);
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 600px) {


}
</style>
