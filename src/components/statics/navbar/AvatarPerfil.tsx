import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { buscaId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Usuario from '../../../model/Usuario';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function BadgeAvatars() {
    const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);
const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

const [usuario, setUsuario] = React.useState<Usuario>({
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

React.useEffect(() => {
  getUsuario();
}, []);

React.useEffect(() => {
  setUsuario({
    ...usuario,
    senha: ''
  })
}, [usuario.usuario])
    return (
        <Stack direction="row" spacing={2}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Link to={'/perfil'} style={{textDecoration:'none'}}>
                <img alt="Remy Sharp" src={usuario.foto} style={{width: '3vw', border: '2px solid green', padding: '1px', borderRadius:100}} />
                </Link>
            </StyledBadge>
        </Stack>
    );
}

