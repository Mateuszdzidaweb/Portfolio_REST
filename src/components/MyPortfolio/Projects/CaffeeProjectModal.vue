<template>
  <div>
    <div class="modalWpapper w-full h-full flex justify-center items-center fixed top-0">
      <!-- modal -->
      <div id="modal" class="w-full h-3/5 lg:w-5/6 xl:w-3/5 2xl:w-2/5 bg-white relative">
        <!-- button close -->
        <button
          @click="closeCaffeeProjectModal"
          class="absolute -top-3 -right-0 lg:-right-2 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
        >
          &cross;
        </button>

        <!-- header -->
        <div class="px-4 py-3 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-600"> {{ projectTitle }} </h2>
        </div>

        <!-- body -->
        <div class="w-full h-3/5 lg:h-4/5 bg-gray-500 p-3 bg-center-cover"
        :style="{
          background:
            'url(' +
            require('../../../assets/images/CoffeeAppProjectIMG.png') +
            ') no-repeat ',
        }">

        </div>

        <!-- footer -->
        <div
          class="absolute bottom-0 left-0 lg:px-4 py-3 border-t border-gray-200 w-full flex justify-start items-center gap-3"
        >
          <a href="https://coffeeshopapp-ba533.web.app/" target="_blank" class="viewProjectbtn">
            <i class="fas fa-external-link-alt"></i>
            View Project
          </a>
          <!-- <button class="viewProjectbtn">
            <i class="fas fa-external-link-alt"></i>
            View Project
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['projectTitle'],
  data() {
    return {};
  },
  methods: {
    closeCaffeeProjectModal() {
      this.$emit("closeCaffeeProjectModal");
    },
  },
};
</script>

<style lang="less">
.modalWpapper {
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.7);
  //   background-color: red;
  //   position: absolute;
  //   position: fixed;
  //   display: flex;
}


 .viewProjectbtn{
            margin-left: 20px;
            margin-top: 5px;
            color: black !important;
            border: 2px solid black;
            border-radius: 0px;
            padding: 10px 10px;
            display: inline-block;
            font-family: "Lucida Console", Monaco, monospace;
            font-size: 14px;
            letter-spacing: 1px;
            cursor: pointer;
            -webkit-box-shadow: inset 0 0 0 0 #3EC2C9;
            box-shadow: inset 0 0 0 0 #3EC2C9;
            -webkit-transition: ease-out 0.4s;
            transition: ease-out 0.4s;
            background-color: white;
            margin-top: 10px;
            &:hover{
                box-shadow: inset 400px 0 0 0 #3EC2C9;
                border: 2px solid #3EC2C9;
            }
 }
</style>
