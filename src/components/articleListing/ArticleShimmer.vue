<template>
  <div class="shimmer-container" v-for="shimmer in shimmerLimit" :key="shimmer">
    <div class="shimmer-box shimmer-line long"></div>

    <div class="shimmer-box shimmer-image"></div>

    <div class="shimmer-box shimmer-line short"></div>
    <div class="shimmer-box shimmer-line medium"></div>
    <div class="shimmer-box shimmer-line long"></div>
  </div>
</template>
<script>
export default {
  name: 'ArticleShimmer',
  data() {
    return {
      shimmerLimit: 20
    }
  }
}
</script>
