<script setup>
import { ref } from "vue";
import AboutComponent from "./AboutComponent.vue";
import ContactComponent from "./ContactComponent.vue";
import ProjectComponent from "./ProjectComponent.vue";
import SkillsComponent from "./SkillsComponent.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
     <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
    <AboutComponent  />
    <SkillsComponent />
    <ProjectComponent />
    <ContactComponent />
  </div>
</template>

<style scoped></style>
