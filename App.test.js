import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup
 * @returns {ShallowComponent}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('first test', ()=>{
   const Wrapper = setup();
   //console.log(Wrapper.debug());
   const appComponent = findByTestAttr(Wrapper, 'component-app');
   expect(appComponent.length).toBe(1);
}); 

test('button renders', ()=>{
    const Wrapper = setup();
    const button = findByTestAttr(Wrapper, 'increment-button');
    expect(button.length).toBe(1);
});

test('title display', ()=>{
    const Wrapper = setup();
    const button = findByTestAttr(Wrapper, 'title-display');
    expect(button.length).toBe(1);
});