<template>
  <div class="resume">
    <h1>
      Resume
    </h1>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div v-for="info in information" class="experience">
            <h3>
              {{info.title}}
            </h3>
            <div class="roles">
              <div class="position">
                {{info.position[0]}}
              </div>
              <div class="position" v-if="info.position[1]">
                 / {{info.position[1]}}
              </div>
            </div>
            <p class="date">
              {{info.startDate}} - {{info.endDate}}
            </p>
            <div class="tasks">
              <div v-for="task in info.tasks">
                <p>
                  <i class="fa fa-sun-o" aria-hidden="true"></i>
                  {{task}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Data from '../../../../data.json'
export default {
  data () {
    return {
      information: Data.resume.jobs
    }
  }
}
</script>

<style scoped>
.resume {
  margin-bottom: 7.3vh;
}
.hero {
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  background-color: RGBA(5, 36, 52, .6);
}
.hero:hover {
  background-color: RGBA(106, 124, 132, 1.00);
}
h1 {
  text-align: center;
  color: RGBA(144, 68, 76, 1.00);
}
.experience {
  border-bottom: solid 1px white;
  width: 80%;
  margin: 3vh auto 0 auto;
  padding: 5px;
}
h3 {
  text-align: center;
  color: white;
}
.roles {
  text-align: center;
}
p {
  color: #163341;
}
.position {
  font-size: 20px;
  display: inline-block;
  color: #90444C;
}
.date {
  text-align: center;
}
.tasks {
  padding: 1vh 10vh 2vh 10vh;
}
i {
  color: #90444C;
}
</style>
