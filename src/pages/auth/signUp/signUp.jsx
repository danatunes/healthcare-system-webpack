import React, { useEffect } from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { LoginIntegration } from "../../../components";
import { Button } from "../../../ui/button/button";
import clsx from "clsx";
import { publicRequest } from "../../../api/requestMethods";
import { Datalist } from "../../../ui/datalist/datalist";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const dataForUI = [
    {
      id: "fatherName",
      name: "Father Name",
      type: "text",
    },
    {
      id: "firstName",
      name: "First Name",
      type: "text",
    },
    {
      id: "lastName",
      name: "Last Name",
      type: "text",
    },
    {
      id: "email",
      name: "Email",
      type: "email",
    },
    {
      id: "phoneNumber",
      name: "Phone",
      type: "tel",
    },
    {
      id: "iin",
      name: "IIN",
      type: "text",
    },
    {
      id: "password",
      name: "Password",
      type: "password",
    },
    {
      id: "rePassword",
      name: "Confirm Password",
      type: "password",
    },
    {
      id: "cityId",
      name: "City",
      type: "datalistCity",
    },
    {
      id: "hospitalId",
      name: "Clinics",
      type: "datalist",
    },
  ];

  const [city, setCity] = React.useState([]);
  const [hospitals, setHospitals] = React.useState([]);
  const [cityId, setCityId] = React.useState();

  useEffect(async () => {
    try {
      const responseCity = await publicRequest("/api/v1/city/get-all");
      console.log(responseCity.data);
      setCity(responseCity.data);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }, []);

  const onChangeCity = async (e) => {
    console.log(e.target.value);
    let cityId;
    city.find((item) => {
      if (item.name === e.target.value) {
        cityId = item.id;
      }
    });
    setCityId(cityId);
    const response = await publicRequest.get("api/v1/hospital/city/" + cityId);
    console.log(response.data);
    setHospitals(response.data.hospitals);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let requestData = Object.fromEntries(formData);
    let clinicId;
    hospitals.find((item) => {
      if (item.name === requestData.Clinics) {
        clinicId = item.id;
      }
    });
    requestData.City = cityId;
    requestData.Clinics = clinicId;
    const response = await publicRequest.post(
      "api/v1/auth/registration/patient",
      requestData
    );
    console.log(response);
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign Up
        </h1>
        <p className="text-[#8A92A6]">Create your account</p>
      </div>
      <div className={clsx("grid grid-cols-1 gap-3", "md:grid-cols-2")}>
        {dataForUI.map((item) => (
          <label htmlFor={item.id}>
            <InputWithBottomBorder
              key={item.id}
              id={`${item.id}_${item.name}`}
              name={item.name}
              type={
                item.type === "datalist" || item.type === "datalistCity"
                  ? null
                  : item.type
              }
              onChange={item.type === "datalistCity" ? onChangeCity : null}
              placeholder={item.name}
              autoComplete="off"
              list={
                item.type === "datalist" || item.type === "datalistCity"
                  ? item.id
                  : null
              }
            />
          </label>
        ))}
        <Datalist data={hospitals} id="hospitalId" />
        <Datalist data={city} id="cityId" />
      </div>
      <div className="flex flex-col items-center mt-4 justify-center space-y-5">
        <div className="flex w-full items-center justify-center space-x-2">
          <input type="checkbox" className="border-0" />
          <p className="text-[#8A92A6]">I agree with the terms of use</p>
        </div>
        <Button name="Sign up" type="submit" />
        <p className="text-black">or sign up with other accounts?</p>
        <LoginIntegration />
        <p className="text-black">
          Already have an Account{" "}
          <NavLink className="text-[#458FF6]" to="/login">
            Sign in
          </NavLink>
        </p>
      </div>
    </form>
  );
};
