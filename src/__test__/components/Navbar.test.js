import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../../components/Navbar";

const props = {
  user: {
    first_name: "",
    last_name: ""
  },
  onLogOut: () => {},
  notifications: 1,
  collapsed: true
};

describe("", () => {
  it("it should render without erros", () => {
    const component = shallow(<Navbar {...props} />);
  });
});
