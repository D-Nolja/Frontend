<template>
  <div id="review-all-container">
    <div id="review-all-img-container">
      <img
        src="../../assets/img/dang.png"
        alt=""
        srcset=""
        id="review-all-img"
      />
    </div>
    <div id="review-all-txt-container">
      <div id="review-all-txt-title-container">
        <p id="review-all-txt-title">김댕댕 여행기</p>
        <p id="review-all-txt-date">2023/12/10</p>
      </div>
      <p id="review-all-txt">
        국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로
        폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지
        아니하다. 모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할
        권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를
        보장할 의무를 진다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지
        아니한 때에도 그 법률안은 법률로서 확정된다. 제2항과 제3항의 처분에
        대하여는 법원에 제소할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를
        한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원
        과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#review-all-container {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
#review-all-img-container {
  width: 100vw;
  border-radius: 5px;
  margin: 20px 0;
}

#review-all-img {
  width: 60vw;
  border-radius: 5px;
}

#review-all-txt-title-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
#review-all-txt-title {
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 85.714% */
}

#review-all-txt-date {
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5rem; /* 85.714% */

  color: #b9b9b9;
}

#review-all-txt {
  line-height: 1.3rem;
}
</style>
