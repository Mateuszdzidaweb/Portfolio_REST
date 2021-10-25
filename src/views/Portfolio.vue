<template>
  <div class="h-screen bg-color">
       <div class="flex flex-col justify-center h-screen overflow-hidden"> 
    <PortfolioViewComponent class=""></PortfolioViewComponent>
    </div>
    </div>
 
</template>

<script>
import PortfolioViewComponent from "@/components/MyPortfolio/PortfolioViewComponent";
export default {
  data() {
    return {};
  },
  components: {
    PortfolioViewComponent,
  },
};
</script>

<style lang="less">

.portfolioPage {
  width: 100% !important;
  height: 100vh !important;
}

.bg-color {
  background-color: #1e1e1e;
}
</style>
