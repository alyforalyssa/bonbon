export interface IUserState {
  view: IUserView;
}

export interface IUserActionChangeView {
  view: IUserView;
}
export enum IUserViewType {
  COMPOSITION = "COMPOSITION",
  SNAPSHOT = "SNAPSHOT",
}
// selected snapshot, timeline is the id of snapshot
export interface IUserViewSnapshotDetails {
  animationId: string;
  timeline: number;
}
export interface IUserView {
  type: IUserViewType;
  details?: IUserViewSnapshotDetails;
}

// animationtab: when user view = snapshot show details & props to edit,
// else in composition mode show select elem to start animating,
// or existing animation for x component
