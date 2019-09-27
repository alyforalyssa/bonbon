import { IAnimationClass } from "./Animation";
import { IFrameState } from "./IFrame";

export interface IPreviewProps extends IPreviewStateProps, IPreviewActionsProps {}
export interface IPreviewStateProps {
  iframeState: IFrameState;
  animationState: IAnimationClass[];
}
export interface IPreviewActionsProps {
  toggleComponentSelect: any;
}
