import clsx from "clsx";
import { useState } from "react";

export const DoctorProfileCalendar = ({ setWorkCalendar }) => {
  const data = [
    {
      id: 1,
      day: "Monday",
      time: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 2,
      day: "Tuesday",
      time: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 3,
      day: "Wednesday",
      time: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 4,
      day: "Thursday",
      time: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
    {
      id: 5,
      day: "Friday",
      time: ["09:00", "10:00", "11:00", "12:00", "13:00"],
    },
  ];

  return (
    <div className="flex py-9 shadow-inner flex-col bg-white items-center justify-center">
      <h1>Reception hours</h1>
      <div className="flex mt-3 flex-row w-full justify-evenly items-start">
        {data.map((item) => (
          <RowWithDayAndTime
            {...item}
            key={item.id}
            setWorkCalendar={setWorkCalendar}
          />
        ))}
      </div>
    </div>
  );
};

const RowWithDayAndTime = ({ day, time, setWorkCalendar }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3>{day}</h3>
      <Time timeByDay={time} day={day} setWorkCalendar={setWorkCalendar} />
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
          {time}
        </li>
      ))}
    </ul>
  );
};
