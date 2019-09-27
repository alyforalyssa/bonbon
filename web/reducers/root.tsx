import { combineReducers } from "redux";
import { IRootState } from "../models/Root";
import { animationReducer } from "./animation";
import { iframeReducer } from "./iframe";
import { animationTabReducer } from "./sidebar";
// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
  animationTab: animationTabReducer as any,
  animations:  animationReducer as any,
  iframe: iframeReducer as any,
});
