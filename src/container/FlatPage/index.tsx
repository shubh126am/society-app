import React, { Component } from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import ViewPage from "./scenes/ViewPage";
import AddPage from "./scenes/AddPage";

export interface Props extends RouteComponentProps {}

class Flat extends Component<Props> {
  render() {
    const { match } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Switch>
          <Route exact path={`${match.url}`} component={ViewPage} />
          <Route path={`${match.url}/add`} component={AddPage} />
        </Switch>
      </div>
    );
  }
}

export default Flat;
