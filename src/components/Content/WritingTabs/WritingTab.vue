<template>
  <div class="writing-tab">
    <Writing v-if="show" :visible="this.show" :piece="this.information"></Writing>
    <div class="title">
      {{this.information.title}}
    </div>
    <div v-if="this.information.publisher" class="publisher">
      {{this.information.publisher}}
    </div>
    <div class="date">
      {{this.information.date}}
    </div>
    <div class="content">
      {{this.information.content[0]}}
    </div>
    <div v-if="this.information.content[0].length < 50" class="content">
      {{this.information.content[1]}}
    </div>
    <a @click="show = !show"><i class="fa fa-plus-square fa-lg" aria-hidden="true"></i></a>
  </div>
</template>

<script>
import Writing from './Writing/Writing.vue'
export default {
  components: {
    Writing
  },
  props: ['information'],
  data () {
    return {
      writingInfo: this.information,
      show: false
    }
  }
}
</script>

<style scoped>
.writing-tab {
  color: #163341;
  padding: 2vh;
  text-align: center;
  margin-bottom: 7.3vh;
  -webkit-transition: background-color 2s ease-out, color 2s ease-out;
  -moz-transition: background-color 2s ease-out, color 2s ease-out;
  -o-transition: background-color 2s ease-out, color 2s ease-out;
  transition: background-color 2s ease-out, color 2s ease-out;
  }
.writing-tab:hover {
  background-color: RGBA(106, 124, 132, 1.00);
  color: white;
}
.title {
  color: #163341;
  margin-bottom: 0;
}
.publisher {
  font-size: 20px;
  color: #90444C;
}
.date {
  color: #163341;
}
.content {
  text-align: left;
}
i {
  padding: 2px;
  color: #163341;
  -webkit-transition: color .5s ease-out;
  -moz-transition: color .5s ease-out;
  -o-transition: color .5s ease-out;
  transition: color .5s ease-out;
}
i:hover {
  color: #90444C;
}
</style>
