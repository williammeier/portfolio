<template>
  <div class="loader" :class="{ 'loaded': isLoaded }"></div>
</template>

<script setup>
const isLoaded = ref(false)

onMounted(() => {
  // Set to true immediately on mount to speed up site show
  isLoaded.value = true
})
</script>
