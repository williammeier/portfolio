<template>
  <section class="header">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
        <div class="flex flex-col justify-center">
          <h5 class="text-primary text-lg lg:text-xl font-medium">{{ $t('header.name') }}</h5>
          <h2 class="text-6xl md:text-7xl lg:text-8xl font-extrabold">{{ $t('header.profession') }}</h2>
          <h5 class="text-primary text-lg lg:text-xl font-medium mt-2">{{ $t('header.location') }}</h5>

          <div class="mt-12">
            <a href="" class="btn btn-primary btn--animated">{{ $t('header.button') }}</a>
          </div>
        </div>
        <div class="flex justify-center px-4 md:px-0 mt-16 md:mt-0">
          <img src="~/assets/images/hero.png" class="object-contain" alt="William Meier" />
        </div>
      </div>
    </div>
  </section>
</template>
