<script setup>
import { ref } from "vue";
import { watchEffect } from "vue";
const btnColor = ref("#4285F4");
const btnSize = ref();
const fontColor = ref("#fff");

const props = defineProps({
  size: {
    type: String,
    default() {
      "default";
    },
  },
  color: String,
  text: String,
});

// console.log(props.color)

watchEffect(() => {
  console.log(props.color);
  if (props.color === "white") {
    btnColor.value = "#fff";
    fontColor.value = "#333";
    console.log(props.color);
  } else {
    btnColor.value = "#4285F4";
    fontColor.value = "#fff";
  }

  if (props.size === "small") {
    btnSize.value = "3rem";
  }
});
</script>

<template>
  <button
    :style="{ backgroundColor: btnColor, color: fontColor, height: btnSize }"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 6rem;
  height: 4rem;
  border-radius: 10px;
  background: #4285f4;
  border: none;
  text-align: center;
  font-size: 1.17944rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.72888rem;
  letter-spacing: 0.03538rem;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 5px 0;
}
</style>
