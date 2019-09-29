import {IAnimationState} from "./Animation";
import {IFrameState} from "./IFrame";
import {IAnimationTabState} from "./Sidebar";
import {IUserState} from "./User";

export interface IRootState {
  animationTab: IAnimationTabState;
  iframe: IFrameState;
  animations: IAnimationState;
  user: IUserState;
  router?: any;
}
