<template>
  <div id="app">
    <div>
      <transition name="fade">
        <Portfolio v-show="visited === true"></Portfolio>
      </transition>
    </div>
    <div>
      <transition name="fade">
        <Welcome v-show="visited === false"></Welcome>
      </transition>
    </div>
  </div>
</template>


<script>
import { eventBus } from './main.js'
import Welcome from './components/Content/Welcome.vue'
import Portfolio from './components/Content/Portfolio.vue'
export default {
  components: {
    Portfolio,
    Welcome
  },
  data() {
    return {
      visited: false
    }
  },
  created() {
    eventBus.$on('alreadyVisited', (visited) => {
      this.visited = visited
    })
  }
}
</script>


<style>
p {
  color: #AABBBB;
}
#app {
  font-family: 'Varela Round', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
