<script setup>

</script>

<template>

    <div class="nav-container">
        <div>
           <img src="../../assets/img/avatar.svg" alt="" srcset="">
        </div>
        <div class="nav-btn-container">
            <div>여행계획</div>
            <div>마이페이지</div>
            <div>Q&A</div>
            <div>로그인</div>
        </div>
    </div>

</template>

<style scoped>
.nav-container{
    box-sizing: border-box;
    display : flex;
    justify-content: space-between;
    width: 100vw;
    height: 80px;
    padding: 0px 30px;
    align-items: center;

    color: #333;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 35.695px; /* 157.143% */

    background: #fff;
    box-shadow: 0px -1.6225px 0px 0px #F0F0F0 inset;
    position : fixed
}

.nav-btn-container {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.nav-btn-container div{
    margin: 0 20px;
}
</style>