// import { AnimationActions } from "../actions/sidebar";
import { Keyframes} from "../styledComponents";
import { IFrameState } from "./IFrame";

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
  animationTabProps: IAnimationTabState;
}
export interface IAdvancedbarActionProps {
  animationTabActions: any;
}

export interface ISidebarProps extends ISidebarStateProps, ISidebarActionProps {}
export interface ISidebarStateProps {
  animationTabProps: IAnimationTabState;
  iframeProps: IFrameState;
}
export interface ISidebarActionProps {
  iframeActions: any;
  animationTabActions: any;
}

// answer mom
// answer kevin
