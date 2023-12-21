<template>
  <div>
    <nav class="navbar">
      <div class="max-w-screen-xl flex nowrap items-end justify-between mx-auto overflow-hidden p-4">
        <Logo :style="'text-2xl'" />
        <div class="navbar-colapse" :class="showNav == true ? 'show' : ''">
          <!-- Logo -->
          <Logo :style="'text-3xl md:hidden text-white'" />

          <div class="navbar-nav mx-auto mt-7 md:mt-0">
            <ul class="flex flex-col md:p-0 md:flex-row md:space-x-16">
              <li class="nav-item">
                <a href="#" class="nav-link text-dark dark:text-white">Home</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-dark dark:text-white">About</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-dark dark:text-white">Work</a>
              </li>
            </ul>
          </div>
          <ul class="navbar-media flex flex-row align-end mt-4 md:mt-0">
            <li class="nav-item mr-5">
              <a href="https://github.com/williammeier" target="_blank" title="GitHub" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
            </li>
            <li class="nav-item mr-5">
              <a href="https://www.linkedin.com/in/williammeier01/" target="_blank" title="Linkedin" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>

        <div class="navbar-tools">
          <button
            class="nav-link"
            @click="colorMode.preference = 'dark'"
            v-if="colorMode.preference === 'light'"
            title="Light"
          >
            <font-awesome-icon icon="fa-solid fa-moon" />
          </button>
          <button
            class="nav-link"
            @click="colorMode.preference = 'light'"
            v-if="colorMode.preference === 'dark'"
            title="Dark"
          >
            <font-awesome-icon icon="fa-solid fa-sun" />
          </button>

          <button class="nav-link md:hidden ml-5" @click="toggleNav" title="Abrir Menu">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <button
            class="nav-link close md:hidden"
            :class="!showNav ? 'hidden' : ''"
            @click="toggleNav"
            title="Fechar Menu"
          >
            <font-awesome-icon icon="fa-solid fa-close" />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const showNav = ref(false)

const toggleNav = () => {
  showNav.value = !showNav.value
}
</script>
