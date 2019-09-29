import Tabs from "antd/lib/tabs";
import React, {Fragment} from "react";
import { IAnimationState, ISnapshot } from "../models/Animation";
import { IFrameComponent } from "../models/IFrame";
import { IPreviewProps } from "../models/Preview";
import  { IUserView, IUserViewType } from "../models/User";
const { TabPane } = Tabs;

// state should be just drag and drop UI change ?
export default class IFrame extends React.Component<IPreviewProps, any> {
  constructor(props: IPreviewProps) {
    super(props);
    this.state = {
    };
  }
  public handleSnapshotTabChange = (key: string) => {
    if (this.props.iframeState.selected &&  this.props.iframeState.selected.animation) {
      const animationId = this.props.iframeState.selected.animation;
      const view: IUserView = {
        type: IUserViewType.SNAPSHOT,
        details: {
          animationId,
          timeline: parseInt(key, 10),
        },
      };
      this.props.handleUserViewChange({view});
    }
  }
  public render() {
    const { iframeState, toggleComponentSelect } = this.props;
    const { selected } = iframeState;
    const animationState: IAnimationState = this.props.animationState;
    let currSnapshots: ISnapshot[] = [];
    if (selected) {
      const animation = selected.animation;
      const currAnimation = animation ? animationState[animation] : undefined;
      currSnapshots = currAnimation ? currAnimation.snapshots : currSnapshots;
  }
    return (
      <Fragment>
      <Tabs onChange={this.handleSnapshotTabChange}>
      <TabPane tab="initial" key="initial">
      { iframeState.components.map(
        (child: IFrameComponent) => {
          const childWIthProps = React.cloneElement(child.component as React.ReactElement, {
              ...child.props, key: child.id, id: child.id,
            });
          return (
            <a
            className="preview--element"
            key={child.id}
            onClick={() => toggleComponentSelect({componentId: child.id})}
            >
            {childWIthProps}
            </a>
          );
        })
      }
      </TabPane>
      {  currSnapshots.map(
        (snapshot: ISnapshot) => {
          let selectedWithProps;
          if (selected) {
            selectedWithProps = React.cloneElement(selected.component as React.ReactElement, {
                ...selected.props, ...snapshot.props.all, key: selected.id, id: selected.id,
              });
          }
          return (
            <TabPane tab={snapshot.timeline + "%"} key={snapshot.timeline.toString()}>
            {selectedWithProps}
            </TabPane>
        ); },
      )}
        <TabPane tab="+" key="addSnapshot">
        </TabPane>
      </Tabs>
      </Fragment>
    );
  }
}
