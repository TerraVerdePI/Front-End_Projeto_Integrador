import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import Usuario from '../../model/Usuario';
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [vozTech, setVozTech] = useState(false);
    const [usuario, setUsuario] = useState<Usuario>(
        {
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
            status_eco: ''
        })

        function addText (){
            if(vozTech==false){
                setVozTech(true)
            } else {
                setVozTech(false)
            }
        }
    const [userResult, setUserResult] = useState<Usuario>(
        {
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
            status_eco: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == usuario.senha) {
            cadastroUsuario(`usuarios/cadastrar`, usuario, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
            <Grid container direction='row' alignItems='center'>
            <Grid item xs={1}>
            <img src="https://i.imgur.com/RWFhDaM.png" alt="Logo Terra Verde" className='logoImage'/>
            </Grid>
            <Grid item xs={2} style={{marginLeft:20}}>
                <Typography style={{marginBottom:-5}}>
                    Terra 
                </Typography>
                <Typography style={{marginLeft:3}}>
                    Verde
                </Typography>
            </Grid>
            </Grid>
                <Box paddingX={10}>
                    <Box marginBottom={7}>
                <Typography  gutterBottom color='textPrimary'  align='left' className='textos2'>CRIE UMA CONTA</Typography>
                        <Typography  gutterBottom color='textPrimary' align='left' className='textos3'>Entre para a comunidade mais sustentável do Brasil    </Typography>
                        </Box>
                    <form onSubmit={onSubmit} style={{marginBottom:40}}>
                        
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <TextField value={usuario.data_nascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='data_nascimento' label='Data de Nascimento' variant='outlined' name='data_nascimento' margin='normal' fullWidth />
                        {vozTech == true && <TextField id='voz_tech' label='Código VozTech' variant='outlined' name='vozTech' margin='normal' fullWidth />}
                        
                        
                    </form>
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' className='btnCadastrar'>
                                Criar Conta
                            </Button>
                        <Grid container direction='row' justifyContent='flex-start' style={{marginTop:40}}>
                        <Typography>Já possui uma conta?</Typography>  
                            <Link to='/login' className='text-decorator-none'>
                                <Typography style={{paddingLeft:5, fontWeight:600  }}>Faça Login</Typography>    
                            </Link>
                        </Grid>
                        <Grid container direction='row' justifyContent='center' style={{marginTop:90, marginBottom:5}}>
                        <Typography>Possui um código de cadastro VozTech?</Typography>  
                            <Link to=' ' className='text-decorator-none' onClick={addText}>
                                <Typography style={{paddingLeft:5, fontWeight:600  }}>Clique Aqui</Typography>    
                            </Link>
                        </Grid>
                        </Box>
                        
                </Box>
                
            </Grid>
            <Grid item xs={6} className='imagem2'></Grid>


        </Grid>
    );
}

export default CadastroUsuario;