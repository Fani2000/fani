<template>
  <div
    id="Main"
    class="bg-gradient-to-r from-transparent to-black relative h-[450px]"
  >
    <img
      :src="hero"
      class="w-full h-full object-cover absolute mix-blend-overlay"
    />
    <div
      class="text-white flex flex-col gap-y-4 absolute top-1/3 right-10 w-[540px]"
    >
      <div class="text-4xl">Welcome to My Personal Portfolio.</div>
      <div class="font-mono">
        This were you will get to see most of my work and be get my contact
        information for more inquiry.
      </div>
      <div class="font-mono">
        Not only will you get to hear more about me but you will also get to see
        some of my showcase apps for reading and review if thats something you
        are into.
      </div>
    </div>
  </div>
</template>

<script setup>
import hero from "../assets/hero.jpg";
</script>
