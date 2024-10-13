<template>
  <div class="articles-container">
    <h1>Latest articles</h1>
    <error-container v-if="failedToFetch" />
    <div v-else>
      <custom-dropdown
        :categories="categories"
        @handleDropdownSelection="handleDropdownSelection"
      />
      <div class="articles-container-article">
        <article-shimmer v-if="isLoading" />
      </div>
      <div v-if="!isLoading" class="articles-container-article">
        <ArticleCard
          v-for="article in articles"
          :key="article['post_thumbnail'].id"
          :category="getPostCategory(article.categories)"
          :imageSrc="article.post_thumbnail['URL']"
          :title="article.title"
          :date="article.date"
          :slug="article.slug"
        />
        <pagination
          :totalPages="totalPages"
          :current-page="currentPage"
          @handlePageChange="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomDropdown from '../common/CustomDropdown.vue'
import ArticleCard from './ArticleCard.vue'
import Pagination from '../common/Pagination.vue'
import ArticleShimmer from './ArticleShimmer.vue'
import { getAllPosts, getCategories, getTotalPages, getPostsByCategory } from '@/lib/api'
import ErrorContainer from '../common/ErrorContainer.vue'
export default {
  components: { CustomDropdown, ArticleCard, Pagination, ArticleShimmer, ErrorContainer },
  name: 'ArticlesContainer',
  props: {},
  data() {
    return {
      categories: [],
      articles: [],
      selectedCategory: 'All Categories',
      currentPage: 1,
      cacheArticles: {},
      totalPages: 0,
      isLoading: false,
      failedToFetch: false
    }
  },
  mounted() {
    this.getPosts()
    this.getCategories()
    this.getTotalPages()
  },
  methods: {
    async getPosts() {
      try {
        this.isLoading = true
        const allPosts = await getAllPosts(this.currentPage)
        this.articles = allPosts.posts
        this.isLoading = false
        this.memoizeArticles(this.articles)
      } catch (error) {
        this.failedToFetch = true
        console.error(error)
      }
    },
    async getCategories() {
      const allCategories = await getCategories()
      this.categories = allCategories.categories
    },
    async getTotalPages() {
      const totalPages = await getTotalPages()
      this.totalPages = totalPages.found
    },
    getPostCategory(categories) {
      const categoryKeys = Object.keys(categories)
      if (categoryKeys.length > 0) {
        return categories[categoryKeys[0]].name
      }
      return null
    },

    handleDropdownSelection(selectedCategory) {
      this.selectedCategory = selectedCategory
    },
    async getPostsByCategory() {
      const postsByCategory = await getPostsByCategory(this.selectedCategory)
      this.articles = postsByCategory.posts
    },
    memoizeArticles(articles) {
      this.cacheArticles[this.currentPage] = articles
    },
    handlePageChange(page) {
      this.currentPage = page
      this.getRelatedPosts()
    },
    getRelatedPosts() {
      if (this.selectedCategory === 'All Categories') {
        if (this.cacheArticles[this.currentPage]) {
          this.articles = this.cacheArticles[this.currentPage]
          return
        }
        this.getPosts()
        return
      }
      this.getPostsByCategory()
    }
  },
  watch: {
    selectedCategory() {
      this.getRelatedPosts()
    }
  },
  computed: {}
}
</script>
