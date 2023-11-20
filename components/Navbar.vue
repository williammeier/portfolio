<template>
  <nav class="navbar bg-white dark:bg-dark">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">William</span>
      </a>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto mx-auto" id="navbar-default">
        <ul class="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white">About</a>
          </li>
          <li>
            <a href="#" class="nav-link text-base text-dark dark:text-white">Work</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  .nav-link {
    padding: 0.5rem 0.75rem;
    &:hover {
      color: theme('colors.primary');
    }
  }
}
</style>
