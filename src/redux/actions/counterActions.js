import { INCREMENT, DECREMENT, INC_BY_VAL } from "./types";

export const incrementAction = async (dispatch) => {
  // return { type: INCREMENT };
  return dispatch({ type: INCREMENT });
};
export const decrementAction = async (dispatch) => {
  // return { type: DECREMENT };
  return dispatch({ type: DECREMENT });
};
export const inrementByValAction = async (val, dispatch) => {
  // return {
  //   type: INC_BY_VAL,
  //   payload: val,
  // };
  return dispatch({
    type: INC_BY_VAL,
    payload: val,
  });
};
