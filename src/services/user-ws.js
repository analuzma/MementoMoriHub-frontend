//import api // default donte tengo mi urlBase
import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";


export const editUserWs = (data) =>
  api.patch("/user/edit", data).then(successStatus).catch(internalServerError);