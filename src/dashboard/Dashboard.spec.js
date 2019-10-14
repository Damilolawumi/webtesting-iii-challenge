// Test away
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper;

beforeEach ( () => {
    wrapper = rtl.render(<Dashboard/>);
})

describe('Dashboard component', () => {
    
})