<template>
  <div class="wrapper">
    <RouterView />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    AppFooter
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
