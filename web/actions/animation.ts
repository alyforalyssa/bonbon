import { createAction } from "redux-actions";
import { IAnimationClass } from "../models/Animation";

export enum IAnimationActionsType {
  CREATE_OR_EDIT_ANIMATION = "CREATE_OR_EDIT_ANIMATION",
}

export const createOrEditAnimation = createAction<
  IAnimationClass
>(IAnimationActionsType.CREATE_OR_EDIT_ANIMATION);

export const ianimationActionCreators = {
  createOrEditAnimation,
};
