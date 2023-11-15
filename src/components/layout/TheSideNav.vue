<script setup>
import VButton from '../common/VButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const days = ref([1, 2, 3]);

const router = useRouter();

const navigate = (path) => {
    router.push(path);
};
</script>
ㄴ
<template>
    <nav class="sideNav">   
        <div>
            <img src="../../assets/img/avatar.svg" alt="icon" id="logo">
            <VButton text="전체일정" @click="navigate('/plan/all')"/>
            <VButton v-for="day in days" :key="day" :text="`${day}일차`" color="white" size="small" @click="navigate(`/plan/${day}`)"/>
        </div>
        <div>
            <VButton text="편집" @click="navigate('/edit')"/>
            <VButton text="다음" @click="navigate('/next')"/>
        </div>
    </nav>
</template>



<style scoped>∏

#logo{
    align-items: center;
    margin: 0 auto;
}

.sideNav {
    padding: 10px 10px;
    width: 8.25rem;
    display: flex;
    flex-direction: column;
    border-right: 1.5px solid #EAEAEA;
    align-items: center;
    justify-content: space-between;
}

.sideNav div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
