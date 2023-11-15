<template>
    <div id="main-card1-container">
        <div id="mc-icon">아이콘</div>
        <p id="mc-title">제목</p>
        <p id="mc-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Saepe facere, accusantium, eius ipsum adipisci similique itaque voluptatibus 
            nostrum libero tempore a veniam
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
#main-card1-container{
    display: flex;
    flex-direction: column;
    width: 29.5vw;
    height: 350px;
    background: #fff;
    box-shadow: 0px 5.6px 140px 0px rgba(175, 173, 181, 0.10);
    border-radius: 1.9375rem;
    padding: 20px;
}

#mc-icon{
    border-radius: 50%;
    background-color: #F9F9F9;
    width: 86.8px;
    height: 86.8px;
    text-align: center;
    line-height: 86.8px;    
    color: #dcdcdc;
    margin-bottom: 20px;
}

#mc-title{
    color: #c8c8c8;
font-size: 28px;
font-weight: 400;
padding-bottom: 10px;
}

#mc-sub-title{
    color: #c8c8c8;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px; /* 45.36px */
    overflow: hidden;
}
</style>