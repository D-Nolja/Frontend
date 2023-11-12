<template>
<div ref="sideMenu" class="side-menu" @mousedown="startDrag">
    <div class="fixed-section" id="section1">Section 1</div>
    <div class="scrollable-section">
        <div class="menu-section" id="section2">Section 2</div>
        <div class="menu-section" id="section3">Section 3</div>
        <div class="menu-section" id="section4">Section 4</div>
        <div class="menu-section" id="section5">Section 5</div>
    </div>
</div>
</template>

  
  
<script setup>
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue';

const sideMenu = ref(null);
const minWidth = 400; // 최소 너비 설정
const maxWidth = 800; // 최대 너비 설정
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
    width: calc(200px + 200px);
    /* 초기 너비 (고정 섹션 + 스크롤 섹션) */
    max-width: 800px;
    /* 최대 너비 */
    height: 100vh;
    /* 전체 높이 */
    position: fixed;
    /* 고정 위치 */
    left: 8.25rem;
    /* 왼쪽에 위치 */
    top: 0;
    /* 상단에 위치 */
    display: flex;
    /* 내부 섹션들을 가로로 정렬 */
    /* border: 1px solid black; */
    background: var(--, #FFF);
    border-right: 1.5px solid #EAEAEA;
}

.fixed-section {
    width: 200px;
    /* 고정 섹션의 너비 */
    flex-shrink: 0;
    /* 섹션 크기 유지 */
    /* 추가적인 스타일링 */
}

.scrollable-section {
    width: 600px;
    /* 스크롤 섹션의 초기 너비 */
    display: flex;
    /* 섹션들을 가로로 정렬 */
    overflow-x: auto;
    /* 가로 스크롤 허용 */
}

.menu-section {
    width: 200px;
    /* 각 섹션의 너비 */
    flex-shrink: 0;
    /* 섹션 크기 유지 */
    /* 추가적인 스타일링 */
}

.dragging {
    cursor: pointer;
}
</style>
