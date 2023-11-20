<template>
  <div>
    <Navbar />

    <div class="p-4 pb-2 mt-5">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>

<script></script>

<script setup>
const colorMode = useColorMode()
</script>

<style lang="postcss">
body {
  @apply min-h-screen bg-white text-dark dark:bg-dark dark:text-white;
}
</style>
