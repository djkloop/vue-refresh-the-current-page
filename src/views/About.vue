<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{msg}}</div>
    <button @click="refreshCurrentPage">刷新当前页面</button>
    <input-value style="margin-top: 50px;"/>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import InputValue from '@/views/store'
export default {
  name: 'about',
  components: {
    InputValue
  },
  data () {
    return {
      msg: '11'
    }
  },
  mounted () {
    setTimeout(() => {
      this.msg = '222'
    }, 3000)
  },
  methods: {
    refreshCurrentPage () {
      Cookies.set('includePath', ['home'])
      this.$store.commit('changeIncludePath')
      this.$nextTick(() => {
        this.$router.push({
          path: 'redirect/about',
          query: {
            redirectName: 'about'
          }
        })
      })
    }
  }
}
</script>
