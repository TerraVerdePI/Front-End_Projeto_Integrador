import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
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

  const handleProdutoClick = (produtoId: number) => {
    navigate(`/produtos/${produtoId}`);
  };




  return (
    <>
      
      {token !== '' ? <Input placeholder="Buscar Alimentos, Produtores, Cursos, e muito mais ..." 
      type="text"
      value={termoBusca}
      onChange={(e) => setTermoBusca(e.target.value)}
      className='input-busca'
      size="md"
      
      /> : <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'center'} style={{marginBottom:'30px'}}><Typography className='subTitle'>Escolha dos Consumidores</Typography><Typography className='title'>Nossos Produtos</Typography></Box>}
      
      <Box display="flex" justifyContent="center">
      <Grid container spacing={2} xs={12} >
      {
        produtos
        .filter((produto) => produto.nome.toLowerCase().includes(termoBusca.toLowerCase()))
        .slice(0, quantidadeCards)
        .map(produto => (
          <Grid item xs={12} sm={6} md={4} key={produto.id}>
          <Box m={2}>
            <Card variant="outlined" style={{ height: "100%", maxHeight: '490px', minHeight:'490px' }}>
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <Typography color="textSecondary" gutterBottom>
                  {produto.categoria?.descricao}
                </Typography>
                <Link to={`/produtos/${produto.id}`} className="text-decorator-none">
                <img    className='foto-produto'
                        src={produto.foto}
                        alt={produto.nome}
                        style={{ width: "100%", marginTop: 10, height: 200, objectFit: "cover", marginBottom: 10 }}

                      />
                <Typography style={{textAlign: 'center' }} variant="h5" component="h2" className='produtoNome'>
                  {produto.nome}
                </Typography>
                </Link>
                <Typography variant="body2" component="p">
                        {produto.descricao.length > 60 ? produto.descricao.substr(0, 60) + '... ' : produto.descricao}
                        <Link to={`/produtos/${produto.id}`} className="text-decorator-none">
                          <Typography variant="body2" className='saiba' >
                            Saiba mais
                          </Typography>             
                        </Link>
                      </Typography>
                      <Typography variant="body2" component="p">
                          Fornecedor: {produto.usuario?.nome}
                      </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="flex-end" >
                        <Typography variant="h6" component="p" >
                          Preço: R$ {produto.preco}
                        </Typography>
                        <button className='btn-12'
                          
                        >
                          <span>CLIQUE AQUI</span>
                          <span>COMPRAR</span>
                        </button>
                      </Box>
                      

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
      </Box>
      <div  style={{textAlign: 'center'}}>
      <Button
        onClick={() => setQuantidadeCards(quantidadeCards + 9)}
        style={{margin: 10}}
        className='botao-carregarMais'
      >
          Mais produtos
      </Button>
      </div>
    </>
  )
}


export default ListaProduto;
