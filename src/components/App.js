import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []); //第3引数は初期化時
  // console.log(state, 'in App.js');
  return (
    <AppContext.Provider value={'Hello, I am a Privider'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
