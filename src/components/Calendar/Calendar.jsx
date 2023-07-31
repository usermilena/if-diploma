import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

import { isValid } from "date-fns";

import "./Calendar.css";

const range = (start, end) => {
  const ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

export const CalendarForSettings = ({ className, input }) => {
  const date = useSelector((state) =>
    state.auth.user ? state.auth.user.date : null
  );

  return (
    <Calendar
      initialValue={new Date(date)}
      className={className}
      input={input}
    />
  );
};

export const Calendar = ({ name, input, className, initialValue = null }) => {
  const [startDate, setStartDate] = useState(initialValue);
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
            unselectable="on"
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
            unselectable="on"
          >
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => {
        if (isValid(date)) {
          input.onChange(date);
          setStartDate(date);
        } else {
          input.onChange(null);
        }
      }}
      maxDate={new Date()}
      className={className}
      name={name}
      required
    />
  );
};
