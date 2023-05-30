import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import './ListaProduto.css';
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
 
function ListaProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [quantidadeCards, setQuantidadeCards] = useState(9);


  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProdutos()

  }, [produtos.length])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
      <Grid container spacing={2}>
      {
        produtos.slice(0, quantidadeCards).map(produto => (
          <Grid item xs={12} sm={6} md={4} key={produto.id}>
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  Fornecedor: {produto.usuario?.nome}
                </Typography>

              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
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
          </Grid>))
      }
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setQuantidadeCards(quantidadeCards + 9)}
        style={{margin: 10}}
        
      >
          Carregar Mais
      </Button>
      </div>
    </>
  )
}


export default ListaProduto;