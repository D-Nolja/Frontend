<script setup>
import { ref } from 'vue';
const size = ref("large");
const activeKey = ref('1');
</script>

<template>
    <a-tabs v-model:activeKey="activeKey" id="tab-container" :size="size" centered >
        <a-tab-pane key="1" tab="내 정보" id="tab-item">내 정보</a-tab-pane>
        <a-tab-pane key="2" tab="우리의 여행계획"  id="tab-item" force-render>우리의 여행계획</a-tab-pane>
        <a-tab-pane key="3" tab="여행 후기" id="tab-item">여행 후기</a-tab-pane>
    </a-tabs>
</template>

<style scoped>
#tab-container{
    margin-top: 80px;
    width: 70%;
}
#tab-container .ant-tabs-tabpane {
    width: 100%; /* 혹은 원하는 너비 */
    padding: 10px; /* 내부 여백 */
    height: 100%;
    /* 기타 원하는 스타일 */
}



</style>