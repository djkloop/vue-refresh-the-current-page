<template>
  <div>
    <a-input style="margin-bottom:50px;"  v-model="inputValue" /> <br/>
    {{ inputValue }}
  </div>
</template>

<script>
import AInput from '_c/AInput'
export default {
  name: 'store',
  components: {
    AInput
  },
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>

<style>

</style>
