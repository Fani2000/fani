<template>
  <div className="skill-list">
    <div className="first-Col">
      <SkillSample text="Dart" />
      <div className="cplus">
        <SkillSample text="C++" />
      </div>
      <div className="sizedBox" />
      <SkillSample text="CSS" />
    </div>
    <div className="sec-Col">
      <SkillSample text="Flutter" />
      <SkillSample text="UI & UX design" />
      <SkillSample text="SQL" />
      <SkillSample text="HTML" />
    </div>
    <div className="last-col">
      <SkillSample text="React Js" />
      <SkillSample text="React Native" />
      <SkillSample text="JavaScript" />
    </div>
  </div>
</template>
<script setup>
import SkillSample from "./SkillSample.vue";
</script>
<style scoped>
/* .skill-container {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.skill-container img {
  width: 60%;
} */
.skill-list {
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 6%;
}
.sizedBox {
  min-height: 134px;
  margin-bottom: 7px;
}
.first-Col {
  margin-right: -30px;
  position: relative;
}
.last-col {
  margin-left: -30px;
}

.cplus {
  position: absolute;
  left: -150px;
}
</style>
