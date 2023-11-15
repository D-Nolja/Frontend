<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import MyPage from "@/components/MyPage/MyPageContents.vue";

</script>

<template>
<div class="contents-container">
<the-header></the-header>
<MyPage/>
<the-footer></the-footer>
</div>

</template>




<style scoped>
.contents-container{
    display: flex;
    flex-direction: column;
}
</style>