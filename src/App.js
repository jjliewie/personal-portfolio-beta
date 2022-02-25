import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route, 
  HashRouter
} from "react-router-dom";

import { Main } from './pages/Main';
import { Timestable } from './pages/Timestable';

function App() {
  return (
    <main>
  <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/timestable" element={<Timestable/>} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;