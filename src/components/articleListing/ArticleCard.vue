<template>
  <div class="articles-wrapper" @click="redirectToDetailsPage()">
    <p class="articles-wrapper-category">{{ category }}</p>
    <img loading="lazy" :src="imageSrc" alt="article_image" class="articles-wrapper-image" />
    <span class="articles-wrapper-footer">
      <h3 class="articles-wrapper-footer-title">{{ title }}</h3>
      <p class="articles-wrapper-footer-date">{{ relativeDate }}</p></span
    >
  </div>
</template>

<script>
import { getRelativeDate } from '@/utilities/helper.js'
export default {
  components: {},
  name: 'ArticleCard',
  props: {
    category: {
      type: String,
      default: 'Category'
    },
    imageSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Article name'
    },
    date: {
      type: String,
      default: 'Date'
    },
    slug: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    redirectToDetailsPage() {
      this.$router.push({ name: 'ArticleDetails', params: { slug: this.slug } })
    }
  },
  computed: {
    relativeDate() {
      return getRelativeDate(this.date)
    }
  }
}
</script>
