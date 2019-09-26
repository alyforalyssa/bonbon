import Tabs from "antd/lib/tabs";
import React from "react";
const { TabPane } = Tabs;
import { IAdvancedbarProps } from "../models/Sidebar";

const Advancedbar = (props: IAdvancedbarProps) => {
  console.log(props);
  return (
    <div className="sidebar">
      <Tabs type="card">
        <TabPane tab="Animation" key="animation">
        <div className="sidebar__tab">
        <div />
        </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Advancedbar;
