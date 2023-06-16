import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/statics/footer/Footer';
import './App.css'
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import LadingPage from './paginas/ladingPage/LadingPage';
import PaginaProduto from './components/produtos/produtoPage/PaginaProduto';
import Perfil from './paginas/perfil/Perfil';
import Sobre from './paginas/sobre/Sobre';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/statics/sidebar/Sidebar';
import { TokenState } from './store/tokens/tokensReducer';



function App() {
  return (
    < >
      
      <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
      <Navbar />

        <div className="apptsx" style={{ minHeight: '100vh', width: 'calc(100vw-200px)', marginLeft: '40px' }}>
        <Sidebar />
        <Routes>
        
          <Route path='/' element={<LadingPage />} />

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

          <Route path='/perfil' element={<Perfil />} />

          <Route path='/sobre' element={<Sobre />} />

          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route path="/categorias" element={<ListaCategoria />} />

          <Route path="/produtos" element={<ListaProduto />} />

          <Route path="/formularioProduto" element={<CadastroProduto />} />

          <Route path="/formularioProduto/:id" element={<CadastroProduto />} />

          <Route path="/formularioCategoria" element={<CadastroCategoria />} />

          <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          <Route path="/produtos/:id" element={<PaginaProduto />} />
          
        </Routes>
        
        </div>
      <Footer />
        
        
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
