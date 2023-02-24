import './index.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
    

function App() {
  const [toDo, setToDo] = useState([]);
  return (
    <div className="App">
      <Form toDo={ toDo } setToDo={ setToDo } />
      <Display toDo={ toDo } />
    </div>
  );
}

export default App;