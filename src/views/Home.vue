<template>
  <div class="home overflow-hidden">
    <WelcomeComponent/>
    <MyPortfolioComponent></MyPortfolioComponent>
    <AboutMe></AboutMe>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import MyPortfolioComponent from '@/components/MyPortfolioComponent'
import AboutMe from '@/components/AboutMe.vue'
import Contact from "@/components/Contact.vue"

export default {
  name: 'Home',
  components: {
    WelcomeComponent,
    MyPortfolioComponent,
    AboutMe,
    Contact,
  }
}
</script>
