<template>
  <section id="header" class="header mt-[70px]" ref="target">
    <div class="container mx-auto">
      <div class="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
        <div class="flex flex-col justify-center order-2 lg:order-1" v-motion-slide-visible-once-top>
          <h5 class="mb-6 subtitle">{{ $t('header.name') }}</h5>
          <h1 class="mb-8 header-title">{{ $t('header.profession') }}</h1>
          <p class="max-w-xl mb-12 opacity-80">
            {{ $t('header.description') }}
          </p>

          <div>
            <button
              class="px-10 py-4 text-sm font-black tracking-widest uppercase btn btn-primary"
              :title="$t('header.button')"
              @click="scrollToAnchor('about')"
            >
              {{ $t('header.button') }}
            </button>
          </div>
        </div>
        <div class="flex justify-center order-1 lg:order-2" v-motion-slide-visible-once-bottom>
          <div class="relative group">
            <div
              class="absolute transition-all duration-700 rounded-full -inset-4 bg-primary/10 blur-3xl group-hover:bg-primary/20"
            ></div>
            <img
              src="~/assets/img/hero.png"
              class="relative object-contain max-h-[500px] drop-shadow-2xl"
              alt="William Meier"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { scrollToAnchor } = useAnchorScroll({})
</script>
