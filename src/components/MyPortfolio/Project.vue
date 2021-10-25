<template>
  <div
    class="opacity-70 hover:opacity-100 cursor-pointer overflow-hidden rounded overlay"
    
  >
    <li class="relative">
      <div
        class="overflow-hidden w-full group aspect-w-10 aspect-h-7 flex flex-wrap justify-end image-hover-zoom lg:max-w-lg max-h-xl 2xl:max-w-2xl"
      >
        <div class="overlay">
          <img
            :src="require('../../assets/images/' + imageName)" alt="Project Image"
            class="object-cover pointer-events-none w-full lg:max-w-lg max-h-xl 2xl:max-w-2xl"
          />
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["imageName"],
  data() {
    return {
      modalVisible: false,
    };
  },

  methods: {
    // OpenModal() {
    //   console.log("modal");
    //   this.modalOpen = true;
    //   this.$emit("modalWasOpened", this.modalOpen);
    // },
  },
};
</script>

<style lang="less">
li {
  width: 100%;
}

.hover {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.image-hover-zoom {
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
}

// .img-hover-zoom img {
//   transition: transform .5s ease;
// }

.image-hover-zoom:hover {
  transition: transform 0.2s ease-in-out;
  transform: scale(1.1);
}

// .overlay{
// position: relative;
// }

// .overlay1:hover{
//       background: red;
//       z-index: 999;
//     z-index: 99;
//     width: 350px;
//     height: 350px;
//     position: absolute;

// }
</style>
