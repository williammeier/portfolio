<template>
  <button class="scroll-to-top" title="Back to top" @click="scrollToTop()" v-show="showBackToTop">
    <v-icon icon="mdi-arrow-up" size="20" />
  </button>
</template>

<script setup>
const { scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
})

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
