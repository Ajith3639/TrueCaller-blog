<template>
  <div class="image-container">
    <img loading="lazy" :src="imgSrc" class="image-container-home" alt="logo" />
    <div class="overlay"></div>
    <h1 class="image-container-title" v-if="bindingText.length > 0">
      {{ bindingText }}
    </h1>
  </div>

  <RouterView />
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    bindingText: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
