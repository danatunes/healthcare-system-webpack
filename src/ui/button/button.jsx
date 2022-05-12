import React from "react";
import clsx from "clsx";

export const Button = ({ name, style,type }) => {
  return (
    <button
        type={type}
      className={clsx(
        "w-40 rounded bg-[#3A57E8] py-2 px-4 text-white hover:bg-blue-700",
        style
      )}
    >
      {name}
    </button>
  );
};
