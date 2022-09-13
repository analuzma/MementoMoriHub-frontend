//import api
import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//Login 
// export const loginWs = async (data) => {
//   try {
//     const res = await api.post('/auth/login', data);
//     return successStatus(res);
//   } catch (error) {
//     return internalServerError(error);
//   }
// };

export const loginWs = (data) => {
  return api
  .post('/auth/login', data)
  .then(successStatus)
  .catch (internalServerError) 
};
//Signup
export const signupWs = async (data) => {
  try {
    const res = await api.post('/auth/signup', data);
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};
//Logout
export const logoutWs = async () => {
  try {
    const res = await api.get('/auth/logout');
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};