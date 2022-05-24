import {
  HeadingProfile,
  LastNotificationList,
  List,
  UserCard,
} from "../../../../components";
import { DownloadIcon, SaveAsIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../../api/requestMethods";

export const PatientProfile = () => {
  const user = useSelector(({ user }) => user.me);
  const [myDocuments, setMyDocuments] = useState([]);
  const [downloadDoc, setDownloadDoc] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  async function getMyFiles() {
    try {
      await publicRequest
        .get("/api/v1/file", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setMyDocuments(res.data);
        });
      console.log(randomNumber());
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

  function randomNumber() {
    return Math.floor(Math.random() * 3); //Максимум не включается, минимум включается
  }

  useEffect(() => {
    getMyFiles();
  }, []);

  console.log(myDocuments);

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
        <LastNotificationList className="py-4 px-2.5" isDoctor={false} />
      </>
    </div>
  );
};
