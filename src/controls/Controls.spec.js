// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach( () => {
    wrapper = rtl.render (<Controls/>);
});

describe('Control component', () => {
    
});