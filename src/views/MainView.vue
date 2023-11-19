<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import VMain from "../components/MainPage/VMain.vue";
</script>

<template>
  <div class="contents-container">
    <the-header></the-header>

    <VMain />

    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.contents-container {
  display: flex;
  flex-direction: column;
}
</style>
