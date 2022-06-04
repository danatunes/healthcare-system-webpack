import React from "react";
import clsx from "clsx";

export const Button = ({ name, style, type, onClick, disabled, onChange }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      className={clsx(
        style,
        "rounded-3xl bg-[#3A57E8] py-2 px-4 text-white",
        "disabled:opacity-50"
      )}
    >
      {name}
    </button>
  );
};
