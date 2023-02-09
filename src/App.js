import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
  return (
    <div className='app__wrapper' >
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;
