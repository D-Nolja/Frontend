<script setup>
import TheSideNav from '../components/layout/TheSideNav.vue';
import SideMenu from '../components/SideMenu.vue';
import VMap from '../components/VMap.vue';
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
