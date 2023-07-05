<template>
  <section
    class="h-[600px] py-3 px-10 flex flex-col items-center bg-slate-300"
    id="Skills"
  >
    <div class="container px-5 py-10 mx-auto">
      <div class="text-center mb-10">
        <CpuChipIcon class="w-10 inline-block mb-4" />
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-slate-400 mb-4">
          Skills &amp; Technologies
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Here are the skills I have acquired so far, I am also looking forward
          to learning more and experimenting with more technologies.
        </p>
      </div>
      <div
        class="overflow-y-scroll h-[300px] flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2"
      >
        <div
          v-for="skill in skills"
          :key="skill.lang"
          class="p-2 sm:w-1/2 w-full"
        >
          <div class="bg-gray-800 rounded flex p-4 h-full items-center">
            <CheckBadgeIcon class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
            <span class="title-font font-medium text-white">
              {{ skill.lang }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import skills from "../data/skills.json";
import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/vue/24/outline";
</script>
