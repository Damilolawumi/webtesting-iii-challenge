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

describe(' Display Closed if the component', () => {
    test('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    })

    test('it defaults to unlocked and open', () => {
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    });

    test('cannot be closed or opened if it is locked', () => {
        expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/opened/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    })

    test('displays if gate is open/closed and if it is locked/unlocked', () => {
        expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument();
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/unlock gate/i)).not.toBeInTheDocument();
    })

    test('when `locked` or `closed` use the `red-led` class', () => {
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();

        expect(wrapper.queryByText(/closed/i)).toHaveClass('red-led');
        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        expect(wrapper.queryByText(/locked/i)).toHaveClass('red-led');
    })

    test('when `unlocked` or `open` use the `green-led` class', () => {
        expect(wrapper.queryByText(/open/i)).toHaveClass('green-led');
        expect(wrapper.queryByText(/unlocked/i)).toHaveClass('green-led');
    })


});