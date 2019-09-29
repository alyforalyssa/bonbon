import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAnimationClass, IAnimationSettings, ISnapshot } from "../models/Animation";
import { IFrameComponent } from "../models/IFrame";
// import {bindActionCreators, Dispatch} from "redux";
import { IRootState } from "../models/Root";
import styled, { css, keyframes, Keyframes, StyledComponent } from "../styledComponents";

const AnimatedElement = styled(
    ({ component, animation, props, ...styledProps }) => {
      const el = React.cloneElement(component, {
        ...props,
        ...styledProps,
      });
      return el;
    },
)`
  ${(props) => {
    return props.animation;
  }}
`;

const generateAnimation = (settings: IAnimationSettings, keyframe: Keyframes) => {
  const {
    animationDuration,
    animationTimingFunction,
    animationIterationCount,
  } = settings;

  const style = css`
    animation-name: ${keyframe};
    animation-duration: ${animationDuration};
    animation-timing-function: ${animationTimingFunction};
    animation-iteration-count: ${animationIterationCount};
  `;
  return style;
};

const generateKeyframes: (snapshots: ISnapshot[]) => Keyframes = (snapshots) => {
  let generatedKeyframes: string = "";
  snapshots.forEach(
    (snapshot: ISnapshot) => {
      let generatedKeyframe: string = `${snapshot.timeline}% {`;
      const { all } = snapshot.props;
      if (all) {
        Object.keys(all).forEach((prop: string) => {
          generatedKeyframe += ` ${prop}: ${all[prop]}`;
        });
      }
      generatedKeyframe += "}";
      generatedKeyframes += generatedKeyframe;
    },
  );
  return keyframes`${generatedKeyframes}`;
};

const mapStateToProps: (state: IRootState) => any = (state) => {
  const { iframe, animations } = state;
  return {
    iframe,
    animations,
  };
};

// workspace props model
const PreviewWithProps = (props: any) => {
  const { animations, iframe } = props;
  const [ animatedComponents, setAnimatedComponents ] = useState<Array<React.ReactElement | StyledComponent>>([]);
  useEffect(() => {
    const customComponents: Array<React.ReactElement | StyledComponent> =
      Object.keys(animations).map((animationId: string) => {
          const animation: IAnimationClass = animations[animationId];
          const elem = iframe.components.find((data: IFrameComponent) => (data.animation === animationId));
          const customKeyframes = generateKeyframes(animation.snapshots);
          console.log(customKeyframes);
          const customStyle = generateAnimation(animation.rule, customKeyframes);
          return <AnimatedElement component={elem.component} animation={customStyle} props={elem.props}/>;
        },
      );
    setAnimatedComponents(customComponents);
    console.log(animatedComponents);
  }, [animations]);
  return (
    <div id="animtion--preview">
    {animatedComponents.map((elem) => (
      <Fragment>
      {elem}
      </Fragment>
    ))}
    </div>
  );
};

export const Preview = connect(mapStateToProps)(PreviewWithProps);
