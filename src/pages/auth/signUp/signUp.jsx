import React, { useEffect, useState } from "react";
import { InputWithBottomBorder } from "../../../ui/inputs/inputWithBottomBorder";
import { Button } from "../../../ui/button/button";
import clsx from "clsx";
import { publicRequest } from "../../../api/requestMethods";
import { Datalist } from "../../../ui/datalist/datalist";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

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
      id: "dateOfBirth",
      name: "Date of Birthday",
      type: "date",
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

  const [city, setCity] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [cityId, setCityId] = useState(null);
  const navigate = useNavigate();
  const { register } = useForm();

  async function fetch() {
    try {
      const responseCity = await publicRequest("/api/v1/city/get-all");
      setCity(responseCity.data);
    } catch (e) {
      if (e.message) {
        toast(e.message, {
          type: "error",
          theme: "light",
        });
      }
    }
  }

  useEffect(() => {
    fetch().then();
  }, []);

  const onChangeCity = async (e) => {
    let cityId;
    city.find((item) => {
      if (item.name === e.target.value) {
        cityId = item.id;
      }
    });
    setCityId(cityId);
    const response = await publicRequest.get("api/v1/hospital/city/" + cityId);
    setHospitals(response.data.hospitals);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    let requestData = Object.fromEntries(formData);
    console.log(requestData);
    let clinicId;
    hospitals.find((item) => {
      if (item.name === requestData.hospitalId) {
        clinicId = item.id;
      }
    });
    delete requestData.city;
    delete requestData.cityId;
    requestData.hospitalId = clinicId;
    let number = requestData.phoneNumber;
    if (number.toString().includes("a", /[A-Z] || [a-z] || " "/)) {
      toast("Wrong number", {
        style: "error",
        position: "top-right",
      });
      return;
    }

    try {
      await publicRequest.post("api/v1/auth/registration/patient", requestData);
      toast("Succesfully created", {
        type: "success",
        theme: "light",
      });
      navigate("/login");
    } catch (e) {
      if (e.message) {
        toast(e.response.data.message, {
          type: "error",
          theme: "light",
        });
      }
    }
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
              id={`${item.id}`}
              max="2022-05-31"
              required={true}
              register={register}
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
                  ? `${item.id}_list`
                  : null
              }
            />
          </label>
        ))}
        <select
          name="gender"
          id="gender"
          className="mt-1 min-w-[250px] border-t-0 border-r-0 border-l-0 bg-none border-b border-black focus-within:border-indigo-600"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <Datalist data={hospitals} id="hospitalId_list" />
        <Datalist data={city} id="cityId_list" />
      </div>
      <div className="flex flex-col items-center mt-4 justify-center space-y-5">
        <Button name="Sign up" type="submit" />
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
