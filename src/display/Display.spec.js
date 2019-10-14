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

});