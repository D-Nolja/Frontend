<template>
    <div class="hero-container">
        <p id="hero-sub-title">반려견과 함께하는 특별한 여행 경험을 계획하세요</p>
        <p id="hero-title">댕놀자</p>
        <input type="button" value="렛 츠고" id="hero-btn" @click="movePlan">
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const movePlan = () => {
    router.push({path : 'plan/all' });
}
</script>

<style scoped>
.hero-container {
    padding-left: 8%;
    padding-top: 11.5rem;
    margin-top: 20px;
    width: 92vw;
height: 43rem;
flex-shrink: 0;
border-radius: 1.9375rem;
background: url("@/assets/img/hero.png"), lightgray 50% ;
background-position: 30% 50%;
background-repeat: no-repeat;
background-size: cover;
color : #fff;
box-shadow: 0px 1.23602px 3.70807px 0px rgba(0, 0, 0, 0.25);

}


#hero-title{
text-shadow: 0px 4.077272891998291px 6.115909576416016px rgba(0, 0, 0, 0.25);
font-size: 130px;
font-family: PyeongChangPeace-Bold;
padding-bottom: 10px;
}

#hero-sub-title{

text-shadow: 0px 4.077272891998291px 4.077272891998291px rgba(0, 0, 0, 0.25);
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 76.838% */
margin: 5px;
}

#hero-btn{
    width: 110px;
    height: 38px;
    border: none;
    flex-shrink: 0;
    border-radius: 24.72px;
    background: #FEB344;
    box-shadow: 0px 1.23602px 3.70807px 0px rgba(0, 0, 0, 0.25);


    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 5px;
}
</style>