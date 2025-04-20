<script setup>
import { useStyleInMiddle } from '~/composables/useStyleInMiddle';
const { setItemRef, activeIndex } = useStyleInMiddle();

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

const works = [
  {
    id: 1,
    name: 'Compro Koyasai',
    company: 'PT Koyasai Indonesia',
    image: '/img/work-1.png',
    description:
      'Compro (Company Profile) Koyasai is a company profile website which is used to introduce the company to the public. This website is built using Nuxt.js for the front-end side and Laravel for the back-end side.',
  },
  {
    id: 2,
    name: 'Compro LPK Tsukuba',
    company: 'LPK Tsukuba Indonesia',
    image: '/img/work-2.png',
    description: `Compro (Company Profile) LPK Tsukuba is a company profile website which is used to introduce the company to the public and introduce their program to work in Japan. If you are interested in working at Japan, go check their website. This website is built using Vue.js for the front-end side and Laravel for the back-end side.`,
  },
];
</script>
<template>
  <div class="grid grid-cols-1 place-content-center lg:mx-[5vw]">
    <div
      v-for="(work, index) in works"
      :key="work.id"
      :ref="setItemRef"
      class="grid grid-cols-1 gap-5 pt-5"
    >
      <div
        class="grid lg:grid-cols-3 grid-cols-1 gap-5"
        @mouseenter="onHover(index)"
        @mouseleave="onMouseLeave(index)"
      >
        <div class="grid content-center">
          <div
            class="w-full rounded-lg overflow-hidden grayscale transition duration-500"
            :class="[
              activeIndex === index
                ? 'grayscale-0 -translate-y-3 shadow-lg shadow-neutral-700'
                : '',
            ]"
            :id="`work-image-${index}`"
          >
            <NuxtLink :to="`/works/${work.id}`">
              <NuxtImg
                format="webp"
                :src="work.image"
                :alt="`${work.title}-image`"
                class="object-cover"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="lg:col-span-2">
          <h1 class="alexandria-bold color1-text text-2xl sm:text-3xl">
            <NuxtLink :to="`/works/${work.id}`" class="hover:underline">{{
              work.name
            }}</NuxtLink>
          </h1>
          <p class="text-gray-400 text-xs">{{ work.company }}</p>
          <p class="sm:text-2xl mt-3">
            {{ work.description }}
          </p>
        </div>
      </div>
      <hr class="border-none h-0.5 color1-bg-15 rounded-full" />
    </div>
  </div>
</template>
