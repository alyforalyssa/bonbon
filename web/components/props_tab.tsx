import React, {Fragment} from "react";
import { IFrameProps  } from "../models/IFrame";
import { ISidebarProps  } from "../models/Sidebar";
import { IUserViewType } from "../models/User";
import { IFramePropsInputContent } from "./iframe_props";

//
// return (
//   <div id="props--tab">
//     {iframeState.selected
//       && iframeState.selected.propsDetails
//       && iframeState.selected.propsDetails.map(
//       (propDetail: IFrameProps) => {
//         return (
//           <IFramePropsInputContent input={propDetail.type} handleChange={(state) => {
//             if (iframeState.selected) {
//               const newProps = propDetail.handleFormat(state);
//               iframeActions.addOrEditComponentProps(
//                 {componentId: iframeState.selected.id, props: newProps},
//               );
//             }
//           }}/>
//         );
//       },
//     )}
//     {!iframeState.selected && (
//       <p>Select an element to edit its style</p>
//     )}
//   </div>
// );

const PropsTab = (props: ISidebarProps) => {
  const { userView, animationState, animationActions } = props;
  switch (userView.type) {
    case IUserViewType.COMPOSITION:
      return (
        <div className="sidebar">
            <div className="sidebar__tab">
            Composition
            </div>
        </div>
      );
    case IUserViewType.SNAPSHOT:
    const { details } = userView;

    if (details) {
      const { animationId, timeline } = details;
      const animation = animationState[animationId];
      const snapshot = animation.snapshots.find((data) => (data.timeline === timeline));
      return (
        <div>
          { snapshot && snapshot.props && snapshot.props.details ? (
            <Fragment>
            {snapshot.props.details.map(
              (propDetail: IFrameProps) => {
                return (
                  <IFramePropsInputContent input={propDetail.type} handleChange={(state) => {
                      const newProps = propDetail.handleFormat(state);
                      const newSnapshot = {
                        ...snapshot,
                        props: {
                          ...snapshot.props,
                          all: {
                            ...snapshot.props.all,
                            ...newProps,
                          },
                        },
                      };
                      animationActions.createOrEditSnapshot({animationId, snapshot: newSnapshot});
                      // animationActions.createOrEditSnapshot({animationId, })
                  }}/>
                );
              },
            )}
            </Fragment>
          ) : (<div/>)
          }
        </div>
      );
    } else {
      return (
        <div>Hello</div>
      );
    }
  }
};
export default PropsTab;
