// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';


afterEach(rtl.cleanup);

let wrapper;

beforeEach( () => {
    wrapper = rtl.render (<Dashboard/>);
});

describe('Control component', () => {
    test('matches the snapshot', () => {
        expect(wrapper.container).toMatchSnapshot();
    })

    
});