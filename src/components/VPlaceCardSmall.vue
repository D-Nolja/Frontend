<script setup>
import {ref} from "vue";
const numberColor = ref("#17A2B8");

const props = defineProps({
    place : {
        type : Object,
        default(){
            return {
                name : "혜인식탁",
                cate : "맛집",
                time : "11:30 ~ 16:00",
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
    numberColor.value = "#FF5F5F"
}else if(props.cardColor === "blue"){
    numberColor.value = "#17A2B8"
}else{
    numberColor.value = props.cardColor
}


</script>

<template>
    <div id="card-container">
        <div id="card-number" :style="{backgroundColor : numberColor}" >
            1
        </div>
        <div id="place-info">
            <p id="place-name">{{place.name}}</p>
            <div id="place-subInfo">
                <p id="place-cate">{{place.cate}}</p>
                <p id="place-time">{{place.time}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card-container{
    width: 250px;
    border-radius: 0.6125rem;
    background-color: #fff;
    box-shadow: 0px 1.59657px 3.19314px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding : 20px 10px;
    margin: 5px;
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

    font-size: 9.8px;
    font-style: normal;
    margin-right: 10px;
    font-weight: 600;
    line-height: normal;
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

    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    margin-right: 10px;
    line-height: normal;
    margin-bottom: 0;
}

#place-time{
    color: #B7B7B7;

    font-size: 12.04px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0;
}

</style>