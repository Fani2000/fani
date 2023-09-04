<template>
  <div
    id="About"
    class="flex md:h-[800px] flex-col bg-white p-16 text-black font-mono"
  >
    <div class="text-center text-5xl mb-10 text-[#20bf55]">ABOUT ME</div>
    <div class="flex gap-5 items-start">
      <!-- <div class="rounded">
        <img :src="userProfile" class="w-60" alt="Fani Image" />
      </div>
      <div class="w-30 flex flex-row flex-auto gap-x-3 text-white items-center">
        <div class="flex flex-col flex-auto">
          <div>Fani Keorapetse</div>
          <div>Developer</div>
        </div>
      </div> -->
      <div
        class="flex flex-auto text-4xl px-20 text-center font-thin font-sans"
      >
        A software developer with the hopes of eradicating humanitarian issues
        using software, and working around improving the way humans perceive
        technology and how its used. <br /><br />
        The work is more beautiful than we can even understand and comprehend
        and with the right tools we can ensure that everyone feels the same way
        regardless of where they are.
      </div>
    </div>
    <!-- <div class=""></div> -->
  </div>
</template>

<script setup>
import userProfile from "../assets/fani.png";
</script>
