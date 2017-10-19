<template>
  <div>
    <a href="" onClick="window.open('https://www.linkedin.com/in/miranda-morgan-69990b81/?authType=NAME_SEARCH&authToken=vRIK&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A291899925%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1486699859911%2Ctas%3Amiran', '_blank')">
      <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
    </a>
    <a href="#" onClick="window.open('https://www.instagram.com/?hl=en', '_blank')">
      <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
    </a>
    <a href="#" onClick="window.open('https://www.facebook.com/miranda.morgan.31945', '_blank')">
      <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>
div {
  position: fixed;
  bottom: 0vh;
  text-align: center;
  background-color: rgba(22, 52, 66, .8);
  width: 100%
}
.fa-instagram {
  margin: 0 20%;
}
i {
  padding: 10px 20px;
  -webkit-transition: color 1s ease-out;
  -moz-transition: color 1s ease-out;
  -o-transition: color 1s ease-out;
  color: #163341;
}
i:hover {
  color: #E45954;
}
</style>
