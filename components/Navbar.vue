<template>
  <nav class="navbar">
    <div class="container mx-auto flex nowrap items-end justify-between mx-auto py-5">
      <a href="/" class="text-2xl text-dark dark:text-white font-semibold">&lt;>&#xa0;William </a>

      <div class="navbar-nav" :class="showNav == true ? 'show' : ''">
        <ul class="nav-group mx-auto flex-col md:flex-row md:p-0 md:space-x-16">
          <li class="nav-item">
            <nuxt-link
              @click="scrollToAnchor('home')"
              class="nav-link text-dark dark:text-white"
              :title="$t('nav.home')"
            >
              {{ $t('nav.home') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click="scrollToAnchor('about')"
              class="nav-link text-dark dark:text-white"
              :title="$t('nav.about')"
            >
              {{ $t('nav.about') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click="scrollToAnchor('stack')"
              class="nav-link text-dark dark:text-white"
              :title="$t('nav.stack')"
            >
              {{ $t('nav.stack') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click="scrollToAnchor('work')"
              class="nav-link text-dark dark:text-white"
              :title="$t('nav.work')"
            >
              {{ $t('nav.work') }}
            </nuxt-link>
          </li>
        </ul>
        <ul class="nav-group social flex flex-row align-end mt-4 md:mt-0">
          <li class="nav-item mr-4">
            <a href="https://github.com/williammeier" target="_blank" title="GitHub" class="nav-link">
              <v-icon icon="mdi-github" size="20" />
            </a>
          </li>
          <li class="nav-item md:mr-4">
            <a href="https://www.linkedin.com/in/williammeier01/" target="_blank" title="Linkedin" class="nav-link">
              <v-icon icon="mdi-linkedin" size="20" />
            </a>
          </li>
        </ul>
      </div>

      <div class="navbar-tools flex">
        <button class="nav-link mr-4" @click="toggleTheme" title="Light/Dark">
          <v-icon icon="mdi-theme-light-dark" size="20" />
        </button>
        <button class="nav-lang" v-if="locale === 'en'" @click="changeLanguage('pt')" title="English">EN</button>
        <button class="nav-lang" v-if="locale === 'pt'" @click="changeLanguage('en')" title="Português">PT</button>
        <button
          class="nav-toggle md:hidden ml-5"
          @click="toggleNav"
          :class="showNav == true ? 'close' : ''"
          title="Toggle Menu"
        >
          <span class="nav-toggle-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    },
  },
})

// Color Theme
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

// Toggle Nav
const showNav = ref(false)
const toggleNav = () => {
  showNav.value = !showNav.value
}

// Change Language
const { locale, setLocale } = useI18n()
const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
