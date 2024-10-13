<template>
  <div class="pagination-wrapper">
    <button
      class="pagination-control"
      @click="switchNextPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      <i class="pi pi-chevron-left" style="font-size: 0.8rem"></i>
    </button>
    <span
      v-for="page in totalPages"
      @click="switchNextPage(page)"
      :key="page"
      class="pagination-element"
      :class="{ active: currentPage === page }"
    >
      {{ page }}</span
    >
    <button
      class="pagination-control"
      @click="switchNextPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      <i class="pi pi-chevron-right" style="font-size: 0.8rem"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomPagination',
  components: {},
  props: {
    currentPage: {
      required: true,
      default: 1
    },
    totalPages: {
      required: true,
      default: 1
    },
    handlePageChange: {
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    switchNextPage(page) {
      this.$emit('handlePageChange', page)
    }
  }
}
</script>
