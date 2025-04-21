<script setup>
const me = [
  {
    image: '/img/me2.png',
    description: `is <span class="color1-text">the most attractive</span> guy in the world. He is also an <span class="color1-text">excellent</span> back-end developer in web. He has <span class="color1-text">3 years experience</span> in programming website. He loves to study and learn new things. He is also a reptile lover. But he <span class="color1-text">focus on learning</span> programming and web development. The reason he focus on learning programming is that, in programming every second it has something new to learn, so he is interested on it. He is a self-taught programmer. `,
  },
  {
    image: '/img/me4.png',
    description: `He is a student at <span class="color1-text">Manangga Pratama</span> vocational High School in Tasikmalaya, Indonesia. He is a student at the <span class="color1-text">Software Engineering</span> major. He is known as a <span class="color1-text">smart and diligent</span> student. He is <span class="color1-text">the best student</span> in his school. The most favorite subject is programming and mathematics. He has a lot of friends in his school, because he is a friendly person. `,
  },
  {
    image: '/img/me.png',
    description: `He has <span class="color1-text">3 years experience</span> in programming website. He is a self-taught programmer. He has experience in building website using <span class="color1-text">Laravel, Nuxt, Tailwind, Bootstrap, and more.</span> He also has a lot of <span class="color1-text">experience in using MySQL</span> as the database management system. `,
  },
];
console.log(me);
</script>
<template>
  <div class="grid lg:grid-cols-2 place-items-center section">
    <NuxtImg
      format="webp"
      alt="Image"
      :src="me[0].image"
      width="500"
      height="500"
      layout="responsive"
    />
    <div class="text-center lg:text-left">
      <p class="text-5xl alexandria-bold color1-text sm:text-7xl xl:text-9xl">
        syahdan
      </p>
      <p class="text-base mt-2 sm:text-2xl" v-html="me[0].description"></p>
    </div>
  </div>
  <div class="section">
    <div class="grid lg:grid-cols-2 place-items-center">
      <NuxtImg
        format="webp"
        :src="me[1].image"
        alt="Image"
        width="500"
        height="500"
        layout="responsive"
      />
      <div class="lg:order-first">
        <p class="text-base mt-2 sm:text-2xl text-center lg:text-right" v-html="me[1].description">
        </p>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="grid lg:grid-cols-2 place-items-center">
      <NuxtImg
        format="webp"
        :src="me[2].image"
        alt="Image"
        width="500"
        height="500"
        layout="responsive"
      />
      <div class="">
        <p class="text-base mt-2 sm:text-2xl text-center lg:text-left" v-html="me[2].description">
        </p>
      </div>
    </div>
  </div>
</template>
