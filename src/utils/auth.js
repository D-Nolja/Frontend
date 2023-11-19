import axios from "axios";
// axios instance

function getAuthInstance() {
  const authInstance = axios.create({
    baseURL: "/server",
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
