import clsx from "clsx";

export const DoctorProfileCalendar = () => {
  const data = [
    {
      id: 1,
      day: "Monday",
      time: [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
    },
    {
      id: 2,
      day: "Tuesday",
      time: [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
      ],
    },
    {
      id: 3,
      day: "Wednesday",
      time: [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
      ],
    },
    {
      id: 4,
      day: "Thursday",
      time: [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
      ],
    },
    {
      id: 5,
      day: "Friday",
      time: [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
      ],
    },
  ];

  return (
    <div className="flex py-9 shadow-inner flex-col bg-white items-center justify-center">
      <h1>Reception hours</h1>
      <div className="flex mt-3 flex-row w-full justify-evenly items-start">
        {data.map((item) => (
          <RowWithDayAndTime {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const RowWithDayAndTime = ({ day, time }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3>{day}</h3>
      <Time timeByDay={time} />
    </div>
  );
};

const Time = ({ timeByDay }) => {
  return (
    <ul className="mt-3.5 space-y-2.5">
      {timeByDay.map((time) => (
        <li
          key={time}
          className={clsx(
            "px-2 py-1.5 rounded-lg border flex items-center justify-center",
            "active:bg-violet-700",
            "focus:outline-none focus:ring focus:ring-violet-300"
          )}
        >
          {time}
        </li>
      ))}
    </ul>
  );
};
