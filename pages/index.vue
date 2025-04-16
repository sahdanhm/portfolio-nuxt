<script setup></script>
<template>
  <Hero />
  <main>
    <div class="bg-white/50 p-3 rounded-xl lg:grid lg:grid-cols-1">
      <div class="section">
        <h1 class="title">Did you know?</h1>
        <div class="grid md:grid-cols-2 place-items-center">
          <NuxtLink to="/about-me" class="w-fit">
            <img src="~/assets/img/me.png" class="" alt="Image" />
          </NuxtLink>
          <div class="">
            <NuxtLink
              to="/about-me"
              class="text-5xl font alexandria-bold color1-text sm:text-7xl xl:text-9xl hover:underline"
            >
              Syahdan
            </NuxtLink>
            <p class="text-base mt-2 sm:text-2xl">
              is the <span class="color1-text">most attractive guy</span> in the
              world. He is also an
              <span class="color1-text">excellent</span> back-end developer in
              web. He has 3 years experience in programming website.
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <h1 class="title">His skills?</h1>
        <Skills />
      </div>
      <div class="section">
        <h1 class="title">
          Wanna take a look <span class="color1-text"> his works</span>?
        </h1>
        <p
          class="hidden lg:block float-right color1-text underline me-[5vw] transition duration-300 active:translate-x-10 active:scale-120"
        >
          <NuxtLink to="/works">See all works >>></NuxtLink>
        </p>
        <p class="mb-10 text-xl">Here are top three of his works:</p>
        <Works />
        <NuxtLink to="/works">
          <button
            class="lg:hidden color1-bg block w-fit mx-auto alexandria-bold text-white py-3 px-10 rounded-lg mt-10 transition duration-300 focus:scale-90"
          >
            See more...
          </button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
<style scoped>
.section {
  margin-bottom: calc(var(--spacing) * 20);
}
</style>
