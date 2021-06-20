import React, { useEffect } from 'react';
import './App.css';
import ChildHook from '../ChildComponent/childHook';
import { useDispatch, useSelector } from 'react-redux';
// import ProcessingWorker from '../processingWorker/processing.worker'
import RFC from 'rfc';

// const worker = new ProcessingWorker();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // worker.postMessage({
    //   type: 'processMessage',
    //   value: 'Hello from main thread'
    // })

    // worker.addEventListener('message', (e) => {
    //   console.log(e.data)
    // })
  }, [])
  const payload = useSelector(state => state.value)
  return (
    <div className="App">
      Webworker POC
      <button onClick={() => dispatch({ type: 1, payload: payload + 1 })}>dabo {payload}</button>
      <ChildHook p={payload} />
      <RFC value="hussain"/>
    </div>
  );
}

export default App;
