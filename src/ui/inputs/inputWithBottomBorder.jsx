import React from "react";
import clsx from "clsx";

export const InputWithBottomBorder = ({id, name, style,placeholder,type }) => {
  return (
    <div
      className={clsx(
        "mt-1 min-w-[250px] border-b border-black focus-within:border-indigo-600",
        style
      )}
    >
      <input
        type={type}
        name={id}
        id={id}
        className="block min-h-[40px] w-full border-0 border-transparent bg-transparent outline-0 focus:border-none sm:text-sm"
        placeholder={name}
      />
    </div>
  );
};
