import React from "react";
// import { RouteComponentProps } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App } from "./view/app";
import { Workspace } from "./view/workspace";

// const Error = () => (
//   <div>
//      <h1>404 Page Not Found</h1>
//      <p>Contact us at <a href="mailto:hello@meetmiy.com">hello@meetmiy.com</a></p>
//   </div>
// );

// const PrivateRoute = (props: any) => {
//   const { component, ...rest } = props;
//   return (
//     <Route {...rest} render={(props) => {
//       const componentWithProps = React.cloneElement(component, {...props, auth});
//       return (
//         <Fragment>
//         { auth.isAuthenticated() === true
//           ? componentWithProps
//           : (<Redirect to={{
//               pathname: "/login",
//               state: { from: props.location },
//             }} />)
//         }
//         </Fragment>
//       );
//     }} />
// ); };

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <App />} />
        <Route path="/dashboard" exact component={() => <Workspace />} />
      </Switch>
    </Router>
  );
};

export default Routes;
