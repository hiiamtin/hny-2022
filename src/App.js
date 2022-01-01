import { Routes, Route, Navigate } from "react-router-dom";
import logo from '../src/img/happy-new-year-logo.webp';
import './App.css';
import Balloon from './component/Balloon';
import BalloonStatic from './component/BalloonStatic';
import HappyNewYear2022 from "./pages/HappyNewYear2022";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/:name" element={<HappyNewYear2022 />} />
        <Route path="/NotFound" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
        <Route path="*" element={<Navigate to="/NotFound" />} />
      </Routes>
    </div >
  );
}

function Home() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>สวัสดีปีใหม่นะครับ</p>
        <BalloonStatic {...{
          count: 5,
          message: []
        }} />
      </header>
      <Balloon />
    </>
  )
}

export default App;
