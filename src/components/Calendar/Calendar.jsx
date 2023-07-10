import React, { memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";

import { setDateFrom } from "../../store/slices/hotels.slice";
import { setDateTo } from "../../store/slices/hotels.slice";
import "./Calendar.css";

export const Calendar = memo(() => {
  const dispatch = useDispatch();

  const dateFrom = useSelector((state) => state.hotels.dateFrom);
  const dateTo = useSelector((state) => state.hotels.dateTo);

  const onChange = (dates) => {
    const [start, end] = dates;
    dispatch(setDateFrom(start));
    dispatch(setDateTo(end));
  };

  return (
    <DatePicker
      selected={dateFrom}
      onChange={onChange}
      startDate={dateFrom}
      endDate={dateTo}
      minDate={new Date()}
      selectsRange
      monthsShown={2}
      wrapperClassName="top-section__calendar--wrapper"
      className="top-section__calendar"
    />
  );
});

Calendar.displayName = "Calendar";
