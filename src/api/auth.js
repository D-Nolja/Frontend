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
  await auth.put(`/users`, param).then(success).catch(fail);
}

async function searchUserList(success, fail) {
  await auth.get(`/users`).then(success).catch(fail);
}

async function searchUserDetail(user_id, success, fail) {
  await auth.get(`/users/${user_id}`).then(success).catch(fail);
}

async function deleteUser(success, fail) {
  await auth.delete(`/users`).then(success).catch(fail);
}

export {
  login,
  logout,
  join,
  modify,
  searchUserList,
  searchUserDetail,
  deleteUser,
};
