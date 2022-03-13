import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Vitamin renders successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={[ '/vitamin']}>
      <Contact />
    </MemoryRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
