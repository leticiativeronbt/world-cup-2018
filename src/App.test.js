import { shallow, mount, render } from 'enzyme';
import App from './App';
import React from 'react';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<App/>);
  });

  it('renders something', () => {
    expect(component.find('#app').exists()).toBe(true)
  });
});

