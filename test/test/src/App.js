import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import Routing from './components/rout/Routing';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routing/>
    </BrowserRouter>
    </>
  );
}

export default App;
