<template>
  <nav class="navbar">
    <div class="container flex items-center justify-between py-4 mx-auto">
      <a href="/" class="navbar-brand" title="William Dev">
        <img src="/logo.png" alt="Logo" />
        <span>William</span>
      </a>

      <div class="navbar-nav" :class="{ show: showNav }">
        <ul class="nav-group main-nav">
          <li class="nav-item">
            <nuxt-link @click="scrollTo('home')" class="nav-link" :title="$t('nav.home')">
              {{ $t('nav.home') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link @click="scrollTo('about')" class="nav-link" :title="$t('nav.about')">
              {{ $t('nav.about') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link @click="scrollTo('stack')" class="nav-link" :title="$t('nav.stack')">
              {{ $t('nav.stack') }}
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link @click="scrollTo('work')" class="nav-link" :title="$t('nav.work')">
              {{ $t('nav.work') }}
            </nuxt-link>
          </li>
        </ul>

        <ul class="nav-group social-nav">
          <li class="nav-item">
            <a href="https://github.com/williammeier" target="_blank" title="GitHub" class="nav-link">
              <v-icon icon="mdi-github" size="20" />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/williammeier01/" target="_blank" title="Linkedin" class="nav-link">
              <v-icon icon="mdi-linkedin" size="20" />
            </a>
          </li>
        </ul>
      </div>

      <div class="navbar-tools">
        <button class="nav-tool-btn" @click="toggleTheme" title="Light/Dark">
          <v-icon icon="mdi-theme-light-dark" size="18" />
        </button>
        <button class="nav-lang" v-if="locale === 'en'" @click="changeLanguage('pt')" title="English">EN</button>
        <button class="nav-lang" v-if="locale === 'pt'" @click="changeLanguage('en')" title="Português">PT</button>
        <button class="nav-toggle md:hidden" @click="toggleNav" :class="{ close: showNav }" title="Toggle Menu">
          <span class="nav-toggle-icon"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showNav = ref(false)
// Toggle Nav
const toggleNav = () => {
  showNav.value = !showNav.value
}

const { scrollToAnchor } = useAnchorScroll({})
const scrollTo = (anchor) => {
  showNav.value = false
  scrollToAnchor(anchor)
}

// Color Theme
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

// Change Language
const { locale, setLocale } = useI18n()
const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
