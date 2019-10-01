import Button from "antd/lib/button";
import React, {Fragment, useState} from "react";
import { IAnimationClass, IAnimationSettings } from "../models/Animation";
import { IFrameComponent, IFrameProps } from "../models/IFrame";
import { IAdvancedbarProps } from "../models/Sidebar";
import { IUserViewType } from "../models/User";
import { IFramePropsInputContent } from "./iframe_props";
import {  ModalForm } from "./utils";
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

// @TODO pass default value from state.selected.animation's settings
const customAnimationClassInputData: IFrameProps[] = [
  {
    id: "animationDuration",
    handleFormat: (state) => {
      const { animationDuration } = state;
      return {animationDuration: `${animationDuration}s`};
    },
    type: {
        id: "animationDuration",
        kind: "slider",
        label: "Animation Duration",
        placeholder: 3,
        minValue: 0.01,
        maxValue: 30,
        formatter: (value) => (`${value}s`),
      },
  },
  {
    id: "animationTimingFunction",
    handleFormat: (state) => (state),
    type: {
        id: "animationTimingFunction",
        kind: "select",
        label: "Animation Timing Function",
        defaultValue: "ease",
        values: ["ease", "ease-in", "ease-out", "ease-in-out", "linear"],
      },
  },
];
const AnimationClassInputForm = (props: any) => {
  return (
    <Fragment>{customAnimationClassInputData.map((data: IFrameProps) => (
      <IFramePropsInputContent
        key={data.id}
        input={data.type}
        handleChange={(state) => {
          const newState = data.handleFormat(state);
          props.handleChange(newState);
        }}/>
    ))}</Fragment>
  );
};

const Advancedbar = (props: IAdvancedbarProps) => {
  const defaultAnimationName = "my_animation";
  const [customAnimationModalVisible, setustomAnimationModalVisible] = useState<boolean>(false);
  const { iframeState, animationActions, iframeActions, userView, animationState } = props;
  const { selected } = iframeState;
  if (selected) {
    // handleCreateCustomAnimation(iframeState.selected);
    const animation: IAnimationClass =
    selected.animation ? animationState[selected.animation] :
    animationClassInit({}, defaultAnimationName, selected);

    const handleCustomAnimationRulesChange = (state: IAnimationSettings) => {
      const mergedAnimationClass = {...animation, rule: {...animation.rule, ...state}};
      animationActions.createOrEditAnimation(mergedAnimationClass);
      if (!selected.animation) {
        iframeActions.connectAnimationToComponent({componentId: selected.id, animationId: mergedAnimationClass.id});
      }
    };

    switch (userView.type) {
      case IUserViewType.COMPOSITION:
        return (
              <div className="sidebar__tab">
              {selected.animation === undefined && (
                  <Button
                  onClick={() => { if (iframeState.selected) { setustomAnimationModalVisible(true); }}}
                  type={"primary"}>Add custom animation</Button>
                )}
                <ModalForm
                title={"New custom animation"}
                submitTitle={"Create animation"}
                visible={customAnimationModalVisible}
                handleCancel={() => setustomAnimationModalVisible(false)}
                handleOk={() => setustomAnimationModalVisible(false)}
                >
                <AnimationClassInputForm handleChange={(state: any) => {
                  const mergedRules = {...animation.rule, ...state};
                  handleCustomAnimationRulesChange(mergedRules);
                }}/>
                </ModalForm>
              </div>
        );
      case IUserViewType.SNAPSHOT:
        return (
          <AnimationClassInputForm handleChange={(state: any) => {
            const mergedRules = {...animation.rule, ...state};
            handleCustomAnimationRulesChange(mergedRules);
          }}/>
        );
    }
  }
  return (
      <p>Select an element to add animation</p>
    );

};

export default Advancedbar;

// create animation with init snapshots
// connect animation to selected element
// generate a keyframes object from snapshots
// use the keyframes object to make a css animation
