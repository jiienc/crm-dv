import React from "react";
import clsx from "classnames";
import { PseudoBorderProps } from "./types";

const PseudoBorder: React.FC<PseudoBorderProps> = ({
  className,
  mTop,
  bTop,
  wfull = false,
  ...rest
}) => (
  <div
    className={clsx(
      className,
      mTop,
      wfull ? "w-full" : "w-1",
      bTop ? "border-t-2" : "border-l-2",
      "absolute h-8 border-gray-400 top-0 left-0 right-0"
    )}
    {...rest}
  />
);

export default PseudoBorder;
