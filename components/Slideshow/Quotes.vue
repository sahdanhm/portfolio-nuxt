<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const quotes = [
  {
    id: 1,
    author: 'Albert Einstein',
    quotes: `Anyone who has never made a mistake has never tried anything new.`,
    image: '/img/einstein.png',
  },
  {
    id: 2,
    author: 'Syahdan Kasep',
    quotes: `Love is not just about having time with her/him. Love is about do something to make her/him safe, happy, comportable, and more.`,
    image: '/img/me3.png',
  },
];

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  transition: 1000,
  slideEffect: 'fade',
};
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(quote, index) in quotes" :key="index.id">
      <template #default="{ isNext, isPrev }">
        <div class="flex flex-col-reverse sm:flex-row ms-auto">
          <div class="flex items-center lg:text-lg">
            <p>
              <cite>"{{ quote.quotes }}"</cite><br /><span
                class="font-bold float-right"
                >- {{ quote.author }} -</span
              >
            </p>
          </div>
          <div class="mx-3 flex place-content-center">
            <NuxtImg
              :src="quote.image"
              :alt="`${quote.author}-image`"
              width="500"
              height="500"
              laout="responsive"
              format="webp"
            />
          </div>
        </div>
      </template>
    </Slide>
  </Carousel>
</template>
