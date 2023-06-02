import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Categoria from '../../../model/Categoria';
import Usuario from '../../../model/Usuario';
import { busca, post, put } from '../../../services/Service';
import { addToken } from '../../../store/tokens/actions';
import './PaginaProduto.css'
import Button from '@mui/material/Button';

import Produto from '../../../model/Produto';

function PaginaProduto() {
    const navigate = useNavigate();

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    );

    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        produto: null,
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
        usuario: null,
    });

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
        produto: null,
    });

    useEffect(() => {
        if (token === '') {
            alert('É necessário um token para acessar esta página. Por favor, faça login.');
            navigate('/login');
        }
    }, []);

    async function getCategorias() {
        try {
            await busca('/categorias', setCategorias, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Token expirado, faça login novamente.');
                dispatch(addToken(''));
                navigate('/login');
            }
        }
    }

    async function getPostById(id: string) {
        await busca(`/produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        getCategorias();
        if (id !== undefined) {
            getPostById(id);
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
            usuario: usuario,
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
                alert('Produto atualizado com sucesso!');
                navigate('/produtos');
            } catch (error) {
                alert('Erro ao atualizar o produto.');
            }
        } else {
            try {
                await post('/produtos', produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Produto cadastrado com sucesso!');
                navigate('/produtos');
            } catch (error) {
                alert('Erro ao cadastrar o produto.');
            }
        }
    }

    const [value, setValue] = React.useState<number | null>(3);

    return (
        <>
 
            <Grid container spacing={2} className="product-container">
                <Grid item xs={12} md={6} className="product-image">
                    <img src={produto.foto} alt={produto.nome} />
                </Grid>
                <Grid item xs={12} md={6} className="text-container">
                    <Typography variant="h4" className="text-title" component="h1" gutterBottom>
                        {produto.nome}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {produto.descricao}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        R$ {produto.preco.toFixed(2)}
                    </Typography>
                    
                            <button className="btn-comprar"  >
                                Comprar
                            </button>
                            <button className="btn btn-2 btn-sep icon-cart" >
                                Adicionar ao Carrinho
                            </button>
                        
                        <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Typography component="legend">Classificação</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        </Box>
                        <Typography variant="body2" component="p">
                          Fornecedor: {produto.usuario?.nome}
                      </Typography>
                      <Typography variant="body2" component="p">
                          Região próxima: {produto.regiao}
                      </Typography>
                </Grid>
            </Grid>

        </>

    );

}

export default PaginaProduto;
