import { IAnimationState } from "./Animation";
import { IFrameState } from "./IFrame";

export interface IPreviewProps extends IPreviewStateProps, IPreviewActionsProps {}
export interface IPreviewStateProps {
  iframeState: IFrameState;
  animationState: IAnimationState;
}
export interface IPreviewActionsProps {
  toggleComponentSelect: any;
  handleUserViewChange: any;
}
