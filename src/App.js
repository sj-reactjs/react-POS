import React from 'react';
import logo from './logo.svg';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import Layout from './lib/components/Layout/Layout';
import appReducers from './lib/reducers';
import './App.css';

const store = createStore(appReducers, applyMiddleware())

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
