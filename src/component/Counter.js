import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch({ type: "INC" });
  };

  const dec = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Counter;
