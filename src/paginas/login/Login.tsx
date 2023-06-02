import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/actions';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Google } from '@mui/icons-material';


function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
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
        token: ''
    })
    
    // state para receber o JSON de conexão do backend
    const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
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
        token: ''
    })

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (respUsuarioLogin.token !== '') {
            dispatch(addToken(respUsuarioLogin.token))
            dispatch(addId(respUsuarioLogin.id.toString()))
            navigate('/home')
        }
    }, [respUsuarioLogin.token])

     // função que envia o formulário para o backend
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        // previne que o formulário atualize a página
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, usuarioLogin, setRespUsuarioLogin)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} style={{
                
                backgroundImage: `url(https://i.imgur.com/fOHICkH.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '120vh', backgroundSize: 'cover', backgroundPosition: 'center'    
            }}>

            </Grid>
            
            <Grid alignItems='center' xs={6}>
            <Grid container direction='row' alignItems='center'>
            <Grid item xs={1}>
            <img src="https://i.imgur.com/RWFhDaM.png" alt="Logo Terra Verde" className='logoImage'/>
            </Grid>
            <Grid item xs={2} style={{marginLeft:20}}>
                <Typography style={{marginBottom:-5}}>
                    Terra 
                </Typography>
                <Typography style={{marginLeft:3}} >
                    Verde
                </Typography>
            </Grid>
            </Grid>
                <Box paddingX={15}>
                    <form onSubmit={onSubmit}>
                        <Box marginBottom={-2}>
                        <Typography style={{marginBottom:-10}} variant='h2' gutterBottom color='textPrimary' component='h2'  className='bemvindo'>
                            SEJA
                        </Typography>
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h2'   className='bemvindo'>
                            BEM VINDO
                        </Typography>
                        </Box>
                        <Box marginTop={5} width={400}>
                        <Typography variant='subtitle2' style={{marginBottom:-15}}>
                            Faça login para continuar</Typography>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth value={usuarioLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}> </TextField>
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth value={usuarioLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} > </TextField>
                        <Link to={''} className='text-decorator-none'>
                        <Typography variant='subtitle2' style={{marginTop:10, display:'flex', justifyContent:'end'}}>
                            Esqueceu sua senha?</Typography>
                            </Link>
                        </Box>
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' className='btnLogin'>
                              Login
                            </Button>

                        </Box>
                    </form>
                    </Box>
                <Box display='flex' justifyContent='center'>
                        <Box marginLeft={1} marginTop={5}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                OU</Typography>
                                <Box display="flex" alignItems="center" justifyContent="center" marginTop={2}>
                            <a href=" " target="_blank">
                                <FacebookIcon style={{ fontSize: 35, color: "black", padding: 10 }} />
                            </a>
                            <a href=" " target="_blank">
                                <Google style={{ fontSize: 35, color: "black", padding: 10 }} />
                            </a>
                            <a href=" " target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "black", padding: 10 }} />
                            </a>
                        </Box>
                        </Box>
                        
                    </Box>
                <Box display='flex' justifyContent='center' marginTop={5}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Ainda não é TerraVerdista?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cadastro'>Crie uma conta</Typography>
                        </Link>
                        
                    </Box>
            </Grid>
            
        </Grid>
    );
}

export default Login;
