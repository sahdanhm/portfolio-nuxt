<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
  pauseAutoplayOnHover: true,
};

const knowledges = [
  {
    id: 1,
    image: '/img/einstein.png',
    source: [{ title: 'syahdan', link: null }],
    description: `Did you know? Albert Einstein is one of the most genius man in the world. He is the one who developed theory of relativity which denied our past belief. We believed that time was constant but Einstein believed otherwise, he believed that time was relative. Have you ever heard about time dilation? that is one of the idea from this theory.`,
  },
  {
    id: 2,
    image: '/img/me.png',
    source: [
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      { title: 'wikipedia.com', link: 'wikipedia.com' },
      {
        title: 'ujang.com',
      },
    ],
    description: `
Consectetur praesentium nesciunt eum repellendus itaque ipsam animi vel veritatis magni laboriosam sunt sed deleniti similique sequi autem necessitatibus ad vitae corporis, voluptate commodi nulla. Cumque iure ratione fugiat officia!`,
  },
];
</script>

<template>
  <Carousel
    v-bind="carouselConfig"
    class="md:mask-x-from-98% md:mask-x-to-100%"
  >
    <Slide v-for="(knowledge, index) in knowledges" :key="index.id">
      <template #default="{ isNext, isPrev }">
        <div
          class="grid grid-cols-1 md:grid-cols-2 justify-items-center transition duration-1000 md:ps-[3vw]"
          :class="{ 'opacity-50 scale-50': isNext || isPrev }"
        >
          <div class="md:order-last">
            <NuxtImg :src="knowledge.image" format="webp" alt="Image" />
          </div>
          <div class="text-xs sm:text-base">
            <p>{{ knowledge.description }}</p>
            <br />
            <p class="italic">
              source :
              <span
                v-for="(src, index) in knowledge.source"
                class="inline-block"
              >
                {{ index + 1 }}.<a
                  :href="src.link"
                  :class="{ underline: src.link }"
                >
                  {{ src.title }}</a
                >&nbsp;</span
              >
            </p>
          </div>
        </div>
      </template>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
