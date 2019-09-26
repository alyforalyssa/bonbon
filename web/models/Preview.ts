import { IFrameState } from "./IFrame";

export interface IPreviewProps extends IPreviewStateProps, IPreviewActionsProps {}
export interface IPreviewStateProps {
  iframeState: IFrameState;
}
export interface IPreviewActionsProps {
  toggleComponentSelect: any;
}
