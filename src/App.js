import logo from '../src/img/happy-new-year-logo.png';
import './App.css';
import Buble from './component/Bubble';
import Balloon from './component/Balloon';
import BalloonStatic from './component/BalloonStatic';

function App() {
  return (
    <div className="App">
      <Balloon/>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <BalloonStatic count={10}/>
      </header>
      
    </div>
  );
}

export default App;
