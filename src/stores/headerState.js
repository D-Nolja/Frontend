import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeaderStateStore = defineStore("headerStateStore", () => {
  const headerItemList = ref([
    { name: "Q&A", show: true, routerName: "qna", clickName: "moveQna" },
    { name: "로그인", show: true, routerName: "login", clickName: "moveLogin" },
    { name: "회원가입", show: true, routerName: "join", clickName: "moveJoin" },
    {
      name: "로그아웃",
      show: false,
      routerName: "logout",
      clickName: "logout",
    },
    {
      name: "여행계획",
      show: false,
      routerName: "plan",
      clickName: "movePlan",
    },
    {
      name: "마이페이지",
      show: false,
      routerName: "myPage",
      clickName: "moveMyPage",
    },
  ]);

  const changeHeaderState = (status) => {
    if (status) {
      headerItemList.value = [
        { name: "Q&A", show: true, routerName: "qna", clickName: "moveQna" },
        {
          name: "로그인",
          show: false,
          routerName: "login",
          clickName: "moveLogin",
        },
        {
          name: "회원가입",
          show: false,
          routerName: "join",
          clickName: "moveJoin",
        },
        {
          name: "로그아웃",
          show: true,
          routerName: "logout",
          clickName: "logout",
        },
        {
          name: "여행계획",
          show: true,
          routerName: "plan",
          clickName: "movePlan",
        },
        {
          name: "마이페이지",
          show: true,
          routerName: "myPage",
          clickName: "moveMyPage",
        },
      ];
    } else {
      headerItemList.value = [
        { name: "Q&A", show: true, routerName: "qna", clickName: "moveQna" },
        {
          name: "로그인",
          show: true,
          routerName: "login",
          clickName: "moveLogin",
        },
        {
          name: "회원가입",
          show: true,
          routerName: "join",
          clickName: "moveJoin",
        },
        {
          name: "로그아웃",
          show: false,
          routerName: "logout",
          clickName: "logout",
        },
        {
          name: "여행계획",
          show: false,
          routerName: "plan",
          clickName: "movePlan",
        },
        {
          name: "마이페이지",
          show: false,
          routerName: "myPage",
          clickName: "moveMyPage",
        },
      ];
    }

    console.log(headerItemList.value);
  };
  // headerItemList의 show 값 반대로 바꾸기

  // const changeHeaderState = () => {
  //   headerItemList.value = headerItemList.value.map((item) => ({
  //     ...item,
  //     show: !item.show,
  //   }));
  // };

  return {
    headerItemList,
    changeHeaderState,
  };
});
