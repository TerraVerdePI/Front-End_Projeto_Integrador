import { AppBar, Toolbar, Box, Typography, Grid, Button } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

const settings = [
    {
        nome: 'Perfil',
        link: ''
    },
    {
        nome: 'Cadastrar Produto',
        link: '/formularioProduto'
    },
    {
        nome: 'Cadastrar Categoria',
        link: '/formularioCategoria'
    },
    {
        nome: 'Recomendações',
        link: ''
    },
]

const pages = [
    {
        nome: 'Inicio',
        link: '/home'
    },
    {
        nome: 'Meus Produtos',
        link: '/cadastroProduto'
    },
    {
        nome: 'Minhas Categorias',
        link: '/categorias'
    },
    {
        nome: 'BlogTV',
        link: ''
    }

    
]


function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();

  function logout() {
    alert('UsuÃ¡rio deslogado com sucesso');
    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

  if(token !== '') {

    
    navbarComponent = (
<AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte' direction={"row"}>
          <Box style={{ cursor: 'pointer' }}>
  <Typography variant="h5" color="" className='fonte'>
    <img src="https://i.imgur.com/RWFhDaM.png" alt="" className='imagem' />
  </Typography>
</Box>
            <Box display="flex" justifyContent="center" alignItems={"center"}>
              <Link to="/home" style={{ textDecoration: 'none'}}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Pagina Inicial
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagens" style={{ textDecoration: 'none'}}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Sobre nós
                  </Typography>
                </Box>
              </Link>
              <Link to="/temas" style={{ textDecoration: 'none'}}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6"className='linha' color="black">
                    P&R
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioTema"  style={{ textDecoration: 'none'}}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6"className='linha' color="black">
                    BlogTV
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Grid direction={"row"} display={"flex"}>
            <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
  <Link to="/perfil">
    <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
      Entrar
    </Button>
  </Link>
</Box>
                <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={logout}>
  <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
    Cadastrar
  </Button>
</Box>
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;