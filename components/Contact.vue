<template>
  <form action="" method="post">
    <div class="grid gap-3">
      <div>
        <label for="name" class="alexandria-bold text-sm sm:text-base"
          >Name</label
        >
        <input
          type="text"
          id="name"
          name="name"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input your name here..."
        />
        <p class="hidden mt-2 text-xs sm:text-sm text-red-600">
          This field is required.
        </p>
      </div>
      <div>
        <label for="email" class="alexandria-bold text-sm sm:text-base"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input your email here..."
        />
        <p class="hidden mt-2 text-xs sm:text-sm text-red-600">
          This field is required.
        </p>
      </div>
      <div>
        <label for="subject" class="alexandria-bold text-sm sm:text-base"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          name="subject"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input the subject here..."
        />
        <p class="hidden mt-2 text-xs sm:text-sm text-red-600">
          This field is required.
        </p>
      </div>
      <div>
        <label for="message" class="alexandria-bold text-sm sm:text-base"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input the message here..."
        ></textarea>
        <p class="hidden mt-2 text-xs sm:text-sm text-red-600">
          This field is required.
        </p>
      </div>
      <button
        class="text-sm sm:text-base color1-bg w-fit alexandria-bold text-white py-3 px-10 rounded-lg mt-10 transition duration-300 active:scale-90 justify-self-end cursor-pointer"
      >
        Send
      </button>
    </div>
  </form>
</template>
