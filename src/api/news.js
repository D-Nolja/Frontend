import { getAuthInstance } from "@/utils/auth.js";
const auth = getAuthInstance();

async function getNews(success, fail) {
  await auth.get(`/news`).then(success).catch(fail);
}

export { getNews };
