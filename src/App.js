import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
return (
    <div className="App">
      <SayMyName name="Matheus" />
      <Pessoa name="Valter" idade="38" profissao="Front-End" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
