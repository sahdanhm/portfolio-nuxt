<template>
  <footer class="bg-white px-7 py-7 lg:px-15 lg:py-15">
    <div class="grid grid-cols-2 gap-3 lg:grid-cols-3">
      <div class="">
        <a
          class="flex-none text-2xl focus:opacity-80 alexandria-bold"
          href="/"
          aria-label="Brand"
        >
          syahdan
        </a>
        <p class="text-base mt-2">
          is the <span class="color1-text">most attractive guy</span> in the
          world. He is also an
          <span class="color1-text">excellent</span> back-end developer in web.
          He has 3 years experience in programming website.
        </p>
      </div>
      <div class="justify-self-center">
        <h3 class="alexandria-bold">Quik Link</h3>
        <ul>
          <li>
            <a class="nav-link font-medium" href="/" aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a class="nav-link font-medium" href="/works">Works</a>
          </li>
          <li>
            <a class="nav-link font-medium" href="/contact">Contact</a>
          </li>
          <li>
            <a class="nav-link font-medium" href="/about-me">About me</a>
          </li>
        </ul>
      </div>
      <div class="">
        <h3 class="alexandria-bold mb-2">Let's Connect</h3>
        <div>
          <div class="flex space-x-3">
            <a
              href="https://www.instagram.com/sahdanhm/"
              class="w-10 h-10 flex items-center justify-center grayscale-100 hover:grayscale-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-full transition-transform duration-300 transform hover:scale-110"
              target="__blank"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                width="25"
                height="25"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              href="https://wa.me/6285183138321"
              class="w-10 h-10 flex items-center justify-center grayscale-100 hover:grayscale-0 bg-green-500 text-white rounded-full transition-transform duration-300 transform hover:scale-110"
              target="__blank"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                width="25"
                height="25"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex lg:w-1/2 lg:ms-auto mt-5 flex-col-reverse lg:flex-row">
      <div class="flex items-center">
        <p>
          <cite
            >"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum hic,
            libero aliquid error inventore quibusdam minima corporis debitis,
            nemo et mollitia magnam quas tempora harum. Quisquam alias impedit
            velit temporibus."</cite
          ><br />- <span class="font-bold">Albert Einstein</span> -
        </p>
      </div>
      <div class="mx-3 flex items-center">
        <img
          src="~/assets/img/einstein.png"
          alt="Image"
          class="w-full h-auto"
        />
      </div>
    </div>
  </footer>
</template>
