<template>
  <div id="About" class="h-[500px] flex flex-row bg-secondary p-16 text-white font-mono">
    <div class="w-[46rem] h-[200px] flex flex-col gap-5 items-start">
      <div class="w-30 flex flex-row gap-x-3 text-white items-center">
        <div class="rounded">
          <img :src="userProfile" class="w-20 h-20" alt="Fani Image" />
        </div>
        <div class="flex flex-col">
          <div>Fani Keorapetse</div>
          <div>Developer</div>
        </div>
      </div>
      <div class="flex-1">
        A software developer wit hthe hopes of eradicating humanitarian issues
        using software, and working around improving the way humans perceive
        technology and how its used. <br />
        The workd is more beautiful than we can even understand and comprehend
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
