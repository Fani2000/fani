<template>
  <div
    class="sticky top-0 z-10 bg-primary h-4 flex flex-row justify-between items-center p-5 mt-2 text-white border-gray-400 border-b-2"
  >
    <!-- <img class="w-20 h-20" src="src/assets/logo.png" alt="ChitChat Logo" /> -->
    <div
      class="font-mono relative hover:cursor-pointer"
      @click="handleSelectSection('Main')"
    >
      <div
        class="absolute top-[-6px] left-[-2px] text-4xl opacity-50 text-black"
      >
        F | K
      </div>
      <div
        class="opacity-50 text-white bg-secondary px-2 rounded-md ml-[-15px] mt-1"
      >
        Fani Keorapetse
      </div>
    </div>

    <div class="flex flex-row gap-x-5 text-sm text-white">
      <button
        @click="handleSelectSection('About')"
        class="hover:text-blue-700 hover:cursor-pointer"
      >
        About
      </button>
      <button
        @click="handleSelectSection('Skills')"
        class="hover:text-blue-700 hover:cursor-pointer"
      >
        Skills
      </button>
      <button
        @click="handleSelectSection('Projects')"
        class="hover:text-blue-700 hover:cursor-pointer"
      >
        Projects
      </button>
      <button
        @click="handleSelectSection('Contact')"
        class="hover:text-blue-700 hover:cursor-pointer"
      >
        Contact
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits({ SwitchSection: Function });
const handleSelectSection = (tab) => {
  emits("SwitchSection", tab);
};
</script>
