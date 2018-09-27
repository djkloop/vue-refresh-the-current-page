<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{dyMsg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      dyMsg: ''
    }
  },
  created () {
    setTimeout(() => {
      this.dyMsg = '我动态被修改了'
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
