<template>
  <div>
    <nav class="navbar">
      <div class="container mx-auto px-4 md:px-0 flex nowrap items-end justify-between mx-auto py-5">
        <a href="/" class="text-2xl text-dark dark:text-white font-semibold">&lt;>&#xa0;William </a>

        <div class="navbar-nav" :class="showNav == true ? 'show' : ''">
          <ul class="nav-group mx-auto flex-col md:flex-row md:p-0 md:space-x-16">
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
          <ul class="nav-group social flex flex-row align-end mt-4 md:mt-0">
            <li class="nav-item mr-5">
              <a href="https://github.com/williammeier" target="_blank" title="GitHub" class="nav-link">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
            </li>
            <li class="nav-item md:mr-5">
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

          <button
            class="nav-toggle md:hidden ml-5"
            @click="toggleNav"
            :class="showNav == true ? 'close' : ''"
            title="Toggle Menu"
          >
            <span class="nav-toggle-icon"></span>
          </button>
          <!-- <button class="nav-link close md:hidden" @click="toggleNav" title="Fechar Menu">
            <font-awesome-icon icon="fa-solid fa-close" />
          </button> -->
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
