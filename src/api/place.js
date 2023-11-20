import { getPlaceInstance } from "../utils/place";

const placeInstance = getPlaceInstance();

// param값에 따라 파라미터 수정해야해!!!
async function searchPlacesDistance(param, success, fail) {
  await placeInstance.get(`/shortest`).then(success).catch(fail);
}

async function searchPlacesKeyword(param, success, fail) {
  await placeInstance.get("/location").then(success).catch(fail);
}

export { searchPlacesDistance, searchPlacesKeyword };
