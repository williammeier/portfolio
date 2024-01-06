<template>
  <nav class="navbar">
    <div class="container mx-auto flex nowrap items-end justify-between mx-auto py-5">
      <a href="/" class="text-2xl text-dark dark:text-white font-semibold">&lt;>&#xa0;William </a>

      <div class="navbar-nav" :class="showNav == true ? 'show' : ''">
        <ul class="nav-group mx-auto flex-col md:flex-row md:p-0 md:space-x-16">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark dark:text-white" :title="$t('nav.home')">
              {{ $t('nav.home') }}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark dark:text-white" :title="$t('nav.about')">
              {{ $t('nav.about') }}
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark dark:text-white" :title="$t('nav.work')">
              {{ $t('nav.work') }}
            </a>
          </li>
        </ul>
        <ul class="nav-group social flex flex-row align-end mt-4 md:mt-0">
          <li class="nav-item mr-4">
            <a href="https://github.com/williammeier" target="_blank" title="GitHub" class="nav-link">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </li>
          <li class="nav-item md:mr-4">
            <a href="https://www.linkedin.com/in/williammeier01/" target="_blank" title="Linkedin" class="nav-link">
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>

      <div class="navbar-tools flex">
        <button
          class="nav-link mr-4"
          @click="colorMode.preference = 'dark'"
          v-if="colorMode.preference === 'light'"
          title="Light"
        >
          <font-awesome-icon icon="fa-solid fa-moon" />
        </button>
        <button
          class="nav-link mr-4"
          @click="colorMode.preference = 'light'"
          v-if="colorMode.preference === 'dark'"
          title="Dark"
        >
          <font-awesome-icon icon="fa-solid fa-sun" />
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
const colorMode = useColorMode()
const showNav = ref(false)

const toggleNav = () => {
  showNav.value = !showNav.value
}

import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
