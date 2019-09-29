import Button from "antd/lib/button";
import Tabs from "antd/lib/tabs";
import React from "react";
const { TabPane } = Tabs;
import { IAnimationClass, IAnimationSettings } from "../models/Animation";
import { IFrameComponent } from "../models/IFrame";
import { IAdvancedbarProps } from "../models/Sidebar";
import { IUserViewType } from "../models/User";
const uuidv4 = require("uuid/v4");

const animationClassInit: (
  settings: Partial<IAnimationSettings>, name: string, iframe: IFrameComponent,
) => IAnimationClass = (settings, name, iframe) => {
  const id = name + "_" + uuidv4();
  const { animationDuration, animationTimingFunction, animationIterationCount } = settings;
  const { propsDetails } = iframe;
  return {
    id,
    rule: {
      animationName: id,
      animationDuration:  animationDuration || "3s",
      animationTimingFunction: animationTimingFunction || "ease",
      animationIterationCount: animationIterationCount || "infinite",
    },
    snapshots: [
      {
        time: "0s",
        timeline: 0,
        props: {
          all: iframe.props,
          details: propsDetails,
        },
      },
      {
        time: animationDuration || "3s",
        timeline: 100,
        props: {
          all: iframe.props,
          details: propsDetails,
        },
      },
    ],
  };
};

const Advancedbar = (props: IAdvancedbarProps) => {
  const { iframeState, animationActions, iframeActions, userView } = props;
  const handleCreateAnimation = (iframe: IFrameComponent) => {
    const init = animationClassInit({}, "my-animation", iframe);
    animationActions.createOrEditAnimation(init);
    iframeActions.connectAnimationToComponent({componentId: iframe.id, animationId: init.id});
  };
  switch (userView.type) {
    case IUserViewType.COMPOSITION:
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
                  if (iframeState.selected) {handleCreateAnimation(iframeState.selected); }
                }}
                type={"primary"}>Add animation</Button>
              )}
            </div>
            </TabPane>
          </Tabs>
        </div>
      );
    case IUserViewType.SNAPSHOT:
      return (
        <div>Hello</div>
      );
  }
};

export default Advancedbar;

// create animation with init snapshots
// connect animation to selected element
// generate a keyframes object from snapshots
// use the keyframes object to make a css animation
