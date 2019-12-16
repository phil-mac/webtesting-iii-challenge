// Test away

import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Dashboard from './Dashboard';

test('Close Gate button displays closed indicator', () => {
    const {getByText} = render(<Dashboard />);
    const button = getByText(/close gate/i);

    fireEvent.click(button);
    getByText(/closed/i);
})

test('Open Gate button displays open indicator', () => {
    const {getByText} = render(<Dashboard />);

    const buttonClose = getByText(/close gate/i);
    fireEvent.click(buttonClose);

    const buttonOpen = getByText(/open gate/i);
    fireEvent.click(buttonOpen);
    getByText(/open/i);
})

test('Lock Gate button shows locked indicator when clicked with door closed', () => {
    const {getByText} = render(<Dashboard />);

    const buttonClose = getByText(/close gate/i);
    fireEvent.click(buttonClose);

    const buttonLock = getByText(/lock gate/i);
    fireEvent.click(buttonLock);
    getByText(/locked/i);
})

test('Unlock Gate button shows unlocked indicator when clicked with door closed', () => {
    const {getByText} = render(<Dashboard />);

    const buttonClose = getByText(/close gate/i);
    fireEvent.click(buttonClose);

    const buttonLock = getByText(/lock gate/i);
    fireEvent.click(buttonLock);

    const buttonUnlock = getByText(/unlock gate/i);
    fireEvent.click(buttonUnlock);
    getByText(/unlocked/i);
})