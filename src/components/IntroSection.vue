<template>
  <div class="row-container">
    <BioComponent />
    <SkillsShowcase />
  </div>
  <!-- <div
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
  </div> -->
</template>

<script setup>
import hero from "../assets/hero.jpg";
import BioComponent from "./BioComponent.vue";
import SkillsShowcase from "./SkillsShowcase.vue";
</script>
<style>
.row-container {
  width: 90%;
  /* height: 90%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  /* margin: 0% 50px; */
  align-items: center;
  /* position: relative; */
}

@media screen and (max-width: 1000px) {
  .row-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
