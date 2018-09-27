<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" />
    <button @click="handleClick">返回上一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    setTimeout(() => {
      this.msg = 'Welcome to Your Vue.js App' + '-' + '我是被动态添加的文字'
    }, 3000)
  },
  methods: {
    handleClick () {
      this.$router.go(0)
    }
  }
}
</script>
