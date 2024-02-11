<template>
  <div>
    <Loader />

    <Navbar :locale="locale" :setLocale="setLocale" />

    <HeaderSection />
    <AboutSection :locale="locale" />
    <StackSection />
    <WorkSection :locale="locale" />
    <ContactSection />

    <BackToTop />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
</script>
