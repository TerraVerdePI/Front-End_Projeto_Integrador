import React from 'react';
import Navbar from './components/statics/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/statics/footer/Footer';
import './App.css'
import Login from './paginas/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import LadingPage from './paginas/ladingPage/LadingPage';
import PaginaProduto from './components/produtos/produtoPage/PaginaProduto';

function App() {
  return (
    < >
      
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        
        <Routes>

          <Route path='/' element={<LadingPage />} />

          <Route path='/login' element={<Login />} />

          <Route path='/home' element={<Home />} />

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
        <Footer />
        
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
