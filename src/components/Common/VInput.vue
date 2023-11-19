<template>
  <input
    type="text"
    id=""
    :placeholder="txt"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup>
defineProps({
  txt: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style scoped>
input {
  width: 23.0625rem;
  height: 3.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background-color: #e6efff;
  border: none;
  padding: 15px;
  margin-bottom: 20px;
}

input::placeholder {
  /*  text style  */
  color: #8ab4ff;
  font-family: Poppins;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

input:focus {
  border: 1.5px solid #9cbcf5;
  outline: none;
  box-shadow: 0 0 5px #9cbcf5;
}
</style>
