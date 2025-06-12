import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Loja from './screens/Loja'
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import Cadastrar from './screens/Register';
import NavBar from './components/NavBar';//ifydtfuygujipkjhgyfdtryughjkl,
//importante (add pelo prof, serve pra afirma as rotas)

import Painel from './screens/Painel';
import PublicLayout from './components/PublicLayout';
import Products from './screens/Products';
import Brand from './screens/Brand';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <div className="App-fundo" alt="fundo"></div>

        <main className="container">
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/loja" element={<Loja />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Cadastrar />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              </Route>

              {/* Layout ADMIN (sem navbar, sem logo) */}
              <Route path="/painel" element={<Painel />}>
                <Route path="products" element={<Products />} />
                <Route path="brand" element={<Brand />} />
              </Route>

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
