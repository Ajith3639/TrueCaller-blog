<template>
  <div class="detailed-article">
    <error-container v-if="failedToFetch" />
    <div v-else-if="isLoading"><spinner /></div>
    <div v-else>
      <image-container :imgSrc="articleDetails['featured_image']" />
      <div class="detailed-article-post">
        <h2 class="detailed-article-title">{{ articleDetails.title }}</h2>
        <span class="detailed-article-avatar">
          <UserAvatar :src="articleDetails?.author?.['avatar_URL']" />
          <span class="detailed-article-avatar-details">
            <label for="name">{{ articleDetails?.author?.['name'] }}</label>
            <span>{{ relativeDate }}</span></span
          >
        </span>
        <span v-html="articleDetails.content"></span>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from '../common/ImageContainer.vue'
import UserAvatar from '../common/Avatar.vue'
import { formatDate } from '@/utilities/helper.js'
import Spinner from '../common/Spinner.vue'
import { getDetailedArticle } from '@/lib/api.js'

export default {
  components: { ImageContainer, UserAvatar, Spinner },
  name: 'DetailedArticle',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      articleDetails: {},
      isLoading: false,
      failedToFetch: false
    }
  },
  mounted() {
    this.getPostDetails()
  },
  methods: {
    async getPostDetails() {
      try {
        this.isLoading = true
        const postDetails = await getDetailedArticle(this.slug)
        this.articleDetails = postDetails
        this.isLoading = false
      } catch (error) {
        this.failedToFetch = true
        console.error(error)
      }
    }
  },
  computed: {
    relativeDate() {
      if (this.articleDetails?.date) {
        return formatDate(this.articleDetails?.date)
      }
      return ''
    }
  }
}
</script>
