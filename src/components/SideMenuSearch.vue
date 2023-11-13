<template>
    <div id="search-section">
            <div id="search-section-title">
                <div id="sst1">
                    <p>장소 추가</p>
                    <div id="sst1-dropdown">
                        <div>드롭다운1</div>
                        <div>드롭다운2</div>
                    </div>
                </div>
                <input type="text" placeholder="관련 검색어를 입력해보세요"  id="ss-input"/>
                <label id="ss-checkbox"><input type="checkbox"  name="parking" ><p>주차 가능</p></label>
            </div>

            <div class="fixed-section" id="section1">
                <VPlaceCardBig v-for="place in places" :key="place" :place="place" cardColor="blue"/>
            </div>
        </div>
</template>

<script setup>
import VPlaceCardBig from "../components/VPlaceCardBig.vue";

defineProps({
    places : {
        type : Array,
        default(){
            return [
                {
                    "name" : "혜인식탁" ,
                    "type" : "맛집",
                    "x" : "위도1",
                    "y" : "경도1", 
                    "address" : "도로명 주소1", 
                    "tel" : "010-1234-1234", 
                    "openTime" : "11:30 ~ 16:00",
                    "info" : "반려동물 동반 가능 / 무료"

                },
                {
                    "name" : "원빈식탁" ,
                    "type" : "맛집",
                    "x" : "위도1",
                    "y" : "경도1", 
                    "address" : "도로명 주소1", 
                    "tel" : "010-9876-9876", 
                    "openTime" : "12:30 ~ 15:00",
                    "info" : "반려동물 동반 가능 / 무료"
                },
            ]
        }
    }
})
</script>

<style>
#search-section {
    width: 290px;
    border-radius: 10px;
    height: 85%;
    background-color: #F7F8F9;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#search-section-title {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 5px 10px;
}


#sst1 {
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
}

#sst1 p, #plan-name, #plan-date {
    color: #000;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.72888rem;
    letter-spacing: 0.03375rem;
}

#sst1-dropdown{
    display: flex;
}
#ss-input {
    border-radius: 10px;
    background-color: #fff;
    color: #B7B7B7;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.05rem;
    width: 280px;
    height: 2.625rem;
    border: none;
    padding-left: 7px;
}

#ss-checkbox {
    text-align: end;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 3px;
    margin-top: 10px;
}

#ss-checkbox p {
    margin-left: 5px;
}

.fixed-section {
    width: 300px; /* 고정 섹션의 너비 */
    flex-shrink: 0; /* 섹션 크기 유지 */
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>