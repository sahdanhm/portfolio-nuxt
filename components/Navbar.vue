<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <header
    class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 z-100"
    id="navbar"
  >
    <nav
      class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    >
      <div class="flex items-center justify-between">
        <a
          class="flex-none text-2xl focus:opacity-80 alexandria-bold"
          href="/"
          aria-label="Brand"
        >
          syahdan
        </a>
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
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
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
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
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
        id="navbar-menu"
        class="overflow-hidden transition-all duration-300 basis-full grow sm:block absolute sm:relative "
        aria-labelledby="navbar-menu"
      >
        <div
          class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
        >
          <a
            class="nav-link font-medium color1-text"
            href="/"
            aria-current="page"
            >Home</a
          >
          <a class="nav-link font-medium" href="/works">Works</a>
          <a class="nav-link font-medium" href="/contact">Contact</a>
          <a class="nav-link font-medium" href="/about-me">About me</a>
          <div
            class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]"
          >
            <button
              id="hs-navbar-example-dropdown"
              type="button"
              class="hs-dropdown-toggle flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Mega Menu"
            >
              Dropdown
              <svg
                class="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute top-full sm:border border-gray-200 before:-top-5 before:start-0 before:w-full before:h-5 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-navbar-example-dropdown"
            >
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                About
              </a>
              <div
                class="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative"
              >
                <button
                  id="hs-navbar-example-dropdown-sub"
                  type="button"
                  class="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                >
                  Sub Menu
                  <svg
                    class="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 before:absolute sm:border border-gray-200 before:-end-5 before:top-0 before:h-full before:w-5 sm:mx-2.5! top-0 end-full"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-navbar-example-dropdown-sub"
                >
                  <div class="p-1 space-y-1">
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      About
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div>
              </div>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Downloads
              </a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                href="#"
              >
                Team Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
.nav-link {
  transition: transform 0.3s ease-in-out;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 2px;
  background-color: black;
  transform: translateY(-50%);
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}

.nav-link:hover {
  transform: scale(1.2);
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}
</style>
