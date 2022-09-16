//import api // default donte tengo mi urlBase
import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//user profile
export const getUserWs = async () => {
  try {
    const res = await api.get('/usr/my-profile');
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};
//update user
  export const editUserWs = async ( data) => {
  try {
    const res = await api.patch("/user/edit", data);
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};
//delete user
export const deleteUserWs = async (data) => {
  try {
    const res = await api.delete("/user/delete", data);
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};