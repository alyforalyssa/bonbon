import { createAction } from "redux-actions";
import { IUserActionChangeView } from "../models/User";

export enum IUserActionsType {
  CHANGE_VIEW = "CHANGE_VIEW",
}

export const handleUserViewChange = createAction<
  IUserActionChangeView
>(IUserActionsType.CHANGE_VIEW);

export const userActionCreators = {
  handleUserViewChange,
};
