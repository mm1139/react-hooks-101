import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';

import Events from './Events';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []); //第3引数は初期化時
  // console.log(state, 'in App.js');
  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
