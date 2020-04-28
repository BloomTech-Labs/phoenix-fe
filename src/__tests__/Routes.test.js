import React from 'react';
import { shallow } from 'enzyme';
import Routes, { Dashboard, Calendar, EventPage,  } from '../components/Routes.js';
import { Route } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show user Dashboard component for /calendar router', () => {

    expect(pathMap['/dashboard']).toBe(Dashboard);
  })
  it('should show event Calendar component for /events router', () => {
    expect(pathMap['/events']).toBe(Calendar);
  })
  it('should show event page for /event/:id router', () => {
    expect(pathMap['/event/:id']).toBe(EventPage);
  })

})