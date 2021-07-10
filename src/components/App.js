import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import OperationLogs from './OperationLogs';

const APP_KEY = 'appWithRedux';
//console.log({ AppContext });

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initalState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initalState); //第3引数は初期化時
  // console.log(state, 'in App.js');
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
