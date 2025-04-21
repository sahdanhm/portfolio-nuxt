<script setup>
const onHover = (i) => {
  const image = document.getElementById(`work-image-${i}`);
  image.classList.remove('grayscale', 'grayscale-0');
  image.classList.add('-translate-y-3', 'shadow-lg', 'shadow-neutral-700');
};
const onMouseLeave = (i) => {
  const image = document.getElementById(`work-image-${i}`);
  image.classList.add('grayscale');
  image.classList.remove('-translate-y-3', 'shadow-lg', 'shadow-neutral-700');
};
const divOnHover = (e) => {
  e.target.firstChild.classList.remove('grayscale');
  e.target.classList.add('shadow-md', 'scale-102');
};
const divOnMouseLeave = (e) => {
  e.target.firstChild.classList.add('grayscale');
  e.target.classList.remove('shadow-md', 'scale-102');
};

const works = [
  {
    id: 1,
    name: 'Compro Koyasai',
    company: 'PT Koyasai Indonesia',
    type: 'Company Profile Website',
    source: '-',
    sourcelink: '-',
    stack: 'Nuxt.js, Laravel, MySQL',
    link: 'https://koyasai.co.id',
    image: '/img/work-1.png',
    description:
      'Compro (Company Profile) Koyasai is a company profile website which is used to introduce the company to the public. This website is built using Nuxt.js for the front-end side and Laravel for the back-end side.',
  },
  {
    id: 2,
    name: 'Compro LPK Tsukuba',
    company: 'LPK Tsukuba Indonesia',
    type: 'Company Profile Website',
    source: '-',
    sourcelink: '-',
    stack: 'Nuxt.js, Laravel, MySQL',
    link: '-',
    image: '/img/work-2.png',
    description: `Compro (Company Profile) LPK Tsukuba is a company profile website which is used to introduce the company to the public and introduce their program to work in Japan. If you are interested in working at Japan, go check their website. This website is built using Vue.js for the front-end side and Laravel for the back-end side.`,
  },
];

const route = useRoute();
const id = route.params.id;
const work = works.find((work) => work.id === parseInt(id));
</script>
<template>
  <div
    class="grid grid-cols-1 gap-5 my-10 mx-3 lg:m-[10vw]"
    @mouseenter="onHover(index)"
    @mouseleave="onMouseLeave(index)"
  >
    <div
      class="w-fit rounded-lg overflow-hidden grayscale transition duration-500 justify-self-center"
      :class="[
        activeIndex === index
          ? 'grayscale-0 -translate-y-3 shadow-lg shadow-neutral-700'
          : '',
      ]"
      :id="`work-image-${index}`"
    >
      <NuxtImg format="webp" :src="work.image" :alt="`${work.title}-image`" />
    </div>
    <div class="text-center">
      <h1 class="alexandria-bold color1-text text-2xl sm:text-3xl">
        {{ work.name }}
      </h1>
      <p class="text-gray-400 text-xs">{{ work.company }}</p>
      <p class="sm:text-2xl mt-3">
        {{ work.description }}
      </p>
    </div>
    <hr class="color1-bg-15" />
    <div class="grid grid-cols-2 gap-3 lg:w-[50vw] lg:justify-self-center">
      <div
        class="bg-[#d9d9d9]/30 grid text-center py-5 px-3 gap-5 rounded-xl transition duration-400 lg:hover:-translate-y-2"
        @mouseenter="divOnHover"
        @mouseleave="divOnMouseLeave"
      >
        <h1
          class="color1-text sm:text-xl alexandria-bold grayscale transition duration-400"
        >
          Works type
        </h1>
        <p class="text-xs sm:text-lg">{{ work.type }}</p>
      </div>
      <div
        class="bg-[#d9d9d9]/30 grid text-center py-5 px-3 gap-5 rounded-xl transition duration-400 lg:hover:-translate-y-2"
        @mouseenter="divOnHover"
        @mouseleave="divOnMouseLeave"
      >
        <h1
          class="color1-text sm:text-xl alexandria-bold grayscale transition duration-400"
        >
          Stack
        </h1>
        <p class="text-xs sm:text-lg">{{ work.stack }}</p>
      </div>
      <div
        class="bg-[#d9d9d9]/30 grid text-center py-5 px-3 gap-5 rounded-xl transition duration-400 lg:hover:-translate-y-2"
        @mouseenter="divOnHover"
        @mouseleave="divOnMouseLeave"
      >
        <h1
          class="color1-text sm:text-xl alexandria-bold grayscale transition duration-400"
        >
          Source
        </h1>
        <a
          target="__blank"
          v-if="work.sourcelink !== '-'"
          class="text-xs sm:text-lg hover:underline"
          :href="work.sourcelink"
          >{{ work.source }}</a
        >
        <p v-else class="text-xs sm:text-lg">
          {{ work.source }}
        </p>
      </div>
      <div
        class="bg-[#d9d9d9]/30 grid text-center py-5 px-3 gap-5 rounded-xl transition duration-400 lg:hover:-translate-y-2"
        @mouseenter="divOnHover"
        @mouseleave="divOnMouseLeave"
      >
        <h1
          class="color1-text sm:text-xl alexandria-bold grayscale transition duration-400"
        >
          Link
        </h1>
        <a
          target="__blank"
          v-if="work.link !== '-'"
          class="text-xs sm:text-lg hover:underline"
          :href="work.link"
          >{{ work.link }}</a
        >
        <p v-else class="text-xs sm:text-lg">
          {{ work.link }}
        </p>
      </div>
    </div>
  </div>
</template>
