<script setup>
</script>
<template>
  <Hero />
  <main>
    <div class="bg-white/50 p-3 rounded-xl lg:grid lg:grid-cols-1">
      <div class="section">
        <h1 class="title">Did you know?</h1>
        <div class="lg:grid lg:grid-cols-2 lg:place-content-center">
          <NuxtLink to="/about-me" class="w-fit">
            <img src="~/assets/img/me.png" class="float-left" alt="Image" />
          </NuxtLink>
          <div class="">
            <NuxtLink
              to="/about-me"
              class="text-4xl font alexandria-bold color1-text lg:text-9xl hover:underline"
            >
              Syahdan
            </NuxtLink>
            <p class="text-base mt-2 lg:text-2xl">
              is the <span class="color1-text">most attractive guy</span> in the
              world. He is also an
              <span class="color1-text">excellent</span> back-end developer in
              web. He has 3 years experience in programming website.Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quas rerum reiciendis
              fugit molestias nihil dolorem doloremque quos architecto veniam
              perferendis nostrum dignissimos velit, voluptatum, tenetur
              blanditiis necessitatibus, nulla natus dolorum?
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
        <p class="mb-5">Here are top three of his works:</p>
        <div class="grid grid-cols-1 place-content-center gap-3">
          <div class="lg:flex">
            <a
              href=""
              class="lg:w-30 lg:mx-3 lg:flex lg:items-center lg:flex-none"
            >
              <img
                src="~/assets/img/project-1.png"
                alt="Image"
                class="w-full h-auto grayscale hover:grayscale-0"
              />
            </a>
            <div class="">
              <h1 class="color1-text text-2xl font-bold">
                <a href="" class="hover:underline">Compro Koyasai</a>
              </h1>
              <p class="text-gray-400 text-xs">PT Koyasai Indonesia</p>
              <p class="text-sm mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eaque facere autem Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quasi eos necessitatibus a
                excepturi! Maxime natus totam assumenda fuga explicabo error.
              </p>
            </div>
            <hr class="border-none h-0.5 bg-[#ff0000]/15 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.section {
  margin-bottom: calc(var(--spacing) * 20);
}
</style>
