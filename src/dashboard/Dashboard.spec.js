// Test away
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper;

beforeEach ( () => {
    wrapper = rtl.render(<Dashboard/>);
});

describe('Dashboard component', () => {
    test('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    })

    test('shows the controls and display', () => {
      expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
      expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
      expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument();
      expect(wrapper.queryByText(/unlock gate/i)).not.toBeInTheDocument();
    });

});