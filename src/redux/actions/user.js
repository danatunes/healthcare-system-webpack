import { publicRequest } from "../../api/requestMethods";
import jwt from "jwt-decode";

export const setUser = (payload) => ({
  type: "SET_USER",
  payload,
});

export const setIsFetching = (payload) => ({
  type: "SET_IS_FETCHING",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const onLogout = () => ({
  type: "DESTROY_SESSION",
});

export const logout = () => async (dispatch) => {
  dispatch(onLogout());
  localStorage.removeItem("token");
};

export const getSelfInformation = (role, id, token) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest
      .get(`/api/v1/${role}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        dispatch(
          setUser({
            token,
            ...data.data.user,
            iin: data.data.iin,
            userHospital: { ...data.data.hospital },
          })
        );
      });
  } catch (e) {
    console.log(e.message);
    dispatch(setError(true));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest.post("login", user).then((data) => {
      const user = jwt(data.headers["token"]); // decode your token here
      localStorage.setItem("token", data.headers["token"]);
      dispatch(
        setUser({
          id: user.sub,
          role: user.aud,
          hospitalId: data.headers["hospitalid"],
        })
      );
    });
  } catch (e) {
    dispatch(setError(true));
  }
};
