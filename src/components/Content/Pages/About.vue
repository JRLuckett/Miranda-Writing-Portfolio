<template>
  <div class="about">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Miranda Ruby Morgan
          </h1>
          <div class="bio">
            <p>I'm a storyteller.  I write about what it is to be human; the small triumphs that feel so significant, the heartbreaks we fear we will never let go of, the blind bumbling around of growing up, the hilarity of our own neuroses and insecurities. I hang my dirty laundry out to dry in hopes that someone will see themselves in something I write and feel less alone, feel heartened, and know that they are in good company.
            </p>
            <p>Most recently, I worked as a script developer and writer for a Golden Girl and long time actress of Hollywood. Our project is currently in post-production. Before that, I lived in Los Angeles and worked as a development assistant to a boutique management and production company, Intellectual Artists Management, which is now Primary Wave Entertainment. Previous to IAM, I worked as a development assistant to the VP of Development at Atmosphere Entertainment, the company that gave us 300, 300:Rise of on Empire, and other testosterone-fueled films. Through my time in the film industry, I have honed an eye for content and know how to identify an idea or story that hasn’t been told told and coax it to it’s full potential.
            </p>
            <p>My personal essays appear in Thought Catalog, Mindest Movement, a publication I am currently a staff writer for, and Literature For Life, a nonprofit literary journal where I have acted as editor and special projects manager.
            </p>
            <p>I have written three full-length screenplays, as well as a comedy pilot. I have experience writing and performing spoken word, as well as performance art, and have been showcased at multiple venues in Santa Barbara.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
.container {
  text-align: center;
}
.title {
  font-family: 'Varela Round', sans-serif;
  color: RGBA(144, 68, 76, 1.00);
}
.subtitle {
  font-family: 'Varela Round', sans-serif;
  color: white;
}
.bio{
  color: white;
  text-align: left;
  padding-bottom: 10px;
}
p {
  color: white;
}
</style>
