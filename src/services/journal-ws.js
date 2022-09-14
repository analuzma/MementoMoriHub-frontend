import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//all journal entries by user
export const getJournalEntriesByUserWs = async (data) => {
    try {
        const res = await api.get("/journal", data);
        return successStatus(res);
    } catch (error) {
        return internalServerError(error);
    }
};
//journal entry detail
export const getJournalEntryWs = async (id, data) => {
    try {
        const res = await api.get(`/journal/${id}`, data);
        return successStatus(res);
    } catch (error) {
        return internalServerError(error);
    }
};
//create new journal entry
export const newJournalEntryWs = async (data) => {
    try {
        const res = await api.post("/journal/write", data);
        return successStatus(res);
    } catch (error) {
        return internalServerError(error);
    }
};
//update journal entry
export const updateJournalEntryWs = async (id, data) => {
  try {
    const res = await api.patch(`/journal/${id}/edit`, data);
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};

//delete journal entry
export const deleteJournalEntryWs = async (id, data) => {
  try {
    const res = await api.delete(`/journal/${id}/delete`, data);
    return successStatus(res);
  } catch (error) {
    return internalServerError(error);
  }
};