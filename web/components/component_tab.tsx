import Button from "antd/lib/button";
import React from "react";
import { IFrameComponent, IFrameState } from "../models/IFrame";
import { IAdvancedbarProps } from "../models/Sidebar";

const Mock = (props: any) => (
  <div className={props.className || ""} style={{background: "#FFF", width: props.width, height: "400px"}}>Boo</div>
);
const data: IFrameComponent = {
  id: "mock",
  component: <Mock />,
  props: {
    width: "400px",
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
        kind: "number",
        label: "width",
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
