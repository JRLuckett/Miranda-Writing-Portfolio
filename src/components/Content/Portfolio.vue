<template>
  <div class="window">
    <div :class="{home: classSwitch, away: !classSwitch}" class="columns is-gapless is-mobile">
      <NavTab v-if="tab !== now" class="tabbs" v-for="tab in allTabs" :tabName="tab" :currentPage="now" :currentClass="classSwitch">
      </NavTab>
    </div>
    <div class="about">
      <transition name="fade">
        <About v-if="now === 'About'"></About>
      </transition>
    </div>
    <div class="resume">
      <transition name="fade">
        <Resume v-if="now === 'Resume'"></Resume>
      </transition>
    </div>
    <div class="publications">
      <transition name="fade">
        <Publications v-if="now === 'Publications'"></Publications>
      </transition>
    </div>
    <div class="projects">
      <transition name="fade">
        <Projects v-if="now === 'Projects'"></Projects>
      </transition>
    </div>
    <SocialTab></SocialTab>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import NavTab from "./HeaderTab/NavTab.vue"
import Home from './Pages/Home.vue'
import About from './Pages/About.vue'
import Resume from './Pages/Resume.vue'
import Publications from './Pages/Publications.vue'
import Projects from './Pages/Projects.vue'
import SocialTab from './FooterTab/SocialTab.vue'
export default {
  components: {
    NavTab,
    Home,
    About,
    Resume,
    Publications,
    Projects,
    SocialTab
  },
  data () {
    return {
      now: 'Home',
      allTabs: ['Home','About','Resume','Publications','Projects'],
      newTabs: [],
      classSwitch: true
    }
  },
  beforeUpdate () {
    if (this.now === 'Home') {
      this.classSwitch = true
    }
    else {
      this.classSwitch = false
    }
  }
}
</script>

<style scoped>
.window {
  height: 100vh;
  background-size: 150%;
  background-image: url("../../assets/Watercolor.png");
  background-repeat: no-repeat;
}
.home {
  height: 92.7%;
}
.away {
  height: 10%;
}
.columns.is-gapless.is-mobile {
  margin: 0;
}
.tabbs {
  -webkit-transition: background 2s ease-out;
  -moz-transition: background 2s ease-out;
  -o-transition: background 2s ease-out;
  transition: background 2s ease-out;
}
.tabbs:hover {
  background: rgba(5, 36, 52, .6)
}

.fade-enter-active {
  transition: opacity 2s
}
.fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
