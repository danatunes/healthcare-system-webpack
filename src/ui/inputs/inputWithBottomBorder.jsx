import React from "react";
import clsx from "clsx";

export const InputWithBottomBorder = ({
  id,
  style,
  register,
  max,
  required,
  placeholder,
  type,
  list,
  autoComplete,
  onChange,
  defaultValue,
  reference,
}) => {
  console.log(reference, "ref");
  return (
    <div
      className={clsx(
        "mt-1 min-w-[250px] border-b border-black focus-within:border-indigo-600",
        style
      )}
    >
      <input
        type={type}
        max={max}
        required={required}
        {...register}
        ref={reference}
        name={id}
        autoComplete={autoComplete}
        onChange={onChange}
        defaultValue={defaultValue}
        id={id}
        className="block min-h-[40px] w-full border-0 border-transparent bg-transparent outline-0 focus:border-none sm:text-sm"
        placeholder={placeholder}
        list={list}
      />
    </div>
  );
};
