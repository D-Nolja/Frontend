<script setup>
import {
    ref
} from "vue";
const btnColor = ref("#4285F4");
const btnSize = ref();
const fontColor = ref("#fff");

const props = defineProps({ 
    size: {
        type: String,
        default () {
            "default"
        }
    },
    color: String,
    text: String
})


console.log(props.color)

if (props.color === "white") {
    console.log("d")
    btnColor.value = "#fff";
    fontColor.value = "#333"
}

// text : String,
//     color : String, 
//     size : String,
</script>

<template>
<Button :style="{backgroundColor : btnColor , color : fontColor} ">{{ text }}</Button>
</template>

<style scoped>
Button {
    width: 6.5625rem;
    height: 4.0625rem;
    border-radius: 10px;
    background: #4285F4;
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
