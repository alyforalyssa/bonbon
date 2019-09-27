import { handleActions } from "redux-actions";
import { IAnimationActionsType } from "../actions/animation";
import { IAnimationClass } from "../models/Animation";

const init: () => IAnimationClass[] = () => {
  return [];
};
// const animationClassInit: (id: number) => IAnimationClass = (id) => {
//   return {
//     id,
//     rule: {
//       animationName: id.toString(),
//       animationDuration: "3s",
//       animationTimingFunction: "ease",
//       animationIterationCount: "1",
//     },
//     snapshots: [
//       {
//         time: "0s",
//         timeline: 0,
//         props: [],
//       },
//       {
//         time: "3s",
//         timeline: 0,
//         props: [],
//       },
//     ],
//   };
// };

export const animationReducer = handleActions(
  {
    [IAnimationActionsType.CREATE_OR_EDIT_ANIMATION]: (state, action: any) => {
      if (action.payload) {
        const animation = state.find((animationClass: IAnimationClass) => (
          animationClass.id === action.payload.id
        ));
        const newAnimation = animation ?
          {...animation, ...action.payload} : action.payload;
        const newState = state.slice();
        if (animation) {
          const index = newState.indexOf(animation);
          newState[index] = newAnimation;
        } else {
          newState.push(newAnimation);
        }
        return newState;
      }
      return state;
    },
  },
  init(),
);
