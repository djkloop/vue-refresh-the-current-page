<template>
  <div class="demo-spin-container">
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
      </svg>
    </div>
    <div>刷新当前页..</div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  created () {
    console.log('我是中转页面')
    setTimeout(() => {
      this.$router.push({
        name: this.$route.params.path
      })
      this.$nextTick(() => {
        Cookies.set('includePath', ['home', 'about'])
        this.$store.commit('changeIncludePath')
      })
    }, 5000)
  }
}
</script>

<style>
.demo-spin-container {
  display: inline-block;
  width: 300px;
  height: 100px;
  position: absolute;
  border: 1px solid #eee;
  top: 50%;
  left: calc(50% - 200px);
  margin-top: -50px;
}

pre {
  background: transparent;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

.loader {
  width: 30px;
  height: 30px;
  position: relative;
  margin: 10px auto;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite,
    color 6s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes color {
  0%,
  100% {
    stroke: #d62d20;
  }

  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>
