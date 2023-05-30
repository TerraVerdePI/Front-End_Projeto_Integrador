import React, { useEffect } from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Perguntas from "../../components/perguntas/Perguntas";

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])
    return (
        < >
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#14c3a2" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={10} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Olá!!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>venda aqui seus alimentos e cursos!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>
                        <Link to="/produtos" className="text-decoration-none">
                        <Button variant="outlined" style={{ borderColor: "#595b5a", backgroundColor: "#7cf49a", color: "#595b5a" }}>
                            Ver Produtos
                        </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://raw.githubusercontent.com/maurilosantos/frontBlog/c5e97073d92e0fdfdce730a3a15870f87457fd01/src/assets/home.svg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='produtos'>
                    <TabProduto />
                </Grid>
            </Grid>
            <Perguntas/>
        </>
    );
}

export default Home;