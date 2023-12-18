<template>
  <nav class="navbar">
    <div class="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <font-awesome-icon icon="fa-solid fa-code" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">William </span>
      </a>

      <div class="navbar-nav hidden w-full md:block md:w-auto mx-auto">
        <ul class="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white">About</a>
          </li>
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white">Work</a>
          </li>
        </ul>
      </div>
      <!-- {{ colorMode }} -->
      <div>
        <!-- <font-awesome-icon icon="fa-brands fa-twitter-square" />
        <font-awesome-icon icon="fa-brands fa-github-square" /> -->
        <button
          class="btn-theme text-dark"
          @click="colorMode.preference = 'dark'"
          v-if="colorMode.preference === 'light'"
        >
          <font-awesome-icon icon="fa-solid fa-moon text-primary" />
        </button>
        <button
          class="btn-theme text-yellow-200"
          @click="colorMode.preference = 'light'"
          v-if="colorMode.preference === 'dark'"
        >
          <font-awesome-icon icon="fa-solid fa-sun text-primary" />
        </button>

        <button class="ml-3">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  .nav-link {
    padding: 0.5rem 0.75rem;
    &:hover {
      color: theme('colors.primary');
    }
  }
}
.btn {
  &-theme {
    height: 35px;
    width: 35px;
    border-radius: 5px;
    background-color: lighten(#1f1b1b, 5%);
  }
}
</style>

<style lang="postcss">
body {
  @apply min-h-screen bg-white text-dark dark:bg-dark dark:text-white;
}
</style>

<script setup>
const colorMode = useColorMode()
</script>
