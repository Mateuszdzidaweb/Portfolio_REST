<template>
  <div>
    <div class="w-full h-auto bg-color">
       <div class="flex flex-col">
      <section
        id="section-work"
        class="lg:px-20 flex flex-col lg:flex-row w-full mx-auto lg:h-96 justify-start "
      >
        <div
          id="text-zone"
          class="w-full xl:min-h-screen xl:justify-start lg:w-2/3 xl:w-2/5 h-auto flex flex-col "
        >
          <PortfolioHeading></PortfolioHeading>

          <TextFade
            class="2xl:py-5"
            :textDescription="'This is a small gallery of projects that I have done during university and my free time. Most of my projects were created to enhance my Web Development skills. Interested to see some of my work? Visit my work page.'"
            :textDescriptionParagraph2="``"
          ></TextFade>
        </div>

        <!-- <div
          id="text-zone"
          class="w-1/2 xl:justify-center h-auto flex flex-col"
        ></div> -->

        <div
          class="work-big w-auto h-auto absolute md:hidden lg:block xl:block 2xl:block"
        >
          <h1 class="work-txt">Work</h1>
        </div>
      </section>






      <div class="w-full h-auto flex justify-center">
        <section
          class="px-2 mx-auto max-w-10xl sm:px-0 lg:px-8 lg:py-4 xl:py-10 md:w-full wrap-photos overflow-hidden "
        >
          <ul
            role="list"
            class="grid grid-cols-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full lg:w-full 2xl:grid-cols-3 2xl:w-4/6 max-projects-width overflow-hidden"
          >
    
            <li @click="isFitnessProjectModalVisible = true">
              <Project
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                :imageName="'fitnessApp8.png'"
              ></Project>
            </li>
            <li @click="isNewsApiProjectModalVisible = true">
              <Project
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                :imageName="'NewsApiImg.png'"
              >
              </Project>
            </li>
            <li @click="isCaffeeProjectModalVisible = true">
              <Project
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                :imageName="'CoffeeApp.png'"
              >
              </Project>
            </li>

            <!-- grid grid-cols-2 mx-auto sm:grid-cols-2 md:flex md:flex-wrap  border-2 -->
            <!-- class="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4" -->
            <!-- <Projects></Projects>
md:flex md:flex-wrap md:justify-center
     <Projects></Projects>
    <Projects></Projects>
    <Projects></Projects> -->
          </ul>
        </section>
      </div>
      </div>

      <transition
        class="z-99"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <FitnessProjectModal
          class="z-99"
          v-show="isFitnessProjectModalVisible"
          @closeFitnessProjectModal="isFitnessProjectModalVisible = false"
          :projectTitle="'Fitness mobile App'"
        >
        </FitnessProjectModal>
      </transition>

      <transition
        class="z-99"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <NewsApiProjectModal
          v-show="isNewsApiProjectModalVisible"
          @closeNewsApiProjectModal="isNewsApiProjectModalVisible = false"
          :projectTitle="'News Api'"
        >
        </NewsApiProjectModal>
      </transition>

      <transition
        class="z-99"
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <CaffeeProjectModal
          v-show="isCaffeeProjectModalVisible"
          @closeCaffeeProjectModal="isCaffeeProjectModalVisible = false"
          :projectTitle="'Caffee Store mobile App'"
        >
        </CaffeeProjectModal>
      </transition>
    </div>
  </div>
</template>

<script>
import PortfolioHeading from "@/components/MyPortfolio/PortfolioHeading.vue";
import TextFade from "@/components/MyPortfolio/TextFade.vue";
import Project from "@/components/MyPortfolio/Project.vue";
import FitnessProjectModal from "@/components/MyPortfolio/Projects/FitnessProjectModal";
import NewsApiProjectModal from "@/components/MyPortfolio/Projects/NewsApiProjectModal";
import CaffeeProjectModal from "@/components/MyPortfolio/Projects/CaffeeProjectModal";
export default {
  data() {
    return {
      //     caffeeProjectTitle:'Caffee Store App',
      //   fitnessAppImage: "CoffeeApp.png",
      //   newsApp: "NewsApiImg.png",
      //   awg: "fitnessApp8.png",
      isFitnessProjectModalVisible: false,
      isNewsApiProjectModalVisible: false,
      isCaffeeProjectModalVisible: false,
    };
  },
  components: {
    PortfolioHeading,
    TextFade,
    Project,
    FitnessProjectModal,
    NewsApiProjectModal,
    CaffeeProjectModal,
  },
  methods: {},
};
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
  opacity: 0.8;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.work-big {
  left: 60vh;
  margin-top: 6rem;
  z-index: 1;
  .work-txt {
    color: rgba(255, 255, 255, 0.05);
    font-size: 280px;
    font-weight: 600;
    letter-spacing: -15px;
  }
}

.project:empty {
  height: 0;
  border: none;
  display: none;
}

.max-projects-width {
  max-width: 1200px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .work-big {
    left: 24vh;
    margin-top: -2rem;
    z-index: 1;
  }
  .work-txt {
    color: rgba(255, 255, 255, 0.05);
    font-size: 200px;
    font-weight: 600;
    letter-spacing: -15px;
  }
}

@media only screen and (max-width: 600px) {
  .work-big {
    left: 18vh;
    margin-top: 2rem;
    z-index: 1;
    .work-txt {
      color: rgba(255, 255, 255, 0.05);
      font-size: 100px;
      font-weight: 600;
      letter-spacing: -8px;
      opacity: 0.5;
    }
  }
}
</style>
