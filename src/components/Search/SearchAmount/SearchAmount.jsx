import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { setChildren } from "../../../store/slices/hotels.slice";
import { setAdults } from "../../../store/slices/hotels.slice";
import { setRooms } from "../../../store/slices/hotels.slice";
import { AmountOption } from "../../AmountOption";
import { ChildrenSelector } from "../../ChildrenSelector";
import "./SearchAmount.css";

export const SearchAmount = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const adults = useSelector((state) => state.hotels.adults);
  const children = useSelector((state) => state.hotels.children);
  const rooms = useSelector((state) => state.hotels.rooms);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="top__search--amount__wrapper">
        <div onClick={handleVisible}>
          {adults} Adults — {children} Children — {rooms} Room
        </div>
      </div>
      {isVisible && (
        <div className="top__search--amount__filter">
          <AmountOption
            value={adults}
            setValue={(value) => dispatch(setAdults(value))}
            title="Adults"
            minValue={1}
            maxValue={30}
          />
          <AmountOption
            value={children}
            setValue={(value) => dispatch(setChildren(value))}
            title="Children"
            minValue={0}
            maxValue={10}
          />
          <AmountOption
            value={rooms}
            setValue={(value) => dispatch(setRooms(value))}
            title="Rooms"
            minValue={1}
            maxValue={30}
          />
          {children >= 1 && (
            <>
              <p className="children__selector--title">
                What is the age of the child you&apos;re travelling with?
              </p>
              <div className="children__selector--wrapper">
                {Array(children)
                  .fill("")
                  .map(() => (
                    <ChildrenSelector
                      key={uuidv4()}
                      className="children__selector"
                    />
                  ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
