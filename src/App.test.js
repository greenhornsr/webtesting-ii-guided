import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import App from './App';
import { fireEvent } from '@testing-library/react/dist';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders without errors', () => {
    // console.log('\n****queries: \n', queries)
    // if there are errors rendering the component, the tests will fail.
  });
  it('should show an h2 with "Hello World"', () => {
    const {getByText} = render(<App />);
    getByText(/Hello World/i)
    
  })
  describe('greet button', () => {
    it('should say hello developers', () => {
      const {getByText, queryByText} = render(<App />);
      //find button
      const button = getByText(/greet/i)
      // click it
      fireEvent.click(button)
      // confirm result "hello developer"
      expect(queryByText(/Hello Developers/i)).toBeTruthy();
    })
  })
})




