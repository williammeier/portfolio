<template>
  <div>
    <Navbar />

    <HeaderSection />
    <AboutSection />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
