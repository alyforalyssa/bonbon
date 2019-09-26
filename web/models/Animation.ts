// timeline 0% - 100%
import { IProps } from "./IFrame";

// iprops: props at exactly x snapshot time for y component
export interface ISnapshot {
  time: string;
  timeline: number;
  props: IProps[];
}
export interface IAnimationClass {
  id: number;
  rule: IAnimationSettings;
  snapshots: ISnapshot[];
}

export interface IAnimationSettings {
  animationName: string; // search in this.state.animations
  animationDuration: string;
  animationTimingFunction: string;
  animationIterationCount: string;
}
