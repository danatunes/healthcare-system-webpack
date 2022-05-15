import axios from "axios";

const BASE_URL = "https://api-healthcare-system.herokuapp.com/";
// const user = useSelector(({ user }) => user.currentUser);
let token = "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` },
});
