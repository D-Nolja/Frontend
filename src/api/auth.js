import { getAuthInstance } from "@/utils/auth.js";

const auth = getAuthInstance();

async function login(param, success, fail) {
  await auth.post(`/login`, param).then(success).catch(fail);
}

async function logout(success, fail) {
  await auth.get(`/logout`).then(success).catch(fail);
}

// tokenRegeneration 넣어야 해.

async function join(param, success, fail) {
  await auth.post("/join", param).then(success).catch(fail);
}

async function modify(param, success, fail) {
  await auth.put(`/user`, param).then(success).catch(fail);
}

async function searchUserList(success, fail) {
  await auth.get(`/user`).then(success).catch(fail);
}

async function searchUserDetail(success, fail) {
  await auth.get(`/user`).then(success).catch(fail);
}

async function deleteUser(success, fail) {
  await auth.delete(`/user`).then(success).catch(fail);
}

async function uploadProfile(param, config, success, fail) {
  await auth.post(`/image/user`, param, config).then(success).catch(fail);
}

export {
  login,
  logout,
  join,
  modify,
  searchUserList,
  searchUserDetail,
  deleteUser,
  uploadProfile,
};
