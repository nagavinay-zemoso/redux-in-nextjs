"use client";

import { increment } from "@/app/redux-store/features/counter/counterSlice";
import { RootState } from "@/app/redux-store/store";
import React from "react";
import styles from "../../page.module.css";
import { useDispatch, useSelector } from "react-redux";

const CountIncrement = () => {
  const count = useSelector((state: RootState) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.counter}>
      <h1>Count : {count}</h1>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
};

export default CountIncrement;
