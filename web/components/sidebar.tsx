import Tabs from "antd/lib/tabs";
import React from "react";
// import ComponentTab from "./component_tab";
import PropsTab from "./props_tab";
const { TabPane } = Tabs;
import { ISidebarProps } from "../models/Sidebar";
import Advancedbar from "./advancedbar";

const Sidebar = (props: ISidebarProps) => {
  return (
    <div className="sidebar">
      <Tabs type="card">
        <TabPane tab="Style" key="1">
        <div className="sidebar__tab">
        <PropsTab {...props}/>
        </div>
        </TabPane>
        <TabPane tab="Animation" key="animation">
          <Advancedbar {...props} />
        </TabPane>
        {/* <TabPane tab="Components" key="2">
          <ComponentTab {...props} />
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default Sidebar;
