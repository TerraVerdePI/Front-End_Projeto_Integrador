import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import './Sobre.css';

function Sobre() {
    return (
        <>
            <Box>
                <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' style={{ fontWeight: 'bold' }}>
                    Sobre o Terra Verde.com
                </Typography>
            </Box>
            <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>

                <Grid item xs={5}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <img src="https://i.imgur.com/DMJSJjx.jpg" alt="Logo" className="img1" />
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <img src="https://i.imgur.com/cOqH7XU.jpg" alt="Fazenda" className='img2'/>
                    </Box>
                </Grid>
                <Grid item xs={7} alignItems={'center'}>
                    <Box paddingX={10} className="margin">

                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>A Missão do Terra Verde</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et nemo laudantium numquam esse omnis unde voluptas. Exercitationem ullam quibusdam modi tenetur iure in quidem et, nihil sunt, totam dolor. </Typography>

                    </Box>
                    <Box paddingX={10} className="margin">

                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Quem Somos Nos?</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et nemo laudantium numquam esse omnis unde voluptas. Exercitationem ullam quibusdam modi tenetur iure in quidem et, nihil sunt, totam dolor. </Typography>

                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Sobre
