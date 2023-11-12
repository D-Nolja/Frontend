<script setup>
import VButton from '../VButton.vue';

import {ref} from "vue";

const days = ref([1,2,3]);

</script>

<template >
    <nav class="sideNav">   
        <div>
        <img src="../../assets/img/avatar.svg" alt="icon" id="logo">
        <VButton text="전체일정"/>
            <VButton v-for="day in days" :key="day" :text="`${day}일차`" color="white"></VButton>
        </div>
        <div>
            <VButton text="편집"/>
            <VButton text="다음"/>
        </div>
    </nav>
</template>

<style sco>

#logo{
    width: 5rem;
    height: 5rem;
    align-items: center;
    margin: 0 auto;
}
.sideNav{
    padding: 10px 0;
    width: 8.25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1.5px solid #EAEAEA;
    align-items: center;
    justify-content: space-between;
}

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>