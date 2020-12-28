import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('first test', ()=>{
   const Wrapper = shallow(<App />);
   //console.log(Wrapper.debug());
});