<template>
  <div class="home">
    <vuester></vuester>
  </div>
</template>

<script>
import vuester from 'components/Vuester'
import axios from 'utils/axios'
export default {
  name: 'home',
  components: { vuester }
}
</script>
