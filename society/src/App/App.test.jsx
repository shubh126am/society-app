import React from "react"
import { shallow } from "enzyme"
import App from "./App"
import { Router, Route } from "react-router-dom"
describe('App Component', () => {
  const component = shallow(<App />)
  it("Renders the Component", () => {
    expect(component.find(Router).length).toBe(1);
  })
  it("Must Contains one Route or More", () => {
    expect(component.find(Route).length).toBe(1)
  })
})
