import { api } from "./api";
import { successStatus, internalServerError } from "../utils/clear-res";

//upload single image
export const uploadImageWs = (file) =>
  api
    .post("/upload/single", file)
    .then(successStatus)
    .catch(internalServerError);

//delete image // (need to test it)
export const deleteImageWs = (name, file) =>
  api
    .delete(`/upload/single/delete-image/${name}`, file)
    .then(successStatus)
    .catch(internalServerError);