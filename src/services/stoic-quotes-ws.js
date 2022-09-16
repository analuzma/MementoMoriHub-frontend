// https://stoicquotesapi.com/v1/api/quotes/random

import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//create a quote and add it to favorites
export const createFavQuoteWs = async (data) => {
    try {
        const res = await api.get("/quotes/createfav", data);
        return successStatus(res);
    } catch (error) {
        return internalServerError(error);
    }
};

//get all quotes by user
export const getFavQuotesWs = async (data) => {
    try {
        const res = await api.get("/quotes/favlist", data);
        return successStatus(res);
    } catch (error) {
        return internalServerError(error);
    }
};