import React from "react";
import clsx from "clsx";

export const Button = ({ name, style, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "w-40 rounded bg-[#3A57E8] py-2 px-4 text-white",
        "hover:bg-blue-700",
        "disabled:opacity-50",
        style
      )}
    >
      {name}
    </button>
  );
};
