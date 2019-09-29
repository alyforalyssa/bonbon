// timeline 0% - 100%
import { IProps } from "./IFrame";

// iprops: props at exactly x snapshot time for y component
export interface ISnapshot {
  time: string;
  timeline: number;
  props: IProps;
}
export interface IAnimationClass {
  id: string;
  rule: IAnimationSettings;
  snapshots: ISnapshot[];
}
export interface IAnimationState {
  [key: string]: IAnimationClass;
}
export interface IAnimationSettings {
  animationName: string; // search in this.state.animations
  animationDuration: string;
  animationTimingFunction: string;
  animationIterationCount: string;
}

export interface IAnimationActionCreateOrEditSnapshot {
  animationId: string;
  snapshot: ISnapshot;
}
