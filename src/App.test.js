import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setup
 * @returns {ShallowComponent}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
};

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
    const button = findByTestAttr(Wrapper, 'increment-button');
    const titleText = findByTestAttr(Wrapper, 'title-display').text();
    expect(titleText).toBe("Hello Deepak!");
    expect(button.length).toBe(1);
});

test('counter', ()=>{
    const Wrapper = setup();
    const counter = findByTestAttr(Wrapper, 'counter').text();
    expect(counter).toBe("0");
});

test('counter increments on click', ()=>{
    const Wrapper = setup();
    Wrapper.find('button').props().onClick();
    const button = findByTestAttr(Wrapper, "increment-button");
    console.log(button.debug());
    //expect(button).props().onClick();
    const counter = findByTestAttr(Wrapper, 'counter').text();
    expect(counter).toBe("1");
});