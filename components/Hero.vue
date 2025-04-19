<script setup>
import { useTypewriter } from '@/composables/useTypewriter';
import { onUpdated, onMounted } from 'vue';

const texts = ['Study', 'Reptiles', 'Code', 'You'];
const heroImage = [{ image: '/img/einstein.png' }];

const { currentText } = useTypewriter(texts, 100, 1000, 1000 * 2);
function getStyle() {
  const heroText = document.getElementById('heroText');
  const heroTextAnimated = document.getElementById('heroTextAnimated');
  if (heroText) {
    const style = window.getComputedStyle(heroText);
    heroTextAnimated.style.paddingLeft = style.marginLeft;
  }
}
onUpdated(() => {
  getStyle();
});
onMounted(() => {
  getStyle();
});
</script>
<template>
  <div class="grid lg:grid-cols-2 h-full sm:h-screen">
    <div class="self-center text-[20vw] sm:text-9xl">
      <div id="heroText" class="lg:mx-auto w-fit">
        <h1 class="font-bold">I</h1>
        <h1 class="font-bold">Love</h1>
      </div>
      <div class="alexandria-bold color1-text" id="heroTextAnimated">
        <h1>{{ currentText }}<span class="blink font-normal">|</span></h1>
      </div>
    </div>
    <div class="grid place-content-center">
      <NuxtImg
        format="webp"
        :src="heroImage[0].image"
        alt="Hero-image"
        width="500"
        height="500"
        layout="responsive"
      />
    </div>
  </div>
</template>
<style scoped>
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
