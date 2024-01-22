<template>
  <div class="loader" v-if="!isLoaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script setup>
const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>
