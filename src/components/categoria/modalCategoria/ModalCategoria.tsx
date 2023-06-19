import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import {Button } from "@material-ui/core"
import {Box, Modal, Typography} from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import './ModalCategoria.css';
import CadastroCategoria from '../cadastroCategoria/CadastroCategoria';
import { FaPlus } from 'react-icons/fa';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      height:400,
      borderRadius:'40px',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #0147017c',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalCategoria () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      
      </Box>
      
      <CadastroCategoria />
      
    </div>
  );

  return (
    <div style={{display:'flex'}}>

        <FaPlus className="txtField"></FaPlus>
        <Box onClick={handleOpen}>
        <Typography className="txtDecorator">Cadastrar Categoria</Typography>
        </Box> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalCategoria