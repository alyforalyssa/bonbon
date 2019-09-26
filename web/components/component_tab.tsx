import Button from "antd/lib/button";
import React from "react";
import { IFrameComponent, IFrameState } from "../models/IFrame";
import { ISidebarProps } from "../models/Sidebar";

const Mock = (props: any) => (
  <div style={{background: "#FFF", width: props.width, height: "400px"}}>{props.text || "hello frend"}</div>
);
const data: IFrameComponent = {
  id: "mock",
  component: <Mock />,
  props: {
    text: "hello best frend",
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
  Pick<ISidebarProps, "iframeProps" | "iframeActions">, IFrameState
> {
  constructor(props: Pick<ISidebarProps, "iframeProps" | "iframeActions">) {
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
