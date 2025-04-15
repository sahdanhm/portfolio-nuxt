<script setup>
const onHover = (e) => {
  e.target.firstChild.classList.remove('grayscale');
};
const onMouseLeave = (e) => {
  e.target.firstChild.classList.add('grayscale');
};
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-3">
    <div
      class="bg-[#d9d9d9]/30 p-3 rounded-xl flex transition duration-400 hover:shadow-md hover:scale-102 lg:hover:-translate-y-2"
      @mouseenter="onHover"
      @mouseleave="onMouseLeave"
    >
      <div class="w-50 mx-3 flex items-center transition duration-400 grayscale">
        <img
          src="~/assets/img/logo-laravel.svg"
          alt="Image"
          class="w-full h-auto"
        />
      </div>
      <div class="">
        <h1 class="color1-text text-2xl alexandria-bold">Laravel</h1>
        <p class="text-xs sm:text-base">
          He has enough experience in using Laravel framework. Laravel is the
          best framework that he can handle.
        </p>
      </div>
    </div>
    <div
      class="bg-[#d9d9d9]/30 p-3 rounded-xl flex transition duration-400 hover:shadow-md hover:scale-102 lg:hover:-translate-y-2"
     @mouseenter="onHover"
      @mouseleave="onMouseLeave"
    >
      <div class="w-50 mx-3 flex items-center transition duration-400 grayscale">
        <img
          src="~/assets/img/logo-sql.svg"
          alt="Image"
          class="w-full h-auto"
          :class="{ 'grayscale-0': onHover }"
        />
      </div>
      <div class="">
        <h1 class="color1-text text-2xl alexandria-bold">SQL</h1>
        <p class="text-xs sm:text-base">
          He has 3 years experience in using SQL. He can use it properly to
          manage app's database.
        </p>
      </div>
    </div>
    <div
      class="bg-[#d9d9d9]/30 p-3 rounded-xl flex transition duration-400 hover:shadow-md hover:scale-102 lg:hover:-translate-y-2"
      @mouseenter="onHover"
      @mouseleave="onMouseLeave"
    >
      <div class="w-50 mx-3 flex items-center transition duration-400 grayscale">
        <img
          src="~/assets/img/logo-tailwindcss.png"
          alt="Image"
          class="w-full h-auto"
          :class="{ 'grayscale-0': onHover }"
        />
      </div>
      <div class="">
        <h1 class="color1-text text-2xl alexandria-bold">Tailwind CSS</h1>
        <p class="text-xs sm:text-base">
          Even he is a back-end developer, he can use Tailwind CSS to make a
          good-looking website.
        </p>
      </div>
    </div>
  </div>
</template>
