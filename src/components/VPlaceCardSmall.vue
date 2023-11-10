<script setup>

</script>

<template>
    <div id="card-container">
        <div id="card-number">
            1
        </div>
        <div id="place-info">
            <p id="place-name">혜인 식탁</p>
            <div id="place-subInfo">
                <p id="place-cate">맛집</p>
                <p id="place-time">11:30 ~ 16:00</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-container{
    width: 18.75rem;
    height: 5.14213rem;
    border-radius: 0.6125rem;
    background: var(--, #FFF);
    box-shadow: 0px 1.59657px 3.19314px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding : 10px;
}


#card-number{
    border-radius: 50%;
    width: 21px;
    height: 21px;
    background-color: #17A2B8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 9.8px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
}

#place-info{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    justify-content: center;
}

#place-name{
    color: #333;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 5px;
}

#place-subInfo{
    display: flex;
}

#place-cate{
    color: rgba(23, 162, 184, 0.70);
    font-family: Pretendard Variable;
    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0;
    margin-right: 10px;
}

#place-time{
    color: #B7B7B7;
    font-family: Pretendard Variable;
    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0;
}

</style>