import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, SUB } from "./redux/firstSlice";
import { useAppDispatch, useAppSelector } from "./types";

export const App: React.FC = () => {
  const { count }: any = useAppSelector((state: any) => state.cake);
  const x = useSelector((state: any) => state.cake2);

  const dispatch = useAppDispatch();
  console.log("State", count);

  const handleClick = (x: boolean) => {
    if (x) {
      dispatch(ADD());
    } else {
      dispatch(SUB(2));
    }
  };
  return (
    <React.Fragment>
      <div>
        <h1>Redux ToolKit</h1>
        <br />
        <label htmlFor="">
          <button onClick={() => handleClick(true)}>ADD</button>
        </label>
        <label htmlFor="">
          <button onClick={() => handleClick(false)}>SUB</button>
        </label>
        <br />
        <h1>First slice Value: {count} </h1>
        <h1>Second slice Value: {x.count} </h1>
      </div>
    </React.Fragment>
  );
};
