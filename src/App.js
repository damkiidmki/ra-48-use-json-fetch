import './App.css';
import { nanoid } from 'nanoid';
import Data from './components/Data';

function App() {

  const data = "http://localhost:7070/data";
  const error = "http://localhost:7070/error";
  const loading = "http://localhost:7070/loading";

  return (
    <div className="App">
      <Data key={nanoid(20)} url={data} />
      <Data key={nanoid(20)} url={error} />
      <Data key={nanoid(20)} url={loading} />
    </div>
  );
}

export default App;
