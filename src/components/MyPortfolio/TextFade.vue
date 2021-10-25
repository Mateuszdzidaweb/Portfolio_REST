<template>
  <div v-observe-visibility="ObjectVisible">
    <p
      v-show="textVisible"
      v-bind:class="{ fadeSlideUp: isFade }"
      class="text-white h-auto text-xl lg:text-2xl flex py-4 px-2 xl:py-8 lg:text-start text-left m-auto text-font"
    >
      {{ textDescription }}
    </p>
        <p
      v-show="textVisible"
      v-bind:class="{ fadeSlideUp: isFade }"
      class="text-white h-auto  text-xl lg:text-2xl flex py-2 px-2 xl:py-2 lg:text-left text-left m-auto text-font"
    >
      {{ textDescriptionParagraph2 }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["textDescription", 'textDescriptionParagraph2'],
  data() {
    return {
      isVisible: false,
      textVisible: false,
      isFade: false,
    };
  },
  methods: {
    ObjectVisible(isVisible) {
      this.isVisible = false;
  

      if (isVisible === true) {
        this.textVisible = true;
        this.isFade = true;
      }
    },
  },
};
</script>

<style lang="less">
.fadeSlideUp {
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  animation-duration: 3s;
  animation-name: fadeSlideUp;
}

.text-font{
    font-family: 'Georama', sans-serif;
}

.word-brake{
    word-break: break-all;
}

@keyframes fadeSlideUp {
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
</style>
