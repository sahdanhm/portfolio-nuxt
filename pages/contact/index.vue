<script setup>
const contactImage = [{ image: '/img/me.png' }];
</script>
<template>
  <div class="py-10 px-3">
    <h1 class="title mb-5">
      Here you can <span class="color1-text">contact him</span> for anything
    </h1>
    <div class="mt-10 grid lg:grid-cols-3">
      <div class="col-span-2">
        <Contact />
      </div>
      <div class="hidden lg:block">
        <NuxtImg
          format="webp"
          :src="contactImage[0].image"
          class="mx-auto"
          alt="Image"
          width="400"
          height="400"
          layout="responsive"
        />
        <h1 class="alexandria-bold text-2xl text-center">
          " Let's connect with me!! "
        </h1>
      </div>
    </div>
  </div>
</template>
