import { handleActions } from "redux-actions";
import { AnimationActionsType } from "../actions/sidebar";
import { AnimationClass, IAnimationTabState } from "../models/Sidebar";
import { keyframes } from "../styledComponents";

const defaultAnimation: AnimationClass[] = [
  {
    id: 1,
    name: "fade-out",
    displayName: "Fade Out",
    keyframesRule: `
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
    `,
  },
];

const init: () => IAnimationTabState = () => {
  const animations = defaultAnimation.map((animation: AnimationClass) => {
    const keyframesRule = keyframes`${animation.keyframesRule}`;
    return {
      ...animation,
      keyframesRule,
    };
  });
  return {
    animations,
  };
};

export const animationTabReducer = handleActions(
  {
    [AnimationActionsType.ADD_CLASS]: (state, action: any) => {
      if (action.payload) {
        const animation: AnimationClass = {
          ...action.payload,
          id: state.animations.length + 1,
          keyframesRule: keyframes`${action.payload.keyframesRule}`,
          name: action.payload.displayName.replace(/[^A-Za-z0-9_\.~]+/gm, ""),
          };
        const newState = {
          ...state,
          animations: [...state.animations, animation],
        };
        return newState;
      }
      return state;
    },
  },
  init(),
);
