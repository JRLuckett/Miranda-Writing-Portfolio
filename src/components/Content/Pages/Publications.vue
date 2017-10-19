<template>
  <div class="publications">
    <h1>Publications</h1>
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
      information: Data.published
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #90444C;
}
</style>
