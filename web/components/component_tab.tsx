import Button from "antd/lib/button";
import React from "react";
import { IFrameComponent, IFrameState } from "../models/IFrame";
import { IAdvancedbarProps } from "../models/Sidebar";

const Basic = (props: any) => {
  const { width, height, background, opacity, className } = props;
  return (
    <div className={className || ""} style={{
      width, height, background, opacity,
    }}/>
  );
};
const data: IFrameComponent = {
  id: "mock",
  component: <Basic />,
  props: {
      width: "400px",
      height: "400px",
      background: "#000",
      opacity: 0.5,
  },
  propsDetails: [
    {
      id: "width",
      default: "400px",
      handleFormat: (state: any) => {
        const { width } = state;
        return {width: `${width.toString()}px`};
      },
      type: {
        id: "width",
        kind: "slider",
        label: "width",
        placeholder: 400,
        minValue: 1,
        maxValue: 2400,
        formatter: (value) => {
          return `${value}px`;
        },
      },
    },
    {
      id: "background",
      default: "#000",
      handleFormat: (state: any) => {
        return state;
      },
      type: {
        id: "background",
        kind: "colorPicker",
        label: "background",
        defaultColor: "#000",
      },
    },
  ],
};
export default class ComponentTab extends React.Component<
  IAdvancedbarProps, IFrameState
> {
  constructor(props: IAdvancedbarProps) {
    super(props);
    this.init();
  }
  public init = () => {
    this.state = { components: [] };
  }
  public render() {
    const { iframeActions } = this.props;
    return (
      <div>
      <Button onClick={() => iframeActions.createComponent({component: data})}>add component</Button>
      </div>
    );
  }
}
