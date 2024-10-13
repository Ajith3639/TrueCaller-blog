<template>
  <div class="avatar">
    <img :src="src" :alt="alt" class="avatar-image" />
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      default: 'Avatar'
    }
  }
}
</script>
