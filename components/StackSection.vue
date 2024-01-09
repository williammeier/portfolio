<template>
  <section class="skills">
    <div class="container mx-auto">
      <h2 class="title">stack.</h2>

      <div class="content-box md:mr-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui
          orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      <div class="flex flex-wrap gap-10 mt-10">
        <div class="card card-stack" v-for="lang in stack" :title="lang.name" :style="{ color: lang.color }">
          <v-icon :icon="lang.icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { stack } = await import('~/db/stack.json')
</script>
