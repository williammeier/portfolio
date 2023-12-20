<template>
  <div>
    <a href="/" class="text-dark dark:text-white font-semibold" :class="style">&lt;>&#xa0;William </a>
  </div>
</template>

<script setup>
const props = defineProps(['style'])
console.log(props.foo)
</script>
