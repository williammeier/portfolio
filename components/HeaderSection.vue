<template>
  <section id="header" class="header" ref="target">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
        <div class="flex flex-col justify-center mt-16 lg:mt-0" v-motion-slide-visible-once-left>
          <h5 class="subtitle">{{ $t('header.name') }}</h5>
          <h2 class="header-title">{{ $t('header.profession') }}</h2>
          <h5 class="subtitle mt-2">{{ $t('header.description') }}</h5>

          <div class="mt-12">
            <a
              href=""
              class="btn btn-primary btn--animated"
              :title="$t('header.button')"
              @click="scrollToAnchor('about')"
            >
              {{ $t('header.button') }}
            </a>
          </div>
        </div>
        <div class="flex justify-center px-4 lg:px-0" v-motion-slide-visible-once-right>
          <img src="~/assets/img/hero.png" class="object-contain" alt="William Meier" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { scrollToAnchor } = useAnchorScroll({})
</script>
