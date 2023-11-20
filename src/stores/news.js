import { defineStore } from "pinia";
import { ref } from "vue";
import { getNews } from "@/api/news";
export const useNewsStore = defineStore("newsStore", () => {
  const banners = ref([]);
  const newsItems = ref([]);

  const getNewsInfo = async () => {
    await getNews(
      (response) => {
        console.log(response);
        let { data } = response;

        banners.value = data.info.banners;
        newsItems.value = data.info.items;
      },
      (error) => {
        console.log("news 정보 가져오기 error ", error);
      }
    );
  };

  return {
    banners,
    newsItems,
    getNewsInfo,
  };
});
