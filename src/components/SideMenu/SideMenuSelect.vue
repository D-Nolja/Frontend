<template>
<div class="menu-section" id="section2">
    <div id="day-section-title">
        <p>{{ dayPlan.number }}일차</p>
        <p>{{ dayPlan.date }}</p>
    </div>
    <!-- {{ dayPlan.places }} -->
    <div class="day-section">
        <VPlaceCardSmall v-for="place in dayPlan.places" :key="place.name" :place="place" cardColor="blue" />
    </div>
</div>
</template>

<script setup>

import VPlaceCardSmall from "@/components/Common/cards/VPlaceCardSmall.vue"

defineProps({
    dayPlan: {
        type: Object,
        default () {
            return {
                number: 1,
                date: 12.05,
                places: [{
                    name: "혜인식탁",
                    cate: "맛집",
                    time: "11:30 ~ 16:00"
                }, {
                    name: "원빈식탁",
                    cate: "맛집",
                    time: "11:30 ~ 16:00"
                }, ]
            }
        }
    }

})
</script>

<style scoped>
.menu-section {
    width: 300px;
    /* 각 섹션의 너비 */
    flex-shrink: 0;
    /* 섹션 크기 유지 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14vh;
    /* margin-top: 40%; */
}

#day-section-title {
    width: 270px;
    display: flex;
    justify-content: space-between;
}

#day-section-title p:first-child {
    color: #000;
    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.72888rem;
    /* 153.676% */
    letter-spacing: 0.03375rem;
}

#day-section-title p:last-child {
    color: #B7B7B7;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.72888rem;
    /* 172.885% */
    letter-spacing: 0.03rem;
}

.day-section {
    overflow-y: auto;
    height: 80vh;
    width: 270px;
    border-radius: 10px;
    /* height: 75%; */
    background-color: #F7F8F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
</style>
