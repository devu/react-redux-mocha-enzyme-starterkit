/* eslint no-console:0 */
import React from 'react';
import { mount } from "enzyme";
import Dashboard from './Dashboard'
// import Header from '../../Header'

describe("<Dashboard />", () => {
  let component;

  beforeEach(() => {
    component = mount(<Dashboard />);
  })

  it("should render <Dashboard />", () => {
    expect(component.exists()).toEqual(true);
    expect(component.find('.dashboard').exists()).toEqual(true);
  });

  it.skip("should render child components", () => {
    component.update()
    console.log(component.debug())
  });

})