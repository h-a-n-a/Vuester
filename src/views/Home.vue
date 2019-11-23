<template>
  <div class="home">
    <vuester></vuester>
  </div>
</template>

<script>
import vuester from 'components/Vuester'
export default {
  name: 'home',
  components: { vuester },
  created() {
    console.log(this.$api)
  }
}
</script>
