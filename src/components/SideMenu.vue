<template>
    <div ref="sideMenu" class="side-menu" >
        <div id="plan-title-container">
            <div id="plan-title">
                <p id="plan-name">싸방학 언제 와</p>
                <p id="plan-date">2023.12.04 ~ 2023.</p>
            </div>
            <side-menu-search :places=places></side-menu-search>
        </div>

        <!-- menu section component 분리 -->
        <div class="scrollable-section" @mousedown="startDrag">
            <!-- <SideMenuSelect v-for="dayPlan in dayPlans" :key="dayPlan.number" :dayPlan="dayPlan"/> -->
        </div>
    </div>
</template>
    
      
      
<script setup>
import SideMenuSelect from "./SideMenuSelect.vue";
import SideMenuSearch from "./SideMenuSearch.vue"

import {
    ref,
    onMounted,
    onUnmounted, 
} from 'vue';
 
import {useRoute} from 'vue-router';
const route = useRoute();
console.log("route", route.params.number);

const places = ref([
{
    "name" : "혜인식탁" ,
    "type" : "맛집",
    "x" : "위도1",
    "y" : "경도1", 
    "address" : "도로명 주소1", 
    "tel" : "010-1234-1234", 
    "openTime" : "11:30 ~ 16:00",
    "info" : "반려동물 동반 가능 / 무료"

},
{
    "name" : "원빈식탁" ,
    "type" : "맛집",
    "x" : "위도1",
    "y" : "경도1", 
    "address" : "도로명 주소1", 
    "tel" : "010-9876-9876", 
    "openTime" : "12:30 ~ 15:00",
    "info" : "반려동물 동반 가능 / 무료"
},
])

const dayPlans = ref([{
            number : 1,
            date : 12.05,
            places : [{
                name : "혜인식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },{
                name : "원빈식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },  ] 
},
{
            number : 1,
            date : 12.05,
            places : [{
                name : "혜인식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },{
                name : "원빈식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },  ] 
},
{
            number : 1,
            date : 12.05,
            places : [{
                name : "혜인식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },{
                name : "원빈식탁", 
                cate : "맛집",
                time : "11:30 ~ 16:00"
            },  ] 
}]);


const sideMenu = ref(null);
const minWidth = 600; // 최소 너비 설정
const maxWidth = 1200; // 최대 너비 설정
let startX = 0;
let startWidth = 0;

const onMouseMove = (e) => {
    let newWidth = startWidth + e.clientX - startX;
    newWidth = Math.max(minWidth, newWidth);
    newWidth = Math.min(maxWidth, newWidth);
    if (sideMenu.value) {
        sideMenu.value.style.width = `${newWidth}px`;
    }
};

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    if (sideMenu.value) {
        sideMenu.value.classList.remove('dragging');
    }
};

const startDrag = (e) => {
    console.log("우와 마우스가 움직여")
    startX = e.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(sideMenu.value).width, 10);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
    if (sideMenu.value) {
        sideMenu.value.classList.add('dragging');
    }
};

onMounted(() => {
    if (sideMenu.value) {
        sideMenu.value.classList.remove('dragging');
    }
});

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
});

</script>

<style scoped>

.side-menu {
    width: calc(300px + 300px); /* 초기 너비 (고정 섹션 + 스크롤 섹션) */
    max-width: 900px; /* 최대 너비 */
    height: 100vh;
    display: flex; /* 내부 섹션들을 가로로 정렬 */
    background-color: #fff;
    border-right: 1.5px solid #EAEAEA;
}


#plan-name, #plan-date {
    color: #000;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.72888rem;
    letter-spacing: 0.03375rem;
}

.scrollable-section {
    width: 600px; /* 스크롤 섹션의 초기 너비 */
    display: flex; /* 섹션들을 가로로 정렬 */
    overflow-x: auto; /* 가로 스크롤 허용 */
}

.dragging {
    cursor: pointer;
}


#plan-title-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}


#plan-title {
    margin: 30px 0 15px 0;
    width :300px;
}

#plan-name {
    margin-bottom: 10px;
    font-weight: 700;
}

#plan-date {
    color: #B7B7B7;
    font-weight: 500;
}

</style>
