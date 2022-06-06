import { publicRequest } from "../../api/requestMethods";
import jwt from "jwt-decode";
import { toast } from "react-toastify";

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

export const setMe = (payload) => ({
  type: "SET_ME",
  payload,
});

export const setMyAppoinments = (payload) => ({
  type: "SET_MY_APPOINMENTS",
  payload,
});

export const getMyAppointments = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest
      .get("/api/v1/appointment/patient", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(setMyAppoinments(res.data));
      });
  } catch (e) {
    toast("Error fetching appointments", {
      type: "error",
      position: "top-right",
    });
  }
};

export const getMe = () => async (dispatch) => {
  const role = localStorage.getItem("role").toLowerCase();
  dispatch(setIsFetching(true));
  const token = localStorage.getItem("token");
  console.log("getme");
  try {
    await publicRequest
      .get(`/api/v1/${role}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        dispatch(setMe(data.data));
      });
    console.log("try");
  } catch (e) {
    console.log(e.message);
    dispatch(setError(true));
    console.log("catch");
  }
};

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
      localStorage.setItem("role", data.headers["role"]);
      console.log(data.headers);
      dispatch(
        setUser({
          id: user.sub,
          role: data.headers["role"],
          hospitalId: data.headers["hospitalid"],
        })
      );
    });
  } catch (e) {
    toast("Please check credentials", {
      type: "error",
      theme: "light",
    });
    dispatch(setError(true));
  }
  dispatch(getMe());
};
