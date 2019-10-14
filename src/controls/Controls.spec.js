// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';


afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Dashboard />);
});

describe('Control component', () => {
    test('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    })

    test('provide buttons to toggle the `closed` and `locked` states', () => {
        expect(wrapper.queryByText(/close gate/i).disabled).toEqual(false);
        expect(wrapper.queryByText(/lock gate/i).disabled).toEqual(true);

        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/open gate/i).disabled).toEqual(false);
    });

    test('buttons text changes to reflect the state the door will be in if clicked', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i).disabled).toEqual(true);

        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();

        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
    })

    test('the closed toggle button is disabled if the gate is locked', () => {
        expect(wrapper.queryByText(/lock gate/i).disabled).toEqual(true);
        expect(wrapper.queryByText(/close gate/i).disabled).toEqual(false);

        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open gate/i).disabled).toEqual(true);
    });

    test('the locked toggle button is disabled if the gate is open', () => {
        expect(wrapper.queryByText(/lock gate/i).disabled).toEqual(true);
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });
});