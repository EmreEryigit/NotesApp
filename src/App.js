
import './App.css';
import Form from './components/Form';
import NoteList from './components/NoteList';

function App() {
  return (
       
    <>
  <div className="App-header ">
   <h1>NotesApp</h1>
  </div>
    <div className="container">
       <div className="row">
    
      
      <Form />
      <NoteList />
   
    </div>
    </div>
     
    </>
       
   
  );
}

export default App;
