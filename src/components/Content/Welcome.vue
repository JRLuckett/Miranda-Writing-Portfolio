<template>
  <div>
    <div class="typing">
      <vue-typer
        :text='["My writing is"]'
        :repeat='0'
        :shuffle='true'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='500'
        :erase-delay='250'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      ></vue-typer>
      <vue-typer
        :text='["Honest","Universal","Insightful","Haunting","Vulnerable","Relevant","Poignant"]'
        :repeat='Infinity'
        :shuffle='true'
        initial-action='typing'
        :pre-type-delay='1500'
        :type-delay='50'
        :pre-erase-delay='700'
        :erase-delay='150'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      ></vue-typer>

    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
  data () {
    return {
      visited: false
    }
  },
  mounted() {
    setTimeout(function () {
      this.visited = true
      eventBus.$emit('alreadyVisited', this.visited)
    }, 7000)
  }
}
</script>

<style scoped>
.typing {
  color: black;
  margin-left: 40px;
  position: fixed;
  top: 30%;
  font-size: 4rem;
  font-family: 'Archivo Black', sans-serif;
}
.vue-typer {
  font-family: 'Archivo Black', sans-serif;
}
</style>
