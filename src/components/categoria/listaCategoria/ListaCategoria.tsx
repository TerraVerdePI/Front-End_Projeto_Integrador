import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import './ListaCategoria.css';
import Categoria from '../../../model/Categoria';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    const [quantidadeCards, setQuantidadeCards] = useState(9);

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])


    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }


    useEffect(() => {
        getCategorias()
    }, [categorias.length])


    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Grid container spacing={2}>

                    {
                        categorias.slice(0, quantidadeCards).map(categoria => (
                            <Box m={2} >
                                <Card style={{margin: 10, marginTop: 15}} variant="outlined">
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Categoria
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {categoria.descricao}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Box display="flex" justifyContent="center" mb={1.5} >

                                            <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                                <Box mx={1}>
                                                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                        atualizar
                                                    </Button>
                                                </Box>
                                            </Link>
                                            <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                                <Box mx={1}>
                                                    <Button variant="contained" size='small' color="secondary">
                                                        deletar
                                                    </Button>
                                                </Box>
                                            </Link>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Box>
                        ))
                    }
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setQuantidadeCards(quantidadeCards + 9)}
                    style={{ margin: 10 }}

                >
                    Carregar Mais
                </Button>
            </div>
        </>
    );
}


export default ListaCategoria;