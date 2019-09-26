import { createAction } from "redux-actions";
import { AnimationClass } from "../models/Sidebar";

export enum AnimationActionsType {
  ADD_CLASS = "ADD_CLASS",
}

export const addClass = createAction<
  Pick<AnimationClass, "displayName" | "keyframesRule">
>(AnimationActionsType.ADD_CLASS);

export const animationActionCreators = {
  addClass,
};
