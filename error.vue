<template>
  <NuxtLayout>
    <div class="container mx-auto">
      <div class="error h-screen">
        <img
          class="error-img"
          :src="error.statusCode === 404 ? '/portfolio/404.svg' : '/portfolio/error.svg'"
          alt="404 error"
        />
        <h2 class="text-3xl mt-7 mb-10">
          {{ error.statusCode === 404 ? 'Page not found!' : 'Oops, something went wrong!' }}
        </h2>
        <a href="/portfolio" class="btn-primary px-5 py-2 rounded-md">Go back</a>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
</script>
