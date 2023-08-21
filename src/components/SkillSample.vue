<template>
  <div className="hoveable">
    <div className="hex-border">
      <h5>{{ text }}</h5>
    </div>
  </div>
</template>
<script setup>
import hex from "../assets/hex.png";
defineProps({ text: String });
</script>
<style>
.hex-border {
  background-image: url("../assets/hex.png");
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 150px;
  min-height: 130px;
  margin: 0;
  padding: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11px;
  transition: transform 1s ease-in-out 0s;
}

.hex-border h5 {
  font-size: 20px;
  width: 80%;
  text-align: center;
}
</style>
