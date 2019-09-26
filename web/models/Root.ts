import {IFrameState} from "./IFrame";
import {IAnimationTabState} from "./Sidebar";

export interface IRootState {
  animationTab: IAnimationTabState;
  iframe: IFrameState;
  router?: any;
}
