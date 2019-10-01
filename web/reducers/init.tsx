import React from "react";
import { IFrameComponent, IFrameState } from "../models/IFrame";

const Basic = (props: any) => {
  const { className, ...style } = props;
  return (
    <div className={className || ""} style={style}></div>
  );
};
const data: IFrameComponent = {
  id: "mock",
  component: <Basic />,
  props: {
      width: "200px",
      height: "200px",
      background: "#0693E3",
      opacity: 0.9,
  },
  propsDetails: [
    {
      id: "width",
      default: "200px",
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
      id: "height",
      default: "200px",
      handleFormat: (state: any) => {
        const { height } = state;
        return {height: `${height.toString()}px`};
      },
      type: {
        id: "height",
        kind: "slider",
        label: "height",
        placeholder: 400,
        minValue: 1,
        maxValue: 2400,
        formatter: (value) => {
          return `${value}px`;
        },
      },
    },
    {
      id: "opacity",
      default: "0.9",
      handleFormat: (state: any) => {
        const { opacity } = state;
        return {opacity: `${opacity.toString()}`};
      },
      type: {
        id: "opacity",
        kind: "slider",
        label: "opacity",
        placeholder: 0.9,
        minValue: 0.000001,
        maxValue: 1,
        formatter: (value) => {
          return `${value}`;
        },
      },
    },
    {
      id: "rotate",
      default: "0deg",
      handleFormat: (state: any) => {
        const { rotate } = state;
        return {rotate: `${rotate.toString()}deg`};
      },
      type: {
        id: "rotate",
        kind: "slider",
        label: "rotate",
        placeholder: 0,
        minValue: 0,
        maxValue: 360,
        formatter: (value) => {
          return `${value}deg`;
        },
      },
    },
    {
      id: "background",
      default: "#0693E3",
      handleFormat: (state: any) => {
        return state;
      },
      type: {
        id: "background",
        kind: "colorPicker",
        label: "background",
        defaultColor:  "#0693E3",
      },
    },
  ],
};

export const iframeReducerInit: () => IFrameState = () => ({
  components: [data],
  selected: data,
});
