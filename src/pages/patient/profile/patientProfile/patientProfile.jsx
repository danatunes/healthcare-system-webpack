import {
  DropDown,
  HeaderList,
  HeadingProfile,
  List,
  UserCard,
} from "../../../../components";
import {
  DownloadIcon,
  PencilAltIcon,
  SaveAsIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../../api/requestMethods";
import { Menu } from "@headlessui/react";
import { getMyAppointments } from "../../../../redux/actions/user";

export const PatientProfile = () => {
  const user = useSelector(({ user }) => user.me);
  const [myDocuments, setMyDocuments] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const dispatch = useDispatch();
  const { appointments } = useSelector(({ user }) => user);

  async function getMyFiles() {
    try {
      await publicRequest
        .get("api/v1/file/patient/files", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setMyDocuments(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const downloadImage = (id) => {
    downloadFile(id).then((res) => {
      let imageUrl = URL.createObjectURL(res.data);
      setImageURL(imageUrl);
    });
  };

  async function downloadFile(id) {
    try {
      return await publicRequest.get("/api/v1/file/data/" + id, {
        responseType: "blob",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMyFiles();
    dispatch(getMyAppointments());
  }, []);

  console.log(appointments, "appointments");

  return (
    <div className="w-full space-y-9">
      <HeadingProfile
        name={`${user.user.fatherName} ${user.user.firstName} ${user.user.lastName} !`}
      />
      <>
        <UserCard userInformation={user} />
        <List
          styleList="rounded-xl"
          header={<h4 className="text-xl font-medium">Documents</h4>}
        >
          {myDocuments.length !== 0 ? (
            <table className="[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="py-4 font-normal px-10">Name</th>
                  <th className="py-4 font-normal px-10">Type</th>
                  <th className="py-4 font-normal px-10">Specialist</th>
                  <th className="py-4 font-normal px-10 text-center">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {myDocuments.map((document, index) => (
                  <tr
                    key={document.id}
                    className={clsx(
                      "text-sm text-left",
                      index % 2 === 0 && "bg-white"
                    )}
                  >
                    <td className="py-4 font-normal px-10">{document.name}</td>
                    <td className="py-4 font-normal px-10">
                      {document.contentType}
                    </td>
                    <td className="py-4 font-normal px-10">Dr. Vin Diesel</td>
                    <td className="py-4 flex justify-center font-normal text-center px-10">
                      <a
                        href={imageURL}
                        onClick={() => downloadImage(document.id)}
                        download
                      >
                        <DownloadIcon className="cursor-pointer w-5 text-[#3A57E8]" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center text-gray-400 py-6 px-3 flex items-center justify-center">
              <SaveAsIcon className="w-11" />
              <p className="text-lg font-medium">No documents</p>
            </div>
          )}
        </List>
        <List
          styleList="rounded-xl"
          className="py-4 px-2.5 space-y-2"
          header={<HeaderList name="Appointments" />}
        >
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => (
              <DropDown
                isDoctor={false}
                status={appointment.status}
                heading={appointment.date}
              >
                <Menu.Item>
                  <table className="w-full overflow-hidden table-auto">
                    <thead>
                      <tr className="text-sm text-gray-400">
                        <th className="font-normal py-4 px-5">Hospital</th>
                        <th className="font-normal py-4 px-5">Doctor</th>
                        <th className="font-normal py-4 px-5">
                          Specialization
                        </th>
                        <th className="font-normal py-4 px-5">Time</th>
                        <th className="font-normal py-4 px-5">Number</th>
                        <th className="font-normal py-4 px-5">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-sm">
                        <td className="font-normal py-4 px-5">
                          {appointment.schedule.doctor.hospital
                            ? appointment.schedule.doctor.hospital.name
                            : "deleted"}
                        </td>
                        <td className="font-normal py-4 px-5">
                          {`${appointment.schedule.doctor.user.firstName} ${appointment.schedule.doctor.user.fatherName}`}
                        </td>
                        <td className="font-normal py-4 px-5">
                          {appointment.schedule.doctor.specialization.name}
                        </td>
                        <td className="font-normal py-4 px-5">
                          {appointment.schedule.time}
                        </td>
                        <td className="font-normal py-4 px-5">
                          {appointment.schedule.doctor.user.phoneNumber}
                        </td>
                        <td className="font-normal py-4 px-5">
                          {appointment.status}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Menu.Item>
              </DropDown>
            ))
          ) : (
            <div className="text-center text-gray-400 py-6 px-3 flex items-center justify-center">
              <PencilAltIcon className="w-11" />
              <p className="text-lg font-medium">No appointments</p>
            </div>
          )}
        </List>
      </>
    </div>
  );
};
