<template>
  <a @click="visitingPage ()" :class="{tabNameHome: this.currentClass, tabNameAway: !this.currentClass}" class="column tabNameHome">
    <p :class="{home: this.currentClass, away: !this.currentClass}">{{ tabName }}</p>
  </a>
</template>

<script>
export default {
  props: ['tabName','currentPage', 'currentClass'],
  methods: {
    visitingPage () {
      this.$parent.now = this.tabName
    }
  }
}
</script>

<style scoped>
.tabNameHome {
  font-size: 100%;
  text-align: center;
}
.tabNameAway {
  /*border-radius: 10px;*/
  font-size: 100%;
  text-align: center;
}
.away {
  margin: 3vh 0;
}
.home {
  margin-top: 100%;
}
p {
  -webkit-transition: color 1s ease-out;
  -moz-transition: color 1s ease-out;
  -o-transition: color 1s ease-out;
  transition: color 1s ease-out;
  color: #90444C;
}
p:hover {
  color: #E45954;
  cursor: pointer;
}
</style>
