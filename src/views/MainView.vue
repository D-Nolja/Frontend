<script setup>

import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
// import VLoginBox from "../components/Auth/VLoginBox.vue";
import MyPage from "../components/MyPage/MyPage.vue"
</script>

<template>
<div class="contents-container">
<the-header></the-header>
<!-- <VLoginBox></VLoginBox> -->
<my-page></my-page>
<the-footer></the-footer>
</div>

</template>
  components: { TheFooter },



<style scoped>
.contents-container{
    display: flex;
    flex-direction: column;
}
</style>