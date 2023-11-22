<template>
  <input type="button" :value="txt" class="submitBtn" :id="colorId" />
</template>

<script setup>
import { ref } from "vue";

const colorId = ref(null);
const props = defineProps({
  txt: String,
  color: {
    type: String,
    default() {
      return "default";
    },
  },
});

if (props.color === "white") {
  colorId.value = "whiteBtn";
} else if (props.color === "default") {
  colorId.value = "default";
} else if (props.color === "grey") {
  colorId.value = "greyBtn";
}
</script>

<style scoped>
.submitBtn {
  border-radius: 0.5625rem;
  background: #8ab4ff;
  box-shadow: 0px 4px 61px 0px rgba(138, 180, 255, 0.4);

  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 30px 0;
  padding: 10px 15px;
  border: none;
  transition: transform 0.1s ease, background-color 0.2s ease;
}

.submitBtn:active {
  transform: scale(
    0.95
  ); /* Slightly reduce the scale to give a pressed effect */
  background-color: #729fdd; /* Optional: Change color to indicate it's active/pressed */
}

#whiteBtn {
  background-color: #f8f8f8;
  box-shadow: 0px 4px 61px 0px rgba(185, 201, 228, 0.4);
  color: #8ab4ff;
}

#greyBtn {
  background-color: #f0f0f0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 쉐도우 효과 */
  transition: box-shadow 0.3s ease; /* 쉐도우 애니메이션 */
  color: #8ab4ff;
}
#greyBtn :hover {
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
