import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';
import Movie from './components/movies/movie';

function App() {
  return (
    <>
      <Header/>
      <div className='row'>
        <Form/>
        <List/>
        </div>
        <Movie/>
    </>
  );
}

export default App;
