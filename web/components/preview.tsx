import Tabs from "antd/lib/tabs";
import React, {Fragment} from "react";
import { IAnimationClass, ISnapshot } from "../models/Animation";
import { IFrameComponent } from "../models/IFrame";
import { IPreviewProps } from "../models/Preview";
const { TabPane } = Tabs;

// state should be just drag and drop UI change ?
export default class Preview extends React.Component<IPreviewProps, any> {
  constructor(props: IPreviewProps) {
    super(props);
    this.state = {
    };
  }
  public render() {
    const { iframeState, toggleComponentSelect, animationState } = this.props;
    let currSnapshots: ISnapshot[] = [];
    if (iframeState.selected) {
      const currAnimation = animationState.find((animationClass: IAnimationClass) => {
        const animation = iframeState.selected ? iframeState.selected.animation : undefined;
        return animationClass.id === animation;
    });
      currSnapshots = currAnimation ? currAnimation.snapshots : currSnapshots;
      console.log(currSnapshots);
  }
    return (
      <Fragment>
      <Tabs>
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
      { currSnapshots.map(
        (snapshot: ISnapshot) => {
          return (
            <TabPane tab={snapshot.timeline + "%"} key={snapshot.timeline.toString()}>
            {iframeState.components.map((child: IFrameComponent) => {
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
            })}
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
