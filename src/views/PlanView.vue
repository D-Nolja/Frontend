<script setup>
import TheSideNav from '../components/layout/TheSideNav.vue';
import SideMenu from '../components/SideMenu/SideMenu.vue';
import VMap from '../Maps/VMap.vue';
</script>

<template>
    <div class="planView-container">
        <TheSideNav />
        <SideMenu />
        <VMap/>
    </div>

</template>

<style scoped>
.planView-container {
    display: flex;
}
</style>
