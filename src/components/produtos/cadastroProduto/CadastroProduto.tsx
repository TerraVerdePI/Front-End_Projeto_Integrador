import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Box } from "@material-ui/core"
import './CadastroProduto.css';
import {useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Usuario from '../../../model/Usuario';
import { addToken } from '../../../store/tokens/actions';
import { Grid } from '@mui/material';
import { toast } from 'react-toastify';

function CadastroProduto() {
 
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<TokenState, TokenState["id"]>(
        (state) => state.id
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            });
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      descricao: '',
      produto: null
    });

        const [produto, setProduto] = useState<Produto>({
          id: +userId,
          nome: '',
          descricao: '',
          foto: '',
          preco: 0,
          validade: '',
          regiao: '',
          fornecedor: '',
          unidade_de_medida: '',
          quantidade: 0,
          categoria: null,
          usuario: null
      })

    const [usuario, setUsuario] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      data_nascimento: '',
      cpf: '',
      cnpj: '',
      cep: '',
      endereco: '',
      status_eco: '',
      produto: null
  })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria,
            usuario: usuario
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
;
        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto atualizado com sucesso", {
                position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            });
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto cadastrada com sucesso", {
                position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            });
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }
    return (
        <Container maxWidth="md" className="topo">
            <form onSubmit={onSubmit}>

                <Typography variant="h4" color="textSecondary" component="h1" align="center" >MEUS PRODUTOS/CADASTRO</Typography>
                <div style={{display:'flex'}}>
                <div className="perfilBanner">
                <img src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                </div>
                <Grid xs={10} className='txtField' justifyContent='space-between'>
                <TextField  name="foto" label="URL da Foto" value={produto.foto} onChange={(event: ChangeEvent<HTMLInputElement>) =>updatedProduto(event)} variant="outlined" margin="normal" fullWidth/>
                <TextField  value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome do Produto" variant="outlined" name="nome" margin="normal" fullWidth />
                <Box display={'flex'} className='boxText'>
                <TextField className='size' value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                <TextField className='size' value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço Unitário" name="preco" variant="outlined" margin="normal" fullWidth/>
                <TextField className='sizeLast' value={produto.unidade_de_medida} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="unidade_de_medida" label="Unidade de Medida" name="unidade_de_medida" variant="outlined" margin="normal" fullWidth/>
                </Box>
                

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                </FormControl>
                <Box display={'flex'} className='boxText'>
                <TextField className='size' value={produto.validade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="validade" label="Validade" name="validade" variant="outlined" margin="normal" fullWidth />
                <TextField className='size' value={produto.regiao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="regiao" label="Região" name="regiao" variant="outlined" margin="normal" fullWidth/>
                <TextField className='sizeLast' value={produto.fornecedor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="fornecedor" label="Fornecedor" name="fornecedor" variant="outlined" margin="normal" fullWidth/>
                </Box>
                </Grid>
                </div>
                
                <TextField className='descricao' multiline rows={12} value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
                <Button type="submit" className='buttonPost' variant="contained" color="primary" fullWidth disabled={categoria.id === 0}>
            {id !== undefined ? 'Atualizar Postagem' : 'Cadastrar Postagem'}
          </Button>
            </form>
            <div className='space'>

            </div>
        </Container>
    )
}
export default CadastroProduto;