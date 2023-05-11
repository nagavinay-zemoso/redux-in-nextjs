"use client";

import React from "react";

import { RootState } from "@/app/redux-store/store";
import { useSelector } from "react-redux";

const CountInfo = () => {
  const count = useSelector((state: RootState) => state.count.value);
  return <h1>Count : {count}</h1>;
};

export default CountInfo;
