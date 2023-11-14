<script setup>
import { ref } from 'vue';
import UserPlanList from './UserPlanList.vue';
import UserProfile from './UserProfile.vue';
import UserReview from '@/components/MyPage/UserReview.vue';


const size = ref("large");
const activeKey = ref('1');

</script>

<template>
    <a-tabs v-model:activeKey="activeKey" id="tab-container" :size="size" centered >
        <a-tab-pane key="1" tab="내 정보" id="tab-item">
            <user-profile></user-profile>
        </a-tab-pane>
        <a-tab-pane key="2" tab="우리의 여행계획"  id="tab-item" force-render>
            <user-plan-list></user-plan-list>
        </a-tab-pane>
        <a-tab-pane key="3" tab="여행 후기" id="tab-item">
            <user-review></user-review>
        </a-tab-pane>
    </a-tabs>
</template>

<style scoped>
#tab-container{
    margin-top: 40px;
    width: 60%;
}
#tab-container .ant-tabs-tabpane {
    width: 100%; 
}


</style>