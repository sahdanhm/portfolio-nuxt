<script setup>
const socialmedias = [
  {
    id: 1,
    link: 'https://www.instagram.com/sahdanhm/',
    class: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
    svg: `<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                width="25"
                height="25"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>`,
  },
  {
    id: 2,
    link: 'https://wa.me/6285183138321',
    class: 'bg-green-500',
    svg: `<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                width="25"
                height="25"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>`,
  },
  {
    id: 3,
    link: 'https://github.com/sahdanhm',
    class: '',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>`,
  },
  {
    id: 4,
    link: 'mailto:syahdanbusiness@gmail.com',
    class: '',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86"><path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z"/></svg>`,
  },
];
</script>
<template>
  <footer class="bg-white px-7 pt-7 lg:px-15 sm:pt-15">
    <div class="grid grid-cols-2 gap-3 lg:grid-cols-3">
      <div class="">
        <NuxtLink
          class="flex-none text-2xl focus:opacity-80 alexandria-bold"
          to="/"
          aria-label="Brand"
        >
          syahdan
        </NuxtLink>
        <p class="text-sm md:text-lg mt-2">
          is the <span class="color1-text">most attractive guy</span> in the
          world. He is also an
          <span class="color1-text">excellent</span> back-end developer in web.
          He has 3 years experience in programming website.
        </p>
      </div>
      <div class="justify-self-center">
        <h3 class="alexandria-bold">Quik Link</h3>
        <ul>
          <li
            class="transition-all duration-300 lg:hover:scale-150 lg:hover:translate-x-5"
          >
            <NuxtLink
              exact-active-class="color1-text"
              to="/"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li
            class="transition-all duration-300 lg:hover:scale-150 lg:hover:translate-x-5"
          >
            <NuxtLink active-class="color1-text" to="/works">Works</NuxtLink>
          </li>
          <li
            class="transition-all duration-300 lg:hover:scale-150 lg:hover:translate-x-5"
          >
            <NuxtLink active-class="color1-text" to="/contact"
              >Contact</NuxtLink
            >
          </li>
          <li
            class="transition-all duration-300 lg:hover:scale-150 lg:hover:translate-x-5"
          >
            <NuxtLink active-class="color1-text" to="/about-him"
              >About him</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="w-full col-span-2 lg:col-span-1">
        <h3 class="alexandria-bold mb-2">Let's Connect</h3>
        <div class="flex space-x-3 space-y-3 flex-wrap">
          <a
            v-for="(socialmedia, index) in socialmedias"
            :key="index.id"
            :href="socialmedia.link"
            :class="socialmedia.class"
            v-html="socialmedia.svg"
            class="w-10 h-10 flex items-center justify-center grayscale-100 hover:grayscale-0 text-white rounded-full transition-transform duration-300 transform hover:scale-110"
            target="__blank"
          >
          </a>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 mt-5">
      <SlideshowQuotes class="lg:order-last" />
      <div>
        <NuxtImg
          format="webp"
          src="/img/thanks.png"
          alt="thanks-image"
          class="grayscale"
        />
        <p class="text-xs sm:text-base">&copy; syahdan 2025</p>
      </div>
    </div>
  </footer>
</template>
