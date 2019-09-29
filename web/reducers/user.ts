import { handleActions } from "redux-actions";
import { IUserActionsType } from "../actions/user";
import { IUserActionChangeView, IUserState, IUserViewType } from "../models/User";

const init: () =>  IUserState = () => {
  return {
    view: {
      type: IUserViewType.COMPOSITION,
    },
  };
};

export const userReducer = handleActions(
  {
    [IUserActionsType.CHANGE_VIEW]: (state, action: any) => {
      if (action.payload as IUserActionChangeView) {
        const { view } = action.payload;
        const newState = {
          ...state,
          view,
        };
        return newState;
      }
      return state;
    },
  },
  init(),
);
