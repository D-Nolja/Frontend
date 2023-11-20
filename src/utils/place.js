import axios from "axios";

function getPlaceInstance() {
  const placeInstance = axios.create({
    baseURL: "/server",
    // headers: { "Content-Type": "application/json;charset=utf-8" },
  });

  // Request 발생 시 적용할 내용.
  let accessToken = sessionStorage.getItem("accessToken");
  placeInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
  placeInstance.defaults.headers.post["Content-Type"] = "application/json";
  placeInstance.defaults.headers.put["Content-Type"] = "application/json";

  return getPlaceInstance;
}

export { getPlaceInstance };
