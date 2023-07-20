import React, { useReducer } from "react";

type InputState = { [key: string]: string };

export default function useInputUpdate(initial: InputState, reducer = internalReducer) {
  const [state, dispatch] = useReducer(reducer, initial);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { dataset, value } = e.target;
    dispatch({ type: dataset.key || "", value });
  };

  return [state, handleInput] as const;
}

const internalReducer = (prev: InputState, action: { type: string; value: string }) => {
  const { type, value } = action;
  switch (type) {
    default:
      return {
        ...prev,
        [type]: value,
      };
  }
};

useInputUpdate.reducer = internalReducer;
