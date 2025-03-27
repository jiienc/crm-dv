import { useState, useEffect } from "react";
import classNames from "classnames";
import { Spinner } from "../Spinner";
import type { CommonProps } from "../@types/common";
import type { ReactNode, ChangeEvent, Ref } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export interface SwitcherProps extends CommonProps {
  checked?: boolean;
  checkedContent?: string | ReactNode;
  switcherClass?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  labelRef?: Ref<HTMLLabelElement>;
  name?: string;
  onChange?: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  ref?: Ref<HTMLInputElement>;
  unCheckedContent?: string | ReactNode;
}

const SwitcherTheme = (props: SwitcherProps) => {
  const {
    checked,
    className,
    defaultChecked,
    disabled,
    isLoading = false,
    labelRef,
    name,
    onChange,
    readOnly,
    ref,
    ...rest
  } = props;

  const [switcherChecked, setSwitcherChecked] = useState(
    defaultChecked || checked
  );

  useEffect(() => {
    if (typeof checked !== "undefined") {
      setSwitcherChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextChecked = !switcherChecked;

    if (disabled || readOnly || isLoading) {
      return;
    }

    if (typeof checked === "undefined") {
      setSwitcherChecked(nextChecked);
      onChange?.(nextChecked, e);
    } else {
      onChange?.(!switcherChecked as boolean, e);
    }
  };

  return (
    <label
      ref={labelRef}
      className={classNames(
        "flex items-center gap-2 cursor-pointer transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {/* Hidden Checkbox */}
      <input
        ref={ref}
        type="checkbox"
        disabled={disabled}
        readOnly={readOnly}
        name={name}
        className="sr-only peer"
        checked={switcherChecked}
        {...rest}
        onChange={handleChange}
      />

      {/* Show Spinner when loading */}
      {isLoading ? (
        <Spinner className="w-5 h-5 text-gray-500" />
      ) : (
        <span className="text-2xl transition-all duration-200">
          {switcherChecked ? (
            <BiSun className="text-yellow-500" />
          ) : (
            <BiMoon className="text-blue-500" />
          )}
        </span>
      )}
    </label>
  );
};

export default SwitcherTheme;
