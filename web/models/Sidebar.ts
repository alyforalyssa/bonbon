// import { AnimationActions } from "../actions/sidebar";
import { Keyframes} from "../styledComponents";
import { IAnimationState } from "./Animation";
import { IFrameState } from "./IFrame";
import { IUserView } from "./User";

export interface AnimationClass {
  id: number;
  name: string;
  displayName: string;
  keyframesRule: Keyframes | string;
}

export interface AnimationRules {
  animationName: string; // search in this.state.animations
  animationDuration: string;
  animationTimingFunction: string;
  animationIterationCount: string;
}
export interface IAnimationTabState {
  animations: AnimationClass[];
}

export interface IAdvancedbarProps extends IAdvancedbarStateProps, IAdvancedbarActionProps {}
export interface IAdvancedbarStateProps {
  iframeState: IFrameState;
  userView: IUserView;
  animationState: IAnimationState;
}
export interface IAdvancedbarActionProps {
  iframeActions: any;
  animationActions: any;
}

export interface ISidebarProps extends ISidebarStateProps, ISidebarActionProps {}
export interface ISidebarStateProps {
  iframeState: IFrameState;
  userView: IUserView;
  animationState: IAnimationState;
}
export interface ISidebarActionProps {
  iframeActions: any;
  animationActions: any;
}

// answer mom
// answer kevin
