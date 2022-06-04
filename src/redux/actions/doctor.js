import { publicRequest } from "../../api/requestMethods";
import { toast } from "react-toastify";
import photo from "../../images/avatardefault.png";

export const setDoctorAvatar = (payload) => ({
  type: "SET_DOCTOR_AVATAR",
  payload,
});

export const getDoctorAvatar = (doctorId) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest
      .get("/api/v1/file/avatar/" + doctorId, {
        responseType: "blob",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        let imageUrl = URL.createObjectURL(data.data);
        console.log(imageUrl, "doctor avatar");
        dispatch(setDoctorAvatar(imageUrl));
      });
  } catch (e) {
    dispatch(setDoctorAvatar(photo));
    dispatch(setError(true));
  }
};

export const setDoctorWithFeedback = (payload) => ({
  type: "SET_DOCTOR",
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

export const getDoctorWithFeedback = (id) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest
      .get("/api/v1/patient/profile/doctor/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        console.log(data.data, "doctor data.data");
        dispatch(setDoctorWithFeedback(data.data));
      });
  } catch (e) {
    toast("Please check credentials", {
      type: "error",
      theme: "light",
    });
    dispatch(setError(true));
  }
};
