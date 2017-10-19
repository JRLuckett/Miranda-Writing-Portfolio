import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'
import App from './App.vue'

export const eventBus = new Vue ();

Vue.use(VueTyperPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
