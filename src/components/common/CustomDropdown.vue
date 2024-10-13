<template>
  <div class="custom-dropdown" ref="dropdown" @mousedown="handleClickOutside">
    <div class="selected" @click="toggleDropdown">
      {{ selectedOption }}
      <i v-if="isDropdownOpen" class="pi pi-chevron-up" style="font-size: 0.8rem"></i>
      <i v-else class="pi pi-chevron-down" style="font-size: 0.8rem"></i>
    </div>
    <ul v-if="isDropdownOpen" class="options">
      <li class="option" @click="selectOption('All Categories')">All Categories</li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="option"
        @click="selectOption(category.name)"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomDropdown',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    handleDropdownSelection: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      selectedOption: 'All categories',
      isDropdownOpen: false
    }
  },

  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectOption(option) {
      this.$emit('handleDropdownSelection', option)
      this.selectedOption = option
      this.isDropdownOpen = false
    },
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown
      if (dropdown && !dropdown.contains(event.target)) {
        this.isDropdownOpen = false
      }
    }
  }
}
</script>
