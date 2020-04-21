import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Title from './components/title';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Title Rendering', () => {
  const {getByText} = render(<Title />);
  getbyText(/Women Soccer Players' List/i);
});

test('Dark Mode is working', () => {
  const {getByTestID} = render(<Title />);
  getByTestID(/darkmode/i);
})