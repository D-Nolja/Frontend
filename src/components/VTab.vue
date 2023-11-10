<script setup>
import { ref } from 'vue';
const activeKey = ref('1');
</script>

<template>
    <a-tabs v-model:activeKey="activeKey" id="tab-container" centered>
        <a-tab-pane key="1" tab="내 정보" id="tab-item">내 정보</a-tab-pane>
        <a-tab-pane key="2" tab="우리의 여행계획"  id="tab-item" force-render>우리의 여행계획</a-tab-pane>
        <a-tab-pane key="3" tab="여행 후기" id="tab-item">여행 후기</a-tab-pane>
    </a-tabs>
</template>

<style scoped>
#tab-container{
    background-color: none;
}



/* #tab-item {

} */
</style>