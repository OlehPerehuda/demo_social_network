import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ReactApp from './App';

test('renders learn react link', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ReactApp/>, div);
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  ReactDOM.unmountComponentAtNode(div);
});
