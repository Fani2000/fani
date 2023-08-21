<template>
  <div
    class="sticky top-0 z-10 bg-primary h-10 flex flex-row justify-between items-center px-5 my-2 text-white"
  >
    <div
      class="font-mono relative hover:cursor-pointer"
      @click="handleSelectSection('Main')"
    >
      <img :src="logo" class="w-[40%]" />
    </div>

    <div class="nav">
      <button @click="handleSelectSection('About')" class="btn">About</button>
      <button @click="handleSelectSection('Skills')" class="btn">Skills</button>
      <button @click="handleSelectSection('Projects')" class="btn">
        Projects
      </button>
      <button @click="handleSelectSection('Contact')" class="btn button">
        Contact
      </button>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/logo.png";
const emits = defineEmits({ SwitchSection: Function });

const handleSelectSection = (tab) => {
  emits("SwitchSection", tab);
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  width: 40%;
  gap: 10px;
}
.nav .btn {
  margin-right: 2.1%;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  color: #999c9e;
  border: none;
  font-weight: 600;
}
.nav .btn.selected {
  color: #fff;
}
.nav .btn:hover {
  color: #20bf55;
}
.nav .button {
  background-color: inherit;
  color: #20bf55;
  border-radius: 25px;
  border: #20bf55 2px solid;
  height: 32px;
  width: 133px;
  font-size: 16px;
  cursor: pointer;
}
.nav .button:hover {
  color: #ffff;
  background-color: #20bf55;
}
</style>
