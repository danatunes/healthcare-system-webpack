import { publicRequest } from "../../api/requestMethods";

export const setDoctorsWithHospitalId = (payload) => ({
  type: "SET_DOCTORS",
  payload,
});

export const getDoctorsWithHospitalId = (id) => async (dispatch) => {
  try {
    const response = await publicRequest(
      "api/v1/hospital/doctor/hospital/" + id
    );
    dispatch(setDoctorsWithHospitalId(response.data));
  } catch (e) {
    console.log(e);
  }
};
