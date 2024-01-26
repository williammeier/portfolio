<template>
  <section id="contact" class="contact">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('contact.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
        <div v-motion-slide-visible-once-left>
          <img src="~/assets/images/contact.jpg" alt="" class="w-full" />
        </div>
        <div class="mt-7 md:mt-0">
          <p v-motion-slide-visible-once-right>
            {{ $t('contact.description') }}
          </p>
          <div class="mt-10">
            <p class="mb-1.5" v-motion-slide-visible-once-right>
              <a href="https://www.linkedin.com/in/williammeier01" target="_blank" title="Linkedin">
                linkedin.com/in/williammeier01
              </a>
            </p>
            <p class="mb-1.5" v-motion-slide-visible-once-right>
              <a href="https://github.com/williammeier" target="_blank" title="GitHub"> github.com/williammeier </a>
            </p>
            <p class="mb-1.5" v-motion-slide-visible-once-right>
              <a href="mailto:william.meier@outlook.com" target="_blank" title="Email"> william.meier@outlook.com </a>
            </p>
            <p class="mb-1.5" v-motion-slide-visible-once-right>
              <a href="https://api.whatsapp.com/send?phone=5549999235930" target="_blank" title="Whatsapp">
                whatsapp.com/5549999235930
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
