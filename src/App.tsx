import React from 'react';
import './App.css';
import { TextArea } from './common/components';
import { CreateNote } from './modules/';

function App() {
  return (
    <div className="App">
       <CreateNote/>
    </div>
  );
}

export default App;
