<template>
  <div>
    <ImageContainer imgSrc="../../public/header.jpg" bindingText="The Truecaller Blog" />
    <ArticlesContainer />
  </div>
</template>
<script>
import ImageContainer from './ImageContainer.vue'
import ArticlesContainer from '../articleListing/ArticlesContainer.vue'
export default {
  name: 'BlogMain',
  components: {
    ImageContainer,
    ArticlesContainer
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>
