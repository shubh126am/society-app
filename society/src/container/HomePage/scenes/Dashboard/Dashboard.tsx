import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

class Dashboard extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Cards />
      </div>
    );
  }
}

export default Dashboard;
