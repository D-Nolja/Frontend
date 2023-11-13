<template>
    <div ref="sideMenu" class="side-menu" >
        <div id="plan-title-container">
            <div id="plan-title">
                <p id="plan-name">싸방학 언제 와</p>
                <p id="plan-date">2023.12.04 ~ 2023.</p>
            </div>
    
            <div id="search-section">
                <div id="search-section-title">
                    <div id="sst1">
                        <p>장소 추가</p>
                        <div id="sst1-dropdown">
                            <div>드롭다운1</div>
                            <div>드롭다운2</div>
                        </div>
                    </div>
                    <input type="text" placeholder="관련 검색어를 입력해보세요"  id="ss-input"/>
                    <label id="ss-checkbox"><input type="checkbox"  name="parking" ><p>주차 가능</p></label>
                </div>
    
                <div class="fixed-section" id="section1">
                    <VPlaceCardBig/>
                    <VPlaceCardBig/>
                    <VPlaceCardBig/>
                    <VPlaceCardBig/>
                </div>
            </div>
        </div>

   
        <!-- menu section component 분리 -->
        <div class="scrollable-section" @mousedown="startDrag">

            <SideMenuSelect v-for="dayPlan in dayPlans" :key="dayPlan.number" :dayPlan="dayPlan"/>
         

        </div>
    </div>
    </template>
    
      
      
<script setup>
    import SideMenuSelect from "./SideMenuSelect.vue";
    import VPlaceCardBig from "../components/VPlaceCardBig.vue";
    
    import {
        ref,
        onMounted,
        onUnmounted
    } from 'vue';
    
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

.fixed-section {
    width: 300px; /* 고정 섹션의 너비 */
    flex-shrink: 0; /* 섹션 크기 유지 */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.scrollable-section {
    width: 600px; /* 스크롤 섹션의 초기 너비 */
    display: flex; /* 섹션들을 가로로 정렬 */
    overflow-x: auto; /* 가로 스크롤 허용 */
}

.dragging {
    cursor: pointer;
}

#search-section {
    width: 290px;
    border-radius: 10px;
    height: 85%;
    background-color: #F7F8F9;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#search-section-title {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
}

#sst1, #plan-title-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}

#sst1 {
    width: 100%;
    justify-content: space-between;
}

#sst1 p, #plan-name, #plan-date {
    color: #000;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.72888rem;
    letter-spacing: 0.03375rem;
}

#ss-input {
    border-radius: 10px;
    background-color: #fff;
    color: #B7B7B7;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.05rem;
    width: 280px;
    height: 2.625rem;
    border: none;
    padding-left: 7px;
}

#ss-checkbox {
    text-align: end;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 3px;
    margin-top: 10px;
}

#ss-checkbox p {
    margin-left: 5px;
}

#plan-title {
    margin: 30px 0 15px 0;
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
