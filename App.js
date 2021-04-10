import React from 'react';
import Navigation from './src/config/Navigation';
import { Provider } from 'react-redux'
import store from './src/store';

export default () => <Provider store={store}> <Navigation /></Provider>;
