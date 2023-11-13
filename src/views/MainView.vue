<script setup>

import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
// import VLoginBox from "../components/VLoginBox.vue";
</script>

<template>
<div class="contents-container">
<the-header></the-header>
<!-- <VLoginBox></VLoginBox> -->
<the-footer></the-footer>
</div>

</template>
  components: { TheFooter },



<style scoped>
.contents-container{
    display: flex;
}
</style>