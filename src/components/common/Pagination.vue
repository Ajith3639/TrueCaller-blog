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
      @click="switchNextPage(1)"
      class="pagination-element"
      :class="{ active: currentPage === 1 }"
    >
      1
    </span>

    <span v-if="startPage > 2" class="pagination-ellipsis">...</span>

    <span
      v-for="page in visiblePages"
      @click="switchNextPage(page)"
      :key="page"
      class="pagination-element"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </span>

    <span v-if="endPage < totalPages - 1" class="pagination-ellipsis">...</span>

    <span
      v-if="totalPages > 1"
      @click="switchNextPage(totalPages)"
      class="pagination-element"
      :class="{ active: currentPage === totalPages }"
    >
      {{ totalPages }}
    </span>

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
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    totalPages: {
      type: Number,
      required: true,
      default: 1
    },
    handlePageChange: {
      type: Function,
      default: () => ({})
    }
  },
  computed: {
    startPage() {
      return Math.max(2, this.currentPage - 2)
    },
    endPage() {
      return Math.min(this.currentPage + 2, this.totalPages - 1)
    },
    visiblePages() {
      let pages = []
      for (let i = this.startPage; i <= this.endPage; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  methods: {
    switchNextPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('handlePageChange', page)
      }
    }
  }
}
</script>
