<template>
  <div class="main-header">
    <img
      src="../../../public/truecaller.svg"
      class="main-header-logo"
      alt="logo"
      @click="routeToLandingPage()"
    />
  </div>

  <RouterView />
</template>

<script>
export default {
  name: 'PageHeader',
  props: {},
  data() {
    return {}
  },
  methods: {
    routeToLandingPage() {
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {}
}
</script>
