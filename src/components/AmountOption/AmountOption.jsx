import React, { memo, useState } from "react";

import classNames from "classnames";
import { func, number, string } from "prop-types";

import { IconButton } from "../IconButton";
import "./AmountOption.css";

export const AmountOption = memo(
  ({ title, minValue, maxValue, value, setValue }) => {
    const [decraseDisabled, setDecraseDisabled] = useState(value === minValue);
    const [increaseDisabled, setIncreaseDisabled] = useState(
      value === maxValue
    );

    const decreaseOption = () => {
      if (value > minValue) {
        setValue(value - 1);
        setDecraseDisabled(false);
        setIncreaseDisabled(false);
      }

      if (value === minValue + 1) {
        setDecraseDisabled(true);
      }
    };

    const increaseOption = () => {
      if (value < maxValue) {
        setValue(value + 1);
        setDecraseDisabled(false);
        setIncreaseDisabled(false);
      }

      if (value === maxValue - 1) {
        setIncreaseDisabled(true);
      }
    };

    return (
      <div className="top__search--amount__filter--options__wrapper">
        <p>{title}</p>
        <div className="top__search--amount__filter--button__wrapper">
          <IconButton
            text="–"
            onClick={decreaseOption}
            className={classNames({
              disabled: decraseDisabled,
            })}
          />
          <p>{value}</p>
          <IconButton
            text="+"
            onClick={increaseOption}
            className={classNames({
              disabled: increaseDisabled,
            })}
          />
        </div>
      </div>
    );
  }
);

AmountOption.displayName = "AmountOption";

AmountOption.propTypes = {
  title: string.isRequired,
  minValue: number.isRequired,
  maxValue: number.isRequired,
  value: number.isRequired,
  setValue: func.isRequired,
};
