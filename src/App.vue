<script setup>
import IntroSection from "./components/IntroSection.vue";
import MainComponent from "./components/MainComponent.vue";
import MainNavBar from "./components/MainNavBar.vue";

const handleSelectedSection = (tab) => {
  console.log(tab);
  const selectedElementTab = document.getElementById(tab);
  if (selectedElementTab)
    selectedElementTab.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="bg-primary h-screen overflow-y-auto">
    <MainNavBar @switch-section="handleSelectedSection" />
    <IntroSection />
    <MainComponent />
  </div>
</template>

<style>
/* .Container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: ;
} */
</style>
