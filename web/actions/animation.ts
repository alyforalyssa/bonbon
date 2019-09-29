import { createAction } from "redux-actions";
import { IAnimationActionCreateOrEditSnapshot, IAnimationClass } from "../models/Animation";

export enum IAnimationActionsType {
  CREATE_OR_EDIT_ANIMATION = "CREATE_OR_EDIT_ANIMATION",
  CREATE_OR_EDIT_SNAPSHOT = "CREATE_OR_EDIT_SNAPSHOT",
}

export const createOrEditAnimation = createAction<
  IAnimationClass
>(IAnimationActionsType.CREATE_OR_EDIT_ANIMATION);
export const createOrEditSnapshot = createAction<
  IAnimationActionCreateOrEditSnapshot
>(IAnimationActionsType.CREATE_OR_EDIT_SNAPSHOT);

export const ianimationActionCreators = {
  createOrEditAnimation,
  createOrEditSnapshot,
};
