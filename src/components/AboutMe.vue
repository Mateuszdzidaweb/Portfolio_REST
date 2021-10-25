<template>
    <div class="w-full h-auto lg:h-screen lg:py-10 xl:py-0 bg-color">
      <section
        id="section-AboutMe"
        class="py-5 lg:py-0 xl:py-0 px-5 lg:px-20 flex flex-col lg:flex-row lg:w-full  lg:m-auto lg:h-auto"
      >
        <div id="text-zone" class="w-full 2xl:items-center xl:min-h-screen xl:justify-center lg:w-1/2 h-auto flex flex-col">
          <PersonalPhoto class="xl:mt-32"></PersonalPhoto>
        </div>

        <div id="text-zone" class="w-full xl:min-h-screen xl:justify-center lg:w-2/3 xl:w-1/3 h-auto flex flex-col justify-center">
          <AboutMeHeading></AboutMeHeading>

          <TextFade class="lg:h-40" :textDescription="`My name is Matt and I'm a web developer. I have a huge passion for building web applications and dynamic user experiences. I enjoy building everything from small websites to rich interactive web apps.`"
          :textDescriptionParagraph2="`The primary area of my interest is the front-end. I'm a web developer graduate who is looking for new opportunities.`"></TextFade>
        </div>

        <div class="about-big w-auto h-auto absolute md:hidden lg:block xl:block 2xl:block">
          <h1 class="about-txt">About</h1>
        </div>
      </section>
    </div>
</template>
pp
<script>
import PersonalPhoto from "@/components/About/PersonalPhoto";
import AboutMeHeading from "@/components/About/AboutMeHeading";
import TextFade from "@/components/MyPortfolio/TextFade.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    PersonalPhoto,
    AboutMeHeading,
    TextFade,
  },
};
</script>

<style lang="less">
.image-overlay {
  // clip-path: polygon(25% 0,75% 0,90% 50%,75% 100%,25% 100%,30px 50%);
  // clip-path: ellipse(220px 255px at 10% 20%);
  clip-path: circle(45%);
  // border: 2px solid #00fdd7;
  shape-outside: border-box;
  background: rgba(0, 0, 0, 0.123);
}

.about-big {
  left: 50vh;
  margin-top: 6rem;
  z-index: 1;
  .about-txt {
    color: rgba(255, 255, 255, 0.025);
    font-size: 280px;
    font-weight: 600;
    letter-spacing: -15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .about-big {
    left: 9vh;
    margin-top: -7rem;
    z-index: 1;
  }
  .about-txt {
    color: rgba(255, 255, 255, 0.05);
    font-size: 200px;
    font-weight: 600;
    letter-spacing: -15px
  }
}


@media only screen and (max-width: 600px) {
  .about-big {
    left: 8vh;
    margin-top: 4rem;
    z-index: 1;
    .about-txt {
      color: rgba(255, 255, 255, 0.025);
      font-size: 100px;
      font-weight: 600;
      letter-spacing: -8px;
    }
  }
}
</style>
