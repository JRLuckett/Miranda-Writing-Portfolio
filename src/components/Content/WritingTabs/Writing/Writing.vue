<template>
  <div class="writing-piece">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head contain-top">
          <div class="title-group">
            <a><i @click="close()" class="is-pulled-right fa fa-minus-square fa-lg" aria-hidden="true"></i></a>
            <p class="modal-card-title title">{{this.piece.title}}</p>
          </div>
        </header>
        <section class="modal-card-body content-body">
          <div v-for="paragraph in this.piece.content">
            <p class="content">
              {{paragraph}}
            </p>
          </div>
        </section>
        <footer class="modal-card-foot contain-bottom">
          <div class="footer-buttons">
            <button class="button">Download PDF</button>
            <button class="button">Published Link</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['piece', 'visible'],
  data () {
    return {
      openClose: this.visible
    }
  },
  methods: {
    close () {
      this.openClose = false
      this.$parent.show = false
    }
  }
}
</script>

<style scoped>
.modal-card {
  width: 90%;
}
.contain-top {
  border: solid 1px #90444C;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #6A7C84;
}
.title-group {
  width: 100%;
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
.title {
  text-align: center;
  color: #163341;
}
.content-body {
  border: solid 1px #90444C;
}
.content {
  color: #163341;
  text-align: left;
}
.contain-bottom {
  border: solid 1px #90444C;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #6A7C84;
}
.footer-buttons {
  margin: auto;
}
.button {
  color:  #163341;
  background-color: #6A7C84;
  border: 1px solid #163341;
}
.button:hover {
  color: #90444C;
  background-color: #6A7C84;
  border: 1px solid #90444C;
}
</style>
