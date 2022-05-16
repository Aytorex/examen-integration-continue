import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

// test("click on enter", () => {
//     const inputElement = document.getElementById("input");
//     //act(() => {
//     fireEvent.change(inputElement, {target: {value:'a'}})
//     fireEvent.keyDown(domNode, {key: 'Enter', code: 'Enter', charCode: 13})
//     //})
//     const outputElement = document.querySelector("ul>li:nth-child(1)");
//     console.log(outputElement)
//     //expect()
//
// })