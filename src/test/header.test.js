import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import React from 'react';
import renderer from 'react-test-renderer';
import store from "../reduxState/store";

it('Header page renders correctly', () => {
    const tree = renderer
      .create(
        <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
              <Header />
            </BrowserRouter>
          </Provider>
        </React.StrictMode>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });