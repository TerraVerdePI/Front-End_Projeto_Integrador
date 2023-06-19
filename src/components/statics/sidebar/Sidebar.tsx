import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import styled from 'styled-components'
import { Box, Container, Grid, Typography } from '@mui/material'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import Usuario from '../../../model/Usuario'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { buscaId } from '../../../services/Service'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Produto from '../../../model/Produto'
import { toast } from 'react-toastify'
import { addToken } from '../../../store/tokens/Action'
import * as FaIcons from 'react-icons/fa'

const SidebarMenu = styled.div`
  width: 40px;
  height: 100vh;
  background-color: #595b5a;
  position: fixed;
  top: 0;
  left: 0;
  border-radius:0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  margin-right:10px;
  
`

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 2rem;
  font-size: 25px;
  text-decoration: none;
  color: #000000;

`

const Sidebar: React.FunctionComponent = () => {
  const token = useSelector<TokenState, TokenState['tokens']>((state) => state.tokens)
  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    data_nascimento:"",
    cpf: "",
    cnpj: "",
    cep: "",
    endereco: "",
    status_eco: "",
    produto: null
  })

  async function getUsuario() {
    try {
      await buscaId(`/usuarios/${usuario.id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])

  useEffect(() => {
    setUsuario({
      ...usuario,
      senha: '',
    })
  }, [usuario.usuario])

  function logout() {
    
    toast.success('Usuário deslogado com sucesso!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
      });

    dispatch(addToken(''))
    navigate('/login');
  }

  let sideBarComponent;

  if(token !== ''){
    sideBarComponent = (
<Container>
      <Grid container> 
        <Grid item xs={1}>
          <SidebarMenu>
              <div>
              <Typography variant="h5"  className='fonte'>
                <img src="https://i.imgur.com/x9HTU0N.png" alt="" className='imagem' />
              </Typography>
            {SidebarData.map((item, index) => {
              return (
                <MenuItems key={index}>
                  <MenuItemLinks to={item.path}>
                    {item.icon}
                  </MenuItemLinks>
                </MenuItems>
              )
            })}
              </div>
            <MenuItems>
                  <Box onClick={logout}>
                    <FaIcons.FaSignOutAlt className="iconLogout"/>
                 </Box>
                </MenuItems>
          </SidebarMenu>
        </Grid>
        <Grid item xs={10}>

        </Grid>
      </Grid>
    </Container>
    )
  } else {
    sideBarComponent = (null)
  }
  return (
    <>
    {sideBarComponent}
    </>
  )
}

export default Sidebar;
