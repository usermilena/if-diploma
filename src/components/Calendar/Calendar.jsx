import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format, isValid } from "date-fns";

import "./Calendar.css";

const range = (start, end) => {
  const ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

export const Calendar = ({
  name,
  input,
  className,
  input: { value, onChange },
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(new Date().getFullYear() - 120, new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="calendar__header--wrapper">
          <button
            type="button"
            className="calendar__header--button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </button>
          <select
            value={date.getFullYear()}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="calendar__header--button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </button>
        </div>
      )}
      // selected={startDate}
      selected={startDate && isValid(startDate) ? startDate : null} // needs to be checked if it is valid date
      // onChange={(date) => setStartDate(date)}
      // onChange={(date) => input.onChange()}
      onChange={(date) => {
        // On Change, you should use final-form Field Input prop to change the value
        if (isValid(startDate)) {
          input.onChange(format(new Date(date), "dd-MM-yyyy"));
          setStartDate(date);
        } else {
          input.onChange(null);
        }
      }}
      maxDate={new Date()}
      className={className}
      name={name}
    />
  );
};
