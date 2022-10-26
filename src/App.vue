<template>
  <div id="app">
    <!-- <router-view/> -->
    <h1>Reaction Timer Game</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @endgame="endGame"/>
    <p v-if="showResults">Score: {{score}} ms</p>
  </div>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'App',
  data() {
    return {
      delay: null,
      isPlaying: false,
      score: null,
      showResults: false
    }
  },
  components: { Block },
  methods: {
    start() {
      this.isPlaying = true;
      this.showResults = false;
      this.delay = 2000 + Math.floor(Math.random()*5000)
      console.log(this.delay)
    },
    endGame(reactionTime) {
      console.log(reactionTime)
      this.score = reactionTime
      this.isPlaying = false;
      this.showResults = true
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
