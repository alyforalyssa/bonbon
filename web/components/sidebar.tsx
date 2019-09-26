import Tabs from "antd/lib/tabs";
import React from "react";
import ComponentTab from "./component_tab";
import PropsTab from "./props_tab";
const { TabPane } = Tabs;
import { ISidebarProps } from "../models/Sidebar";

const Sidebar = (props: ISidebarProps) => {
  return (
    <div className="sidebar">
      <Tabs type="card">
        <TabPane tab="Style" key="1">
        <div className="sidebar__tab">
        <PropsTab iframeProps={props.iframeProps} iframeActions={props.iframeActions} />
        </div>
        </TabPane>
        <TabPane tab="Components" key="2">
          <ComponentTab iframeProps={props.iframeProps} iframeActions={props.iframeActions} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Sidebar;
