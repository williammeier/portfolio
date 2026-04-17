<template>
  <section id="contact" class="contact">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('contact.title') }}</h2>
      <div class="grid items-center grid-cols-1 gap-20 mt-16 md:grid-cols-2">
        <div v-motion-slide-visible-once-left class="relative group">
          <div
            class="absolute transition duration-700 rounded-lg -inset-2 bg-primary/10 blur group-hover:bg-primary/20"
          ></div>
          <img
            src="~/assets/img/contact.jpg"
            alt=""
            class="relative w-full transition-all duration-700 rounded-lg grayscale hover:grayscale-0"
          />
        </div>
        <div class="space-y-12">
          <p class="text-xl font-medium leading-relaxed opacity-80" v-motion-slide-visible-once-left>
            {{ $t('contact.description') }}
          </p>
          <div class="grid grid-cols-1 gap-6">
            <div
              v-motion-slide-visible-once-left
              v-for="(link, i) in [
                {
                  label: 'Linkedin',
                  href: 'https://www.linkedin.com/in/williammeier01',
                  text: 'linkedin.com/in/williammeier01',
                  icon: 'mdi-linkedin',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/williammeier',
                  text: 'github.com/williammeier',
                  icon: 'mdi-github',
                },
                {
                  label: 'Email',
                  href: 'mailto:william.meier@outlook.com',
                  text: 'william.meier@outlook.com',
                  icon: 'mdi-email',
                },
                {
                  label: 'Whatsapp',
                  href: 'https://api.whatsapp.com/send?phone=5549999235930',
                  text: '+55 49 99923 5930',
                  icon: 'mdi-whatsapp',
                },
              ]"
              :key="i"
            >
              <a :href="link.href" target="_blank" :title="link.label" class="flex items-center space-x-4 group">
                <v-icon
                  :icon="link.icon"
                  size="24"
                  class="transition-all opacity-50 group-hover:opacity-100 group-hover:text-primary"
                />
                <span
                  class="text-lg font-semibold tracking-tight transition-all border-b border-primary/0 group-hover:border-primary/40"
                  >{{ link.text }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
