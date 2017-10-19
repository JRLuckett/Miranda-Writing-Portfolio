<template>
  <div class="projects">
    <div v-for="info in information">
      <WritingTab :information="info"></WritingTab>
    </div>
  </div>
</template>

<script>
import Data from '../../../../data.json'
import WritingTab from '../WritingTabs/WritingTab.vue'
export default {
  components: {
    WritingTab
  },
  data () {
    return {
      information: Data.projects
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
  color: #90444C;
}
</style>
