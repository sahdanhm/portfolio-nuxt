<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const handleScroll = () => {
  const navBar = document.getElementById('navbar');
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop >= 20) {
    navBar.style.backgroundColor = 'white';
    navBar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
  } else {
    navBar.style.backgroundColor = 'transparent';
    navBar.style.borderBottom = 'none';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <header
    class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 z-100"
    id="navbar"
  >
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center">
      <div class="flex items-center justify-between sm:me-auto">
        <NuxtLink
          class="flex-none text-2xl focus:opacity-80 alexandria-bold"
          href="/"
          aria-label="Brand"
        >
          syahdan
        </NuxtLink>
        <div class="sm:hidden">
          <DropdownLanguage />
        </div>
        <div class="sm:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{ hidden: isMenuOpen }"
              id="i-menu"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              :class="{ hidden: !isMenuOpen }"
              id="i-x"
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="{ hidden: !isMenuOpen }"
        class="sm:block absolute sm:relative right-3 left-3 sm:right-0 sm:left-0 mt-5 sm:mt-0 px-5 pb-5 sm:px-0 sm:pb-0 rounded-2xl bg-white sm:bg-transparent shadow-2xl sm:shadow-none"
      >
        <div
          class="flex flex-col mt-5 sm:gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0"
          id="navbar-menu"
        >
          <NuxtLink
            exact-active-class="color1-text"
            class="font-medium py-2 sm:py-0 transition-[padding] sm:transition-transform duration-300 active:duration-100 ease-in-out active:ps-10 hover:ps-10 sm:active:ps-0 sm:hover:scale-150 sm:active:scale-150 sm:hover:ps-0"
            to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            active-class="color1-text"
            class="font-medium py-2 sm:py-0 transition-[padding] sm:transition-transform duration-300 active:duration-100 ease-in-out active:ps-10 hover:ps-10 sm:active:ps-0 sm:hover:scale-150 sm:active:scale-150 sm:hover:ps-0"
            to="/works"
            >Works</NuxtLink
          >
          <NuxtLink
            active-class="color1-text"
            class="font-medium py-2 sm:py-0 transition-[padding] sm:transition-transform duration-300 active:duration-100 ease-in-out active:ps-10 hover:ps-10 sm:active:ps-0 sm:hover:scale-150 sm:active:scale-150 sm:hover:ps-0"
            to="/contact"
            >Contact</NuxtLink
          >
          <NuxtLink
            active-class="color1-text"
            class="font-medium py-2 sm:py-0 transition-[padding] sm:transition-transform duration-300 active:duration-100 ease-in-out active:ps-10 hover:ps-10 sm:active:ps-0 sm:hover:scale-150 sm:active:scale-150 sm:hover:ps-0"
            to="/about-me"
            >About me</NuxtLink
          >
        </div>
      </div>
      <div class="hidden sm:block mx-10">
        <DropdownLanguage />
      </div>
    </nav>
  </header>
</template>
<style>
#navbar {
  transition: background-color 0.2s ease;
}
</style>
