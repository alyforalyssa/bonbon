import React from "react";
import Features from "../components/features";
// import Sidebar from "../components/sidebar";
import Hero from "../components/hero";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {

    return (
      <div className="container">
      <Hero />
      <Features />
      </div>
    );
  }
}
