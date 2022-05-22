import clsx from "clsx";
import { useEffect, useState } from "react";

export const DoctorProfileCalendar = ({ setWorkCalendar, dataFromPatient }) => {
  const role = localStorage.getItem("role");
  let data = [
    {
      id: 1,
      dayOfWeek: "mmmMonday",
      times: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 2,
      dayOfWeek: "Tuesday",
      times: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 3,
      dayOfWeek: "Wednesday",
      times: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 4,
      dayOfWeek: "Thursday",
      times: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 5,
      dayOfWeek: "Friday",
      times: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
  ];

  useEffect(() => {
    if (dataFromPatient !== undefined) {
      data = dataFromPatient;
    }
  }, []);

  console.log(dataFromPatient);

  return (
    <div className="flex py-9 shadow-inner flex-col bg-white items-center justify-center">
      <h1>Reception hours</h1>
      <div className="flex mt-3 flex-row w-full justify-evenly items-start">
        {role === "PATIENT"
          ? dataFromPatient.map((item, index) => (
              <RowWithDayAndTime
                times={item.times}
                dayOfWeek={item.dayOfWeek}
                key={`${item.dayOfWeek} ${index}`}
                setWorkCalendar={setWorkCalendar}
              />
            ))
          : data.map((item) => (
              <RowWithDayAndTime
                times={item.times}
                dayOfWeek={item.dayOfWeek}
                key={item.dayOfWeek}
                setWorkCalendar={setWorkCalendar}
              />
            ))}
      </div>
    </div>
  );
};

const RowWithDayAndTime = ({ dayOfWeek, times, setWorkCalendar }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3>{dayOfWeek}</h3>
      <Time
        timeByDay={times}
        day={dayOfWeek}
        setWorkCalendar={setWorkCalendar}
      />
    </div>
  );
};

const Time = ({ timeByDay, day, setWorkCalendar }) => {
  const [checked, setChecked] = useState("");

  return (
    <ul className="mt-3.5 space-y-2.5">
      {timeByDay.map((time) => (
        <li
          key={time}
          onClick={() => {
            setChecked((prevState) => [...prevState, time]);
            setWorkCalendar((prevState) => [
              ...prevState,
              { time, dayOfWeek: day.toUpperCase() },
            ]);
          }}
          className={clsx(
            "px-2 py-1.5 rounded-lg border flex items-center justify-center",
            "active:bg-[#3A57E8]",
            checked.includes(time) && "bg-[#3A57E8] text-white",
            "focus:outline-none focus:ring focus:ring-violet-300"
          )}
        >
          {time.substring(0, 5)}
        </li>
      ))}
    </ul>
  );
};
