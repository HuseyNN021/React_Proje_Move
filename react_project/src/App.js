import './App.css';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/list/List';

function App() {
  return (
    <>
      <Header />
      <div className='row'>
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
