import { handleActions } from "redux-actions";
import { IAnimationActionsType } from "../actions/animation";
import { IAnimationActionCreateOrEditSnapshot, IAnimationClass, IAnimationState, ISnapshot } from "../models/Animation";

const init: () => IAnimationState = () => {
  return {};
};

export const animationReducer = handleActions(
  {
    [IAnimationActionsType.CREATE_OR_EDIT_ANIMATION]: (state, action: any) => {
      if (action.payload as IAnimationClass) {
        const animationId = action.payload.id;
        const animation = state[animationId];
        const newAnimation = animation ?
          {...animation, ...action.payload} : action.payload;
        const newState = {
          ...state,
        };
        newState[animationId] = newAnimation;
        return newState;
      }
      return state;
    },
    [IAnimationActionsType.CREATE_OR_EDIT_SNAPSHOT]: (state, action: any) => {
      if (action.payload as IAnimationActionCreateOrEditSnapshot) {
        const { animationId, snapshot } = action.payload;
        const animation = state[animationId];
        if (animation) {
          // used to check the index to insert snapshot since we want snapshots sorted by timeline
          let existingSnapshot = false;
          //  copy existing snapshots and update the array with new snapshot from action.payload
          const newSnapshots: ISnapshot[] = [];
          for (const data of animation.snapshots) {
            let newSnapshot: ISnapshot;
            if (data.timeline === snapshot.timeline) {
              // found existing snapshot, merge with existing and update it
              newSnapshot = {
                ...data,
                ...snapshot,
              };
              existingSnapshot = true;
            } else if (data.timeline > snapshot.timeline && existingSnapshot === false) {
              // create a snapshot at this index since we want snapshots sorted by timeline.
              // Push snapshot at this index
              newSnapshots.push(snapshot);
              newSnapshot = {
                ...data,
              };
              existingSnapshot = true;
            } else {
              // just push existing snapshot
              newSnapshot = {
                ...data,
              };
            }
            newSnapshots.push(newSnapshot);
          }

          const newAnimation = {
            ...animation,
            snapshots: newSnapshots,
          };
          const newState = { ...state };
          // update animation in state
          newState[animationId] = newAnimation;
          return newState;
        } else {
          return state;
        }
      }
      return state;
    },
  },
  init(),
);
