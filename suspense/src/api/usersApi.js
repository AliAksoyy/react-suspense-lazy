import axios from "axios";

const delay = () => new Promise((res) => setTimeout(() => res(), 800));

const usersApi = axios.create({
  baseURL: "http://localhost:3500",
});

export const usersUrlEndpoint = "/users";

const getUser = async(url)=>{}
const getUserById = async(url,userId)=>{}
