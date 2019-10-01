import { handleActions } from "redux-actions";
import { IAnimationActionsType } from "../actions/animation";
import { IFrameActionsType } from "../actions/iframe";
import { IAnimationActionCreateOrEditSnapshot } from "../models/Animation";
import { IFrameState } from "../models/IFrame";
import { iframeReducerInit } from "./init";

export const iframeReducer = handleActions(
  {
    [IFrameActionsType.CREATE_COMPONENT]: (state, action: any) => {
      if (action.payload) {
        const components = [...state.components, action.payload.component];
        const newState = {
          ...state,
          components,
        };
        return newState;
      }
      return state;
    },
    [IFrameActionsType.CONNECT_ANIMATION]: (state, action: any) => {
      if (action.payload) {
        const selectedComponent = state.components.find((component) => (
          component.id === action.payload.componentId
        ));
        if (selectedComponent) {
          const newComponent = {
            ...selectedComponent,
            animation: action.payload.animationId,
          };
          const newComponents = state.components.slice();
          const index = newComponents.indexOf(selectedComponent);
          newComponents[index] = newComponent;
          const newState: IFrameState = {
            ...state,
            components: newComponents,
          };
          // update selected component if it is the same
          if (state.selected && state.selected.id === newComponent.id) {
            newState.selected = newComponent;
          }
          return newState;
        } else {
          return state;
        }
      }
      return state;
    },
    [IFrameActionsType.SELECT_COMPONENT]: (state, action: any) => {
      if (action.payload) {
        const selected = state.components.find((component) => (
          component.id === action.payload.componentId
        ));
        const newState = {
          ...state,
          selected,
        };
        // toggle deselect
        if (selected && state.selected && state.selected.id === selected.id) {
          newState.selected = undefined;
        }
        return newState;
      }
      return state;
    },
    [IFrameActionsType.ADD_OR_EDIT_PROPS]: (state, action: any) => {
      if (action.payload) {
        const selectedComponent = state.components.find((component) => (
          component.id === action.payload.componentId
        ));
        if (selectedComponent) {
          const newComponent = {
            ...selectedComponent,
            props: {
              ...selectedComponent.props,
              ...action.payload.props,
            },
          };
          const newComponents = state.components.slice();
          const index = newComponents.indexOf(selectedComponent);
          newComponents[index] = newComponent;
          const newState = {
            ...state,
            components: newComponents,
          };
          if (state.selected && state.selected.id === newComponent.id) {
            newState.selected = newComponent;
          }
          return newState;
        } else {
          return state;
        }
      }
      return state;
    },
    [IAnimationActionsType.CREATE_OR_EDIT_SNAPSHOT]: (state, action: any) => {
      // if snapshot timeline is 0 update initial props of iframe elem
      if (action.payload as IAnimationActionCreateOrEditSnapshot
        && action.payload.snapshot.timeline === 0) {
          if (state.selected) {
            const newComponent = {
              ...state.selected,
              props: {
                ...state.selected.props,
                ...action.payload.snapshot.props.all,
              },
            };
            const newComponents = state.components.slice();
            const index = newComponents.indexOf(state.selected);
            newComponents[index] = newComponent;
            const newState = {
              ...state,
              components: newComponents,
              selected: newComponent,
            };
            return newState;
          } else {
            return state;
          }
        }
      return state;
    },
  },
  iframeReducerInit(),
);
