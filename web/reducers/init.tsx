import React from "react";
import { IFrameComponent, IFrameState } from "../models/IFrame";

const Basic = (props: any) => {
  const { width, height, background, opacity, className } = props;
  return (
    <div className={className || ""} style={{
      width, height, background, opacity,
    }}></div>
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

export const iframeReducerInit: () => IFrameState = () => ({
  components: [data],
  selected: data,
});
