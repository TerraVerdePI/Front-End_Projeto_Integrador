import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import './ListaProduto.css';
import Produto from '../../../model/Produto';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Input from '@mui/joy/Input';

function ListaProduto({ exibirBotoes = true }) {
  const [produtos, setProdutos] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [quantidadeCards, setQuantidadeCards] = useState(9);
  const [termoBusca, setTermoBusca] = useState('');

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        'Authorization': token
      },
      params: {
        nome: termoBusca
      }
    })
  }

  useEffect(() => {

    getProdutos()

  }, [termoBusca])


  return (
    <>
      
      
      <Input placeholder="Buscar Produtos" variant="soft" color="info"
      type="text"
      value={termoBusca}
      onChange={(e) => setTermoBusca(e.target.value)}
      className='input-busca'
      size="md"
      
      />
  
      <Grid container spacing={2}>
      {
        produtos
        .filter((produto) => produto.nome.toLowerCase().includes(termoBusca.toLowerCase()))
        .slice(0, quantidadeCards)
        .map(produto => (
          <Grid item xs={12} sm={6} md={4} key={produto.id}>
          <Box m={2} >
            <Card variant="outlined" style={{ height: "100%" }}>
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <img
                        src={produto.foto}
                        alt={produto.nome}
                        style={{ width: "100%", marginTop: 10, height: 200, objectFit: "cover", marginBottom: 10 }}

                      /> 
                <Typography style={{textAlign: 'center' }} variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography variant="body2" component="p">
                        {produto.descricao.length > 100 ? produto.descricao.substr(0, 100) + '... ' : produto.descricao}
                        <Link to={`/produto/${produto.id}`} className="text-decorator-none">
                          <Typography variant="body2" color="primary">
                            Saiba mais
                          </Typography>
                        </Link>
                      </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.descricao}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" component="p">
                          Preço: {produto.preco}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                        >
                          Comprar
                        </Button>
                      </Box>
                      <Typography variant="body2" component="p">
                          Fornecedor: {produto.usuario?.nome}
                      </Typography>

              </CardContent>
              {exibirBotoes && (
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
              )}
            </Card>
          </Box>
          </Grid>))
      }
      </Grid>
      <div className='botao-carregarMais' style={{textAlign: 'center'}}>
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
