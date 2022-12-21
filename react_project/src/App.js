import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';
import { getMovieData } from './services/db';

function App() {
const [list,setList]=useState([])
  return (
    <>
      <Header />
      <div className='row'>
        <Form  list={list} setList={setList}/>
        <List list={list} setList={setList}/>
      </div>
    </>
  );
}

export default App;
