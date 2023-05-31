import { AppBar, Toolbar, Box, Typography, Grid, Button } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <AppBar position="static" className="navbar">
                <Toolbar variant="dense">
                    <Grid container justifyContent={'space-between'} className='fonte' direction={"row"}>
                        <Box style={{ cursor: 'pointer' }}>
                            <Typography variant="h5" color="" className='fonte'>
                                <img src="https://i.imgur.com/RWFhDaM.png" alt="" className='imagem' />
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
                                <Button className='botao' color="secondary" variant="contained" style={{ marginLeft: 'auto' }}>
                                    Cadastrar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;