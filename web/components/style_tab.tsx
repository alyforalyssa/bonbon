// import { Keyframes } from "@types/styled-components";
import Button from "antd/lib/button";
// import * as CSS from "csstype";
import React, {Fragment} from "react";
// interface CSSProperties extends CSS.Properties, CSS.PropertiesHyphen {}
import { ISidebarProps } from "../models/Sidebar";
import styled, { css, keyframes, Keyframes, StyledComponent } from "../styledComponents";
interface AnimationClass {
  id: number;
  name: string;
  displayName: string;
  keyframesRule: Keyframes | string;
}
interface AnimationRules {
  animationName: string; // search in this.state.animations
  animationDuration: string;
  animationTimingFunction: string;
  animationIterationCount: string;
}
interface IStyleTabState {
  animations: AnimationClass[];
  elements: Array<React.ReactElement | StyledComponent>;
}

const CustomElement = styled(
    ({ component, style, ...props }) => React.cloneElement(component, props),
)`
  ${(props) => (props.style)}
`;

export default class StyleTab extends React.Component<ISidebarProps, IStyleTabState> {
  // public animationStyle: HTMLStyleElement | undefined;
  // public sheet: CSSStyleSheet | undefined;
  constructor(props: ISidebarProps) {
    super(props);
    console.log(this.props);
    // this.animationStyle = document.getElementById("animation") as HTMLStyleElement;
    // if (this.animationStyle) { this.sheet = this.animationStyle.sheet as CSSStyleSheet; }
    this.init();
  }
  public init = () => {
    const defaultAnimation = [
      {
        id: 1,
        name: "fade-out",
        displayName: "Fade Out",
        keyframesRule: `
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
        `,
      },
    ];
    const animations = defaultAnimation.map((animation: AnimationClass) => {
      const keyframesRule = keyframes`${animation.keyframesRule}`;
      return {
        ...animation,
        keyframesRule,
      };
    });
    this.state = { animations, elements: [] };
  }
  public addClass = (newAnimation: Pick<AnimationClass, "displayName" | "keyframesRule">) => {
    const animation: AnimationClass = {
      ...newAnimation,
      id: this.state.animations.length + 1,
      keyframesRule: keyframes`${newAnimation.keyframesRule}`,
      name: newAnimation.displayName.replace(/[^A-Za-z0-9_\.~]+/gm, ""),
      };
    this.setState({animations: [...this.state.animations, animation]});
  }

  public findAnimationObject = (animationName: string) => {
    const animationClass = this.state.animations.find((animation: AnimationClass) => {
      return animation.name === animationName;
    });
    if (animationClass) { return animationClass.keyframesRule; }
  }

  public makeCssAnimation = (props: AnimationRules) => {
    const {
      animationName,
      animationDuration,
      animationTimingFunction,
      animationIterationCount,
    } = props;

    const animation = this.findAnimationObject(animationName);
    if (animation) {
      return css`
        animation-name: ${animation};
        animation-duration: ${animationDuration};
        animation-timing-function: ${animationTimingFunction};
        animation-iteration-count: ${animationIterationCount};
      `;
    }
  }

  public addAnimationToClass = (
    animationRules: Partial<AnimationRules>, component: React.ReactElement,
  ) => {
    const defaultSettings: AnimationRules = {
      animationName: "fade-out",
      animationDuration: "3s",
      animationTimingFunction: "ease",
      animationIterationCount: "infinite",
    };
    const settings = animationRules ?
    {...defaultSettings, ...animationRules} : defaultSettings;
    const animationCss = this.makeCssAnimation(settings);
    console.log(animationCss);
    const StyledElement = <CustomElement component={component} style={animationCss}/>;
    console.log(StyledElement);
    this.setState({elements: [...this.state.elements, StyledElement]});
    return StyledElement;
  }

  public render() {

    return (
      <div>
      <Button
       type={"primary"}
       className="helloClass"
       block
       onClick={() => this.addClass({
         displayName: "fat",
         keyframesRule: `
           from {
             width: 10px;
           }
           to {
             width: 20px;
           }
         `,
       })}
       >
       New animation
       </Button>
       {this.state.animations.map((animation: AnimationClass) => {
         return (
           <a>{animation.name}</a>
         );
       })}
       <CustomElement
        component={<div style={{width: "50px", height: "50px"}}/>}
        />
        <Button
         type={"primary"}
         block
         onClick={() => this.addAnimationToClass({}, <div style={{width: "50px", height: "50px"}} />)}
         >
         Add Animation To Element
         </Button>
         {this.state.elements.length > 0 && this.state.elements.map((element) => (
           <Fragment>
           {element}
           </Fragment>
         ))}
      </div>
    );
  }

  // private async load() {
  //   const widgets = await new Api.WidgetsService().get();
  //   this.setState({ widgets });
  // }
}
