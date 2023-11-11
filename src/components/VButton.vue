<script setup>
import {ref} from "Vue";
const btnColor = ref("#17A2B8");
const btnSize = ref("big");

const props = defineProps({
    text : String,
    color : String, 
    size : String,
})

</script>

<template>
    <Button :style = {}>{{ text }}</Button>
</template>

<style scoped>

</style>