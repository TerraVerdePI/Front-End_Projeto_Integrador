import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css';
import { Grid, Typography, Avatar, Box, Button, Accordion, AccordionDetails, AccordionSummary, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import User from '../../model/Usuario';
import { buscaId, post, put } from '../../services/Service';
import { toast } from 'react-toastify';

function Perfil() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  const [usuario, setUsuario] = useState<User>({
      id: +userId,
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
  });

  async function getUsuario() {
    try {
      await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuario();
  }, []);

  useEffect(() => {
    setUsuario({
      ...usuario,
      senha: ''
    })
  }, [usuario.usuario])

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function atualizar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
      try {
        await put('/usuarios/atualizar', usuario, setUsuario, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Usuário cadastrado com sucesso', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setUsuario({ ...usuario, senha: '' });
        setConfirmarSenha('');
      } catch (error) {
        toast.error('Falha ao cadastrar o usuário, verifique os campos', {
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
    } else {
      toast.error('Os campos de Senha e Confirmar Senha estão diferentes', {
        position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('');
    }
  }

  console.log(usuario);

  return (
    <div className="perfilContainer">
      <div className="perfilBanner">
        <div>
          <h2>{usuario.nome}</h2>
          <p>{usuario.usuario}</p>
          <p>Total de produtos anunciados: {usuario.produto?.length}</p>
        </div>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />
      </div>
      
      <div className="perfilUpdate">

            

            <form onSubmit={atualizar}>
            <div style={{display:'flex', justifyContent:'center', margin:'25px'}}>
      <Typography variant="h5">
              Atualizar Perfil
            </Typography>
            </div>
              <Box
                display={'flex'}
                width={'100%'}
                flexDirection={'column'}
                gap={2}
              >
                <TextField
                  name="nome"
                  label="Nome completo"
                  value={usuario.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="usuario"
                  label="Endereço de e-mail"
                  disabled
                  value={usuario.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="foto"
                  label="URL da foto"
                  value={usuario.foto}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="senha"
                  label="Senha"
                  type="password"
                  value={usuario.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                />
                <TextField
                  name="confirmarSenha"
                  label="Confirmar senha"
                  type="password"
                  value={confirmarSenha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    confirmSenha(event)
                  }
                />
              <Button fullWidth variant={'contained'} type='submit' style={{marginTop:'30px'}}>Atualizar</Button>
              </Box>
            </form>
      </div>    
      </div>
  );
}

export default Perfil;