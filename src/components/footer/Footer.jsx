import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "flex w-full flex-col py-10 items-center justify-between text-sm font-normal space-y-3 space-x-0",
        "sm:flex-row sm:space-y-0 sm:space-x-3"
      )}
    >
      <Link to="#">Contact</Link>
      <a href="tel:5554280940">Call us at 555-428-0940</a>
      <Link to="#">Get help</Link>
    </footer>
  );
};
