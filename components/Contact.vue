<script setup>
const onFocus = (e) => {
  e.target.previousSibling.classList.add('color1-text');
};
const blur = (e) => {
  e.target.previousSibling.classList.remove('color1-text');
};
const divOnClick = (e) => {
  e.target.lastChild.focus();
};
</script>
<template>
  <form action="https://formsubmit.co/sahdanhusna057@gmail.com" method="post">
    <input type="hidden" name="_next" :value="useRequestURL()" />
    <input type="hidden" name="_captcha" value="false" />
    <div class="grid gap-3">
      <div @click="divOnClick">
        <label
          for="name"
          class="alexandria-bold text-sm sm:text-base transition duration-300"
          >Name</label
        >
        <input
          @focus="onFocus"
          @blur="blur"
          type="text"
          id="name"
          name="name"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input your name here..."
          required
        />
      </div>
      <div @click="divOnClick">
        <label
          for="email"
          class="alexandria-bold text-sm sm:text-base transition duration-300"
          >Email</label
        >
        <input
          @focus="onFocus"
          @blur="blur"
          type="email"
          id="email"
          name="email"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input your email here..."
          required
        />
      </div>
      <div @click="divOnClick">
        <label
          for="subject"
          class="alexandria-bold text-sm sm:text-base transition duration-300"
          >Subject</label
        >
        <input
          @focus="onFocus"
          @blur="blur"
          type="text"
          id="subject"
          name="subject"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input the subject here..."
          required
        />
      </div>
      <div @click="divOnClick">
        <label
          for="message"
          class="alexandria-bold text-sm sm:text-base transition duration-300"
          >Message</label
        >
        <textarea
          @focus="onFocus"
          @blur="blur"
          id="message"
          name="message"
          class="text-sm sm:text-lg block w-full p-2.5 border-b focus:outline-none"
          placeholder="Input the message here..."
          required
        ></textarea>
      </div>
      <button
        class="text-sm sm:text-base color1-bg w-fit alexandria-bold text-white py-3 px-10 rounded-lg mt-10 transition duration-300 active:scale-90 justify-self-end cursor-pointer"
        type="submit"
      >
        Send
      </button>
    </div>
  </form>
</template>
