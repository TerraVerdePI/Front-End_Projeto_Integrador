import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import {useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../model/Categoria';
import Produto from '../../../model/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Usuario from '../../../model/Usuario';
import { addToken } from '../../../store/tokens/actions';

function CadastroProduto() {
    const navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )
    const dispatch = useDispatch()

    const { id } = useParams<{ id: string }>();

    // buscando o id dentro do REDUX
    const [categorias, setCategorias] = useState<Categoria[]>([])

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
        if(token === ''){ 
          alert('Ta tirando né??? sem token não rola')
          navigate('/login')
        }
      }, [])
    
      async function getCategorias() {
        try {
          await busca('/categorias', setCategorias, {
            headers: {
              Authorization: token,
            },
          });
        } catch (error: any) {
          if (error.toString().contains('403')) {
            alert('Token expirado, logue novamente');
            dispatch(addToken(''))
            navigate('/login');
          }
        }
      }
    
      async function getPostById(id: string) {
        await busca(`/produtos/${id}`, setProduto, {
          headers: {
            Authorization: token
          }
        })
      }
    
      useEffect(() => {
        getCategorias();
        if(id !== undefined) {
          getPostById(id)
        }
      }, []);
    
      function updatedProduto(event: ChangeEvent<HTMLInputElement>) {
        setProduto({
          ...produto,
          [event.target.name]: event.target.value,
          categoria: categoria,
        });
      }
    
      useEffect(() => {
        setProduto({
          ...produto,
          categoria: categoria,
          usuario: usuario
        });
      }, [categoria]);
    
      async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    
        if (id !== undefined) {
          try {
            await put('/produtos', produto, setProduto, {
              headers: {
                Authorization: token,
              },
            });
            alert('foi - atualização')
            navigate('/produtos')
          } catch (error) {
            alert('deu erro');
          }
        } else {
          try {
            await post('/produtos', produto, setProduto, {
              headers: {
                Authorization: token,
              },
            });
            alert('foi - cadastro')
            navigate('/produtos')
          } catch (error) {
            alert('deu erro');
          }
        }
      }
    return (
        <Container maxWidth="md" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" color="textSecondary" component="h1" align="center" >MEUS PRODUTOS/CADASTRO</Typography>
                <div style={{display:'flex'}}>
                <div className="perfilBanner">
                <img src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                </div>
                <div className='txtField'>
                <TextField  name="foto" label="URL da Foto" value={produto.foto} onChange={(event: ChangeEvent<HTMLInputElement>) =>updatedProduto(event)} variant="outlined" margin="normal" fullWidth/>
                <TextField  value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome do Produto" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField className='size' value={produto.quantidade} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="quantidade" label="Quantidade" name="quantidade" variant="outlined" margin="normal" fullWidth />
                <TextField className='size' value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço Unitário" name="preco" variant="outlined" margin="normal" fullWidth/>
                <TextField className='sizeLast' value={produto.unidade_de_medida} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="unidade_de_medida" label="Unidade de Medida" name="unidade_de_medida" variant="outlined" margin="normal" fullWidth/>
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
                </div>
                </div>
                
                <TextField className='descricao' value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={categoria.id === 0}>
            {id !== undefined ? 'Atualizar Postagem' : 'Cadastrar Postagem'}
          </Button>
            </form>
            <div className='space'>

            </div>
        </Container>
    )
}
export default CadastroProduto;