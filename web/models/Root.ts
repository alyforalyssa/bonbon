import {IAnimationClass} from "./Animation";
import {IFrameState} from "./IFrame";
import {IAnimationTabState} from "./Sidebar";

export interface IRootState {
  animationTab: IAnimationTabState;
  iframe: IFrameState;
  animations: IAnimationClass[];
  router?: any;
}
