import { createAction } from "redux-actions";
import { IFrameAddProps, IFrameConnectAnimationToComponent, IFrameCreateComponent, IFrameSelectComponent } from "../models/IFrame";

export enum IFrameActionsType {
  CREATE_COMPONENT = "CREATE_COMPONENT",
  SELECT_COMPONENT = "SELECT_COMPONENT",
  ADD_OR_EDIT_PROPS = "ADD_OR_EDIT_PROPS",
  CONNECT_ANIMATION = "CONNECT_ANIMATION",
}

export const createComponent = createAction<
  IFrameCreateComponent
>(IFrameActionsType.CREATE_COMPONENT);
export const toggleComponentSelect = createAction<
  IFrameSelectComponent
>(IFrameActionsType.SELECT_COMPONENT);
export const addOrEditComponentProps = createAction<
  IFrameAddProps
>(IFrameActionsType.ADD_OR_EDIT_PROPS);
export const connectAnimationToComponent = createAction<
  IFrameConnectAnimationToComponent
>(IFrameActionsType.CONNECT_ANIMATION);

export const iframeActionCreators = {
  createComponent,
  toggleComponentSelect,
  connectAnimationToComponent,
  addOrEditComponentProps,
};
