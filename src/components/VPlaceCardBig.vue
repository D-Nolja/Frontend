<script setup>
import {ref} from "vue";
const badgeColor = ref("#17A2B8");

const props = defineProps({
    place : {
        type : Object,
        default(){
            return {
                name : "혜인식탁",
                cate : "맛집",
                time : "11:30 ~ 16:00",
                desc : "반려동물 동반 가능 / 무료"
            }
        }
    }, 
    cardColor : {
        type : String,
        default() {
            return "#17A2B8" 
        }
    }
})

// console.log(props.cardColor)
if(props.cardColor === "red" ){
    badgeColor.value = "#FF5F5F"
}else if(props.cardColor === "blue"){
    badgeColor.value = "#17A2B8"
}else{
    badgeColor.value = props.cardColor
}


</script>

<template>
    <div id="card-container">
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-7" y="-5" width="23.9719" height="23.2043" rx="11.6021" :fill="badgeColor"/>
</svg>

        <div id="place-container">
            <div id="place-text-container">
                <div id="place-name">{{place.name }}</div>
                <div id="place-subInfo">
                    <div id="place-ssubInfo"> 
                        <p id="place-cate">{{place.cate}}</p>
                        <p id="place-time">{{place.time}}</p>
                    </div>
                    <div id="place-description">{{ place.desc }}</div>
                </div>
            </div>
            <img src="../assets/img/place.svg" alt="장소 사진">
        </div>
    </div>
</template>

<style scoped>
svg{
    border-radius: 12px 0 0 0;
}

#card-container{
    margin: 20%;
    width: 352.5px;
    height: 141px;
    border-radius: 12px;
    background-color: var(--, #FFF);
    box-shadow: 0 2px 8px 0 rgba(31,38,135,.08)!important;
   
}


#badge{
    display: inline-flex;
    width: 23.972px;
    height: 23.204px;
    padding: 4.591px 9.181px;
    gap: 9.181px;
    flex-shrink: 0;
    border-radius: 13.772px;
    background: #009E8B;
    position: absolute;
}

#place-container{
    display: flex;
    align-items: center;
    margin-left: 30px;
}

#place-text-container{
    margin-right: 40px;
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
    font-family: Pretendard ;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 5px;
}

#place-subInfo{
    display: flex;
    flex-direction: column;
}

#place-ssubInfo{
    display: flex;
 
}

#place-description{
    color: #848484;
    font-family: pretendard;
    font-size: 11.75px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 5px;
}
#place-cate{
    color: rgba(23, 162, 184, 0.70);
    font-family: Pretendard;
    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    margin-right: 10px;
    line-height: normal;
    margin-bottom: 0;
}

#place-time{
    color: #B7B7B7;
    font-family: Pretendard;
    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0;
}

</style>