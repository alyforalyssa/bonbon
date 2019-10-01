import Button from "antd/lib/button";
import Tabs from "antd/lib/tabs";
import React, {Fragment} from "react";
import { IAnimationClass, IAnimationState, ISnapshot } from "../models/Animation";
import { IFrameComponent, IFramePropsInput } from "../models/IFrame";
import { IPreviewProps } from "../models/Preview";
import  { IUserView, IUserViewType } from "../models/User";
import { ModalForm, PreviewButton } from "./utils";
const { TabPane } = Tabs;
import { IFramePropsInputContent } from "./iframe_props";

const addSnapshotData: IFramePropsInput = {
  id: "snapshot",
  kind: "slider",
  label: "Choose the timeframe",
  minValue: 0,
  maxValue: 100,
  formatter: (value) => (`${value}%`),
};
// const AddSnapshotButton = (props: Pick<IFrameComponent, "animation">) => {
//   const { animation } = props;
//   return (
//     <Button type={"primary"}>
//     <IFramePropsInputContent input={addSnapshotData} handleChange={(state:any) => {
//
//     }}/>
//     </Button>
//   )
// }
// state should be just drag and drop UI change ?
export default class IFrame extends React.Component<IPreviewProps, any> {
  constructor(props: IPreviewProps) {
    super(props);
    this.state = {
      snapshotModalVisible: false,
      snapshot: undefined,
    };
  }
  public toggleSnapshotModal = () => this.setState({snapshotModalVisible: !this.state.snapshotModalVisible});
  public handleSnapshotTabChange = (key: string) => {
    if (this.props.iframeState.selected &&  this.props.iframeState.selected.animation) {
      const animationId = this.props.iframeState.selected.animation;
      const view: IUserView = {
        type: IUserViewType.SNAPSHOT,
        details: {
          animationId,
          timeline: parseInt(key, 10),
        },
      };
      this.props.handleUserViewChange({view});
    }
  }
  public handleCreateSnapshot = (animation: IAnimationClass, iframe: IFrameComponent) => {
    const { snapshot } = this.state;
    const props = {
      all: {...iframe.props},
      details: iframe.propsDetails,
    };
    const time = (snapshot / 100) * parseInt(animation.rule.animationDuration, 10);
    const newSnapshot = {
      timeline: snapshot,
      time,
      props,
    };
    this.props.addOrEditSnapshot({animationId: animation.id, snapshot: newSnapshot});
  }
  public render() {
    const { iframeState } = this.props;
    const { selected } = iframeState;
    const animationState: IAnimationState = this.props.animationState;
    let currSnapshots: ISnapshot[] = [];
    if (selected) {
      const animation = selected.animation;
      const currAnimation = animation ? animationState[animation] : undefined;
      currSnapshots = currAnimation ? currAnimation.snapshots : currSnapshots;
      return (
        <Fragment>
        <PreviewButton />
        <Tabs onChange={this.handleSnapshotTabChange} tabBarExtraContent={
          <Fragment>
          <Button type={"primary"} onClick={this.toggleSnapshotModal}>
          Add snapshot
          </Button>
          <ModalForm
          visible={this.state.snapshotModalVisible}
          handleOk={() => {
            if (currAnimation) {this.handleCreateSnapshot(currAnimation, selected); }
            this.toggleSnapshotModal();
          }}
          handleCancel={this.toggleSnapshotModal}>
            <IFramePropsInputContent input={addSnapshotData} handleChange={(state: any) => this.setState({...state})}/>
            </ModalForm>
          </Fragment>
        }>
        {  currSnapshots.map(
          (snapshot: ISnapshot) => {
            let selectedWithProps;
            if (selected) {
              selectedWithProps = React.cloneElement(selected.component as React.ReactElement, {
                  ...selected.props, ...snapshot.props.all, key: selected.id, id: selected.id,
                });
            }
            return (
              <TabPane tab={snapshot.timeline + "%"} key={snapshot.timeline.toString()}>
              {selectedWithProps}
              </TabPane>
          ); },
        )}
        </Tabs>

      {/*<TabPane tab="initial" key="initial">
      { iframeState.components.map(
        (child: IFrameComponent) => {
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
        })
      }
      </TabPane> */}
        </Fragment>
      );
    }
    return (
      <p>Select a component to continue</p>
    );
  }
}
