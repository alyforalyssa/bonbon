import IFrame from "../components/iframe";
import Sidebar from "../components/sidebar";

import Col from "antd/lib/col";
import Row from "antd/lib/row";
import React from "react";
import { connect } from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { ianimationActionCreators } from "../actions/animation";
import { iframeActionCreators } from "../actions/iframe";
import { userActionCreators } from "../actions/user";
import { IRootState } from "../models/Root";

// workspace model refine state into sidebar, iframe.etc.
const mapStateToProps:
(state: IRootState) => any =
  (state) => {
    const { iframe, animations, user } = state;
    return {
      iframeProps: { iframeState: iframe, animationState: animations },
      advancedbarProps: {
        iframeState: iframe,
        animationState: animations,
        userView: user.view,
      },
      sidebarProps: {
        iframeState: iframe,
        animationState: animations,
        userView: user.view,
      },
    };
};

const mapActionDispatchToProps:
  (dispatch: Dispatch) => any =
    (dispatch) => {
      const iframeActions =  bindActionCreators(iframeActionCreators, dispatch);
      const animationActions = bindActionCreators(ianimationActionCreators, dispatch);
      const userActions = bindActionCreators(userActionCreators, dispatch);
      return {
        sidebarActions: { iframeActions, animationActions },
        advancedbarActions: { iframeActions, animationActions },
        iframeActions: {
          addOrEditSnapshot: animationActions.createOrEditSnapshot,
          toggleComponentSelect: iframeActions.toggleComponentSelect,
          handleUserViewChange:  userActions.handleUserViewChange,
        },
      };
    };

// workspace props model
const WorkspaceWithProps = (props: any) => {
  const sidebarProps = {...props.sidebarProps, ...props.sidebarActions};
  const iframeProps = { ...props.iframeProps, ...props.iframeActions };
  return (
    <Row gutter={16} style={{margin: "auto", padding: "0 128px"}}>
    <Col span={6}>
      <Sidebar {...sidebarProps} />
    </Col>
    <Col span={18}>
      <IFrame {...iframeProps} />
      </Col>
    </Row>
  );
};

export const Workspace = connect(mapStateToProps, mapActionDispatchToProps)(WorkspaceWithProps);
