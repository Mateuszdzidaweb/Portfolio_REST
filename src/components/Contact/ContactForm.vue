<template>
  <div class="w-full xl:w-4/5 2xl:w-3/5 flex ">
    <form action="mailto:matidzida2@gmail.com" method="get" enctype="text/plain" class="w-full">
      <!-- <h2 class="text-2xl pb-3 font-semibold">
        Send Message
    </h2> -->
      <div>
        <ContactHeading></ContactHeading>

        <div class="flex flex-col lg:flex-row mb-3">
          <!-- <label for="name">Name</label> -->
          <input
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"

            type="text"
            id="name"
            placeholder="Name"
            class="px-3 py-3 lg:mr-2  w-full lg:w-1/2 input-color focus:outline-none"
            autocomplete="off"
          />
          <input

            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"

            type="text"
            id="email"
            placeholder="Email"
            class="px-3 lg:ml-2 mt-3 lg:mt-0 py-3 w-full lg:w-1/2 input-color focus:outline-none"
            autocomplete="off"
          />
        </div>
        
        <div class="flex flex-col mb-3">
          <!-- <label for="email">Email</label> -->
          <input


            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"

            type="text"
            id="subject"
            placeholder="Subject"
            class="px-3 py-3 w-full input-color focus:outline-none"
            autocomplete="off"
          />
        </div>
        <div class="flex flex-col mb-3">
          <!-- <label for="message">Message</label> -->
          <textarea

        
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"

            rows="4"
            id="message"
            placeholder="Message"
            class="px-3 py-2 input-color focus:outline-none"
          ></textarea>
        </div>
      </div>
      <div class="w-full pt-3 flex justify-center lg:justify-end">
        <button

            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"

          type="submit"
          name="submit"
          class="w-2/3 md:w-1/3 lg:w-1/3 flex justify-center button_slide slide_right py-2 px-2 lg:px-5 text-xl lg:text-2xl h-12 lg:h-14"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import ContactHeading from '@/components/Contact/ContactHeading.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        ContactHeading
    }
}
</script>

<style lang="less">
.input-color {
  background: #2b2b2b;
  &:focus {
    border: 1px solid #00fdd7;
  }
}

.button_slide {
  color: #00fdd7;
  border: 2px solid #00fdd7;
  border-radius: 0px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  letter-spacing: 1px;
  cursor: pointer;
  animation: fadein 2s;
  box-shadow: inset 0 0 0 0 #00fdd7;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  overflow: hidden;
  transition: 0.1s ease-in-out;
}

.slide_right:hover {
  box-shadow: inset 400px 0 0 0 #00fdd7;
  border: 2px solid #00fdd7;
  color: #1e1e1e;
}
</style>
