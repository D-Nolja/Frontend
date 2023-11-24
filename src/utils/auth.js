import axios from "axios";
// axios instance

function getAuthInstance() {
  // console.log(import.meta.env.BASE_URL);
  const authInstance = axios.create({
    baseURL:
      "http://D-nolja-prod.eba-pk7qjxkg.ap-northeast-2.elasticbeanstalk.com",
    // headers: { "Content-Type": "application/json;charset=utf-8" },
  });

  // Request 발생 시 적용할 내용.
  let accessToken = sessionStorage.getItem("accessToken");
  authInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
  authInstance.defaults.headers.post["Content-Type"] = "application/json";
  authInstance.defaults.headers.put["Content-Type"] = "application/json";

  return authInstance;
}

export { getAuthInstance };
