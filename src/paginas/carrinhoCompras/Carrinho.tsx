import React, {useEffect} from 'react'
import './Carrinho.css'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography, Box, Button, Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { removeItem } from '../../store/tokens/Action'
import { TokenState } from '../../store/tokens/tokensReducer'
import {toast} from 'react-toastify'

function Carrinho() {

	let navigate = useNavigate();
	let valor = 0
	const dispatch = useDispatch()
	const token = useSelector<TokenState, TokenState["tokens"]>(
			(state) => state.tokens
			);

	useEffect(() => {
			if (token == "") {
			toast.error("Você precisa estar logado")
			navigate("/login")
			}
			}, [token])

	const carrinho = useSelector<TokenState, TokenState['produtos']>(
	(state) => state.produtos
	)

	const contagemItens = {};
	carrinho.forEach(item => {
  if (contagemItens[item.id]) {
    contagemItens[item.id]++;
  } else {
    contagemItens[item.id] = 1;
  }
});
	const carrinhoUnico = carrinho.filter((item, index) => {
  return carrinho.findIndex(obj => obj.id === item.id) === index;
});

  return (
    <>
      <Grid className='container' justifyContent='flex-start' container>
      <Grid justifyContent='center' className='brd-bt' direction='row' item xs={12}>
      <Box className='endAlign'>
          <Typography className='text bold' variant='h4'>Seus Itens</Typography>
					</Box>
          </Grid>
        <Grid justifyContent='center' className='bg-carrinho' direction='row' item xs={12}>
        <Box className="cardProduto" display="flex" justifyContent="space-between" flexDirection="row">
        <Grid xs={2} item>
        <Typography >Imagem</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography >Nome</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography >Descrição</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography >Quantidade</Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography className="bold">Preço</Typography>
        </Grid>
      </Box>
    {carrinhoUnico.map((item, index) => (
      <Box className="cardProduto" display="flex" justifyContent="space-between" alignItems="center"  flexDirection="row" key={index}>
        <Grid xs={2} item>
            <img className="image" src={item.foto} alt="" />
        </Grid>
        <Grid item xs={2}>
            <Typography >{item.nome}</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography>{item.descricao.length > 40 ? item.descricao.substr(0, 40) + '... ' : item.descricao}</Typography>
        </Grid>
        <Grid item xs={2} style={{marginLeft:'100px'}}>
        {contagemItens[item.id] && (
              <Typography> {contagemItens[item.id]}</Typography>
            )}
        </Grid>
        <Grid item xs={2}>
            <Typography className="bold">R$ {item.preco.toFixed(2).replace('.', ',')}</Typography>
        </Grid>
      </Box>
    ))}
          <Box className='valor-total' display='flex' justifyContent='flex-end' alignItems={'flex-end'} flexDirection={'row'}>
            <Box className='mg-rt-20 baseline'>
              <Typography className='bold total' variant='h6'>TOTAL:</Typography>
              <Box>
              <Typography className='bold value' variant='h5'>
							{carrinho.map(item=>{valor += item.preco})}R$ {valor.toFixed(2).replace('.', ',')}</Typography>
            </Box>
            </Box>
            <Button className="btn"
						onClick={() => {
						dispatch(removeItem([]))
						toast.success("Compra Finalizada - Obrigado por comprar conosco!")
						navigate("/loja")
						}}
						>Finalizar Compra</Button>
            
            
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Carrinho