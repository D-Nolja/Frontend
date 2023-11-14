<template>
  <input type="text" name="" id="" :placeholder="txt">
</template>

<script setup>

defineProps({
    txt : String
})
</script>

<style scoped>
input{
    width: 23.0625rem;
    height: 3.875rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    background-color: #E6EFFF;
    border: none;
    padding: 15px;
    margin-bottom: 20px;
}

input::placeholder{
    /*  text style  */
    color: #8AB4FF;
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