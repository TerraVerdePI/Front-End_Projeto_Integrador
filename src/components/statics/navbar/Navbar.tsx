import { AppBar, Toolbar, Box, Typography, Grid, Button } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AvatarPerfil from './AvatarPerfil';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { toast } from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  const navigate = useNavigate();

  function logout() {
    
    toast.success('Usuário deslogado com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
      });

    dispatch(addToken(''))
    navigate('/login');
  }

  let navbarComponent;

  if (token !== '') {


    navbarComponent = (
      <AppBar position="static" className="navbar">
        <Toolbar variant="dense">
          <Grid container justifyContent={'space-between'} className='fonte' direction={"row"}>
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="" className='fonte'>
                <img src="https://i.imgur.com/RWFhDaM.png" alt="" className='imagem' onClick={logout}/>
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems={"center"}>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Pagina Inicial
                  </Typography>
                </Box>
              </Link>
              <Link to="/produtos" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Meus Produtos
                  </Typography>
                </Box>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    BlogTV
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Grid direction={"row"} display={"flex"}>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <ShoppingCartSharpIcon color="primary" />
              </Box>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                < NotificationsIcon color="primary" />
              </Box>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Link to='/formularioProduto'>
                <AddCircleSharpIcon color="primary" />
                </Link>
                </Box>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <AvatarPerfil />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  } else {
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
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Pagina Inicial
                  </Typography>
                </Box>
              </Link>
              <Link to="/sobre" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    Sobre nós
                  </Typography>
                </Box>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    P&R
                  </Typography>
                </Box>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Typography variant="h6" className='linha' color="black">
                    BlogTV
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Grid direction={"row"} display={"flex"}>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Link to="/login">
                  <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
                    Entrar
                  </Button>
                </Link>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Link to="/cadastro">
                <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
                  Cadastrar
                </Button>
              </Link>
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