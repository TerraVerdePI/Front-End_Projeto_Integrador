import React, { useEffect } from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import Perguntas from "../../components/perguntas/Perguntas";
import { toast } from "react-toastify";

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {


            toast.info('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])
    return (
        < >

                <Grid xs={12} className='produtos'style={{marginLeft: '80px'}}>
                    <TabProduto />
                </Grid>
        </>
    );
}

export default Home;