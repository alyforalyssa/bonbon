import Button from "antd/lib/button";
import Tabs from "antd/lib/tabs";
import React from "react";
const { TabPane } = Tabs;
import { IAnimationClass } from "../models/Animation";
import { IAdvancedbarProps } from "../models/Sidebar";

const animationClassInit: (id: number) => IAnimationClass = (id) => {
  return {
    id,
    rule: {
      animationName: id.toString(),
      animationDuration: "3s",
      animationTimingFunction: "ease",
      animationIterationCount: "1",
    },
    snapshots: [
      {
        time: "0s",
        timeline: 0,
        props: [],
      },
      {
        time: "3s",
        timeline: 100,
        props: [],
      },
    ],
  };
};

const Advancedbar = (props: IAdvancedbarProps) => {
  const { iframeState, animationActions, animationState, iframeActions } = props;
  const handleCreateAnimation = (componentId: string) => {
    const init = animationClassInit(animationState.length);
    animationActions.createOrEditAnimation(init);
    iframeActions.connectAnimationToComponent({componentId, animationId: init.id});
  };
  return (
    <div className="sidebar">
      <Tabs type="card">
        <TabPane tab="Animation" key="animation">
        <div className="sidebar__tab">
        {!iframeState.selected && (
            <p>Select an element to start animating</p>
          )}
        {iframeState.selected && iframeState.selected.animation === undefined && (
            <Button
            onClick={() => {
              if (iframeState.selected) {handleCreateAnimation(iframeState.selected.id); }
            }}
            type={"primary"}>Add animation</Button>
          )}
        </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Advancedbar;

// create animation with init snapshots
// connect animation to selected element
// generate a keyframes object from snapshots
// use the keyframes object to make a css animation
