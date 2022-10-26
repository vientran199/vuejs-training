<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    methods: {
        startTimer() {
            this.timer = setInterval(()=>{
                this.reactionTime += 10
            },10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('endgame',this.reactionTime)
        }
    },
    mounted() {
        console.log('mouted',this.delay)
        setTimeout(()=>{
            this.showBlock = true
            this.startTimer()
        },this.delay)
    },
    updated() {
        console.log('updated')
    },
    unmounted() {
        console.log('unmounted')
    },
}
</script>

<style>
.block{
    width: 500px;
    color: #fff;
    padding: 100px 0px;
    background-color: rgb(114, 144, 86);
    text-align: center;
    margin: 20px auto;
    border-radius: 20px;
}
</style>