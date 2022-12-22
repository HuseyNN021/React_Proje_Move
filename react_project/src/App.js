import {useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import ListLink from './components/listLink/listLink';
function App() {
  const [list, setList] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<ListLink />}>
        </Route>
      </Routes>
      <Header />
      <div className='row'>
        <Form list={list} setList={setList} />
        <List list={list} setList={setList} />
      </div>


    </BrowserRouter>


  );
}

export default App;
