import axios from 'axios';

//check if web app is in production or development

const isProduction = process.env.NODE_ENV === "production";

//decide baseURL whether it is in production or development
const baseURL = isProduction  ? "https://memento-mori-hub.herokuapp.com/api" : "http://localhost:5005/api";

export const api = axios.create({
    baseURL,
    withCredentials:true,
    timeout:10000
})

// api.post("/laruta")
// axios.post("http://www.tinder.com/api/auth/algo")