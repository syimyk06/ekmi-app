import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/clients" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
