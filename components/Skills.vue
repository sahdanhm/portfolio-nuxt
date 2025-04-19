<script setup>
const skills = [
  {
    id: 1,
    image: '/img/logo-laravel.svg',
    title: 'Laravel',
    description: `He has enough experience in using Laravel framework. Laravel is the best framework that he can handle.`,
  },
  {
    id: 2,
    image: '/img/logo-sql.svg',
    title: 'SQL',
    description: `He has 3 years experience in using SQL. He can use it properly to manage app's database.`,
  },
  {
    id: 3,
    image: '/img/logo-tailwindcss.png',
    title: 'Tailwind CSS',
    description: ` Even he is a back-end developer, he can use Tailwind CSS to make a
          good-looking website.`,
  },
  {
    id: 4,
    image: '/img/logo-php.svg',
    title: 'PHP',
    description: `This is the fundamental of Laravel as a PHP Framework. And I'm also good at this.`,
  },
  {
    id: 5,
    image: '/img/logo-bootsrap.svg',
    title: 'Bootsrap',
    description: `This CSS Framework is my first framework i've ever used. I have a lot experience working on it.`,
  },
];

const onHover = (e) => {
  e.target.firstChild.classList.remove('grayscale');
  e.target.classList.add('shadow-md', 'scale-102');
};
const onMouseLeave = (e) => {
  e.target.firstChild.classList.add('grayscale');
  e.target.classList.remove('shadow-md', 'scale-102');
};
</script>
<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-3"
  >
    <div
      class="bg-[#d9d9d9]/30 py-3 pe-3 items-center rounded-xl grid grid-cols-3 transition duration-400 lg:hover:-translate-y-2"
      @mouseenter="onHover"
      @mouseleave="onMouseLeave"
      v-for="(skill, index) in skills"
      :key="index.id"
    >
      <div class="justify-self-center w-2/3 transition duration-400 grayscale">
        <img
          :src="skill.image"
          :alt="`${skill.title}-logo`"
          class="w-full h-auto"
        />
      </div>
      <div class="col-span-2">
        <h1 class="color1-text text-2xl alexandria-bold">{{ skill.title }}</h1>
        <p class="text-xs sm:text-base">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </div>
</template>
