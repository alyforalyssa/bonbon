import React from "react";
import { IFrameProps } from "../models/IFrame";
import { ISidebarProps } from "../models/Sidebar";
import { IFramePropsInputContent } from "./iframe_props";
// import { IFrameComponent, IFrameState } from "../models/IFrame";

// export default class PropsTab extends React.Component<
//   any, any
// > {
//   constructor(props: any) {
//     super(props);
//   }
//   public render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

const PropsTab = (props: Pick<ISidebarProps, "iframeProps" | "iframeActions">) => {
  const { iframeProps, iframeActions } = props;
  return (
    <div id="props--tab">
      {iframeProps.selected
        && iframeProps.selected.propsDetails
        && iframeProps.selected.propsDetails.map(
        (propDetail: IFrameProps) => {
          return (
            <IFramePropsInputContent input={propDetail.type} handleChange={(state) => {
              if (iframeProps.selected) {
                const newProps = propDetail.handleFormat(state);
                iframeActions.addOrEditComponentProps(
                  {componentId: iframeProps.selected.id, props: newProps},
                );
              }
            }}/>
          );
        },
      )}
      {!iframeProps.selected && (
        <p>Select an element to edit its style</p>
      )}
    </div>
  );
};
export default PropsTab;
