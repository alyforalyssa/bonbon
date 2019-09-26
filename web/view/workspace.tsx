import Advancedbar from "../components/advancedbar";
import Preview from "../components/preview";
import Sidebar from "../components/sidebar";

import Col from "antd/lib/col";
import Row from "antd/lib/row";
import React from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { iframeActionCreators } from "../actions/iframe";
import { animationActionCreators } from "../actions/sidebar";
import { IRootState } from "../models/Root";

// workspace model refine state into sidebar, preview.etc.
const mapStateToProps:
(state: IRootState) => any =
  (state) => {
    const { animationTab, iframe } = state;
    return {
      previewProps: { iframeState: iframe },
      sidebarProps: { iframeProps: iframe },
      advancedbarProps: {animationTabProps: animationTab },
    };
};

const mapActionDispatchToProps:
  (dispatch: Dispatch) => any =
    (dispatch) => {
      const animationTabActions = bindActionCreators(animationActionCreators, dispatch);
      const iframeActions =  bindActionCreators(iframeActionCreators, dispatch);
      return {
        sidebarActions: { animationTabActions, iframeActions },
        advancedbarActions: { animationTabActions },
      };
    };

// workspace props model
const WorkspaceWithProps = (props: any) => {
  const sidebarProps = {...props.sidebarProps, ...props.sidebarActions};
  const previewProps = {
    ...props.previewProps,
    toggleComponentSelect: props.sidebarActions.iframeActions.toggleComponentSelect,
  };
  const advancedbarProps = {...props.advancedbarProps, ...props.advancedbarActions};
  return (
    <Row gutter={16}>
    <Col span={4}>
      <Sidebar {...sidebarProps} />
    </Col>
    <Col span={16}>
      <Preview {...previewProps} />
      </Col>
      <Col span={4}>
      <Advancedbar {...advancedbarProps}/>
      </Col>
    </Row>
  );
};

export const Workspace = connect(mapStateToProps, mapActionDispatchToProps)(WorkspaceWithProps);
