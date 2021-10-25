<template>
  <div>
    <div class="w-full h-auto lg:py-10 xl:py-44  bg-color">
      <section
        id="section-Contact"
        class="py-5 xl:py-0 px-5 lg:px-0 flex flex-col lg:flex-row lg:w-full 2xl-w-4/5 lg:m-auto lg:h-auto"
      >
        <div
          id="text-zone"
          class="w-full 2xl:items-center xl:h-auto xl:justify-center lg:w-2/3 lg:ml-10 h-auto flex flex-col py-10 lg:py-0"
        >
             <!-- <div class="flex border w-2/3">
        
             </div> -->
          <ContactForm></ContactForm>
        </div>

        <div
          id="text-zone"
          class="w-full xl:h-auto xl:justify-center lg:mr-10 lg:w-2/3 xl:w-1/3 h-auto flex flex-col justify-center "
        >
        
        <Socials></Socials>

        
        </div>

        <div class="contact-big w-auto h-auto absolute md:hidden lg:block xl:block 2xl:block">
          <h1 class="contact-txt">Contact</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm";
import Socials from '@/components/Contact/Socials';
export default {
  data() {
      return{

      }
  },
  components: {
    ContactForm,
    Socials
  },
};
</script>

<style lang="less">
.contact-big {
  left: 50vh;
  margin-top: -20rem;
  z-index: 1;
  .contact-txt {
    color: rgba(255, 255, 255, 0.025);
    font-size: 240px;
    font-weight: 600;
    letter-spacing: -15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .contact-big {
    left: 15vh;
    margin-top: -20rem;
    z-index: 1;
  }
  .contact-txt {
    color: rgba(255, 255, 255, 0.05);
    font-size: 200px;
    font-weight: 600;
    letter-spacing: -15px
  }
}


@media only screen and (max-width: 600px) {
  .contact-big {
    left: 3vh;
    margin-top: -4rem;
    z-index: 1;
    .contact-txt {
      color: rgba(255, 255, 255, 0.025);
      font-size: 100px;
      font-weight: 600;
      letter-spacing: -8px;
    }
  }
}

</style>
