import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evetnt from './Event';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []); //第3引数は初期化時
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addEvent = (e) => {
    e.preventDefault();
    // console.log({ title, body });
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除してもいいですか？'
    );
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  };
  const unCreatable = title === '' || body === '';
  return (
    <div className="container-fluid">
      <h4>イベントフォーム作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}>
          イベント作成
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}>
          全てのイベントを削除
        </button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Evetnt key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
