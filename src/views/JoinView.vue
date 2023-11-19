<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import VJoinBox from "../components/Auth/VJoinBox.vue";
</script>

<template>
  <div class="contents-container">
    <the-header></the-header>

    <VJoinBox />
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.contents-container {
  display: flex;
  flex-direction: column;
}
</style>
