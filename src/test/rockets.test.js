import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../reduxState/store';
import Rockets from '../components/rockets';
import { fetchRocket, reserveRocket } from '../reduxState/rockets/rocketSlice';

it('Rocket page renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Rocket redux state tests', () => {
  it('should Reserve Rocket payload send correct', () => {
    const expectedPayload = {
      payload: '9D1B7E0',
      type: 'rockets/reserveRocket',
    };
    const actualPayload = reserveRocket('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });
  it('Rockets fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchRocket(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
