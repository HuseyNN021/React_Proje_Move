import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';
import { getMovieData } from './services/db';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Save from './components/listLink/listLink';
import ListLink from './components/listLink/listLink';
function App() {
  const [list, setList] = useState([])
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/list' element={<ListLink />}>
    //     </Route>
    //   </Routes>
    //  </BrowserRouter>
    <>
      <Header />
      <div className='row'>
        <Form list={list} setList={setList} />
        <List list={list} setList={setList} />
      </div>
   
    </>
  );
}

export default App;
