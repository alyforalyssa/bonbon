import React, {Fragment} from "react";
import { IFrameComponent } from "../models/IFrame";
import { IPreviewProps } from "../models/Preview";

// state should be just drag and drop UI change ?
export default class Preview extends React.Component<IPreviewProps, any> {
  constructor(props: IPreviewProps) {
    super(props);
    this.state = {
    };
  }
  public render() {
    const { iframeState, toggleComponentSelect } = this.props;
    return (
      <Fragment>
      <h1 className="title center">Add components </h1>
      <div id="preview">
      {iframeState.components.map((child: IFrameComponent) => {
        const childWIthProps = React.cloneElement(child.component as React.ReactElement, {
            ...child.props, key: child.id, id: child.id,
          });
        return (
          <a
          className="preview--element"
          key={child.id}
          onClick={() => toggleComponentSelect({componentId: child.id})}
          >
          {childWIthProps}
          </a>
        );
      })}
      </div>
      </Fragment>
    );
  }
}
