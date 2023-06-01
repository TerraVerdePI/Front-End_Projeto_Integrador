import React from 'react'
import CarouselHome from '../../components/carousel/CarouselHome'
import Perguntas from '../../components/perguntas/Perguntas'
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto'
import Parceiros from '../parceiros/Parceiros'
import Sobre from '../sobre/Sobre'
import { Box, Grid } from '@material-ui/core'


function LadingPage() {
    return (
        <>
            <Grid container direction='row' justifyContent='center'>
            <Box >
                <Grid item xs className='large'>
            <CarouselHome />
            </Grid>
            </Box>
            <Box>
            <ListaProduto exibirBotoes={false} />
            </Box>
            <Box>
            <Parceiros />
            </Box>
            <Box>
            <Sobre />
            </Box>
            <Box>
            <Perguntas />
            </Box>
            </Grid>
        </>
    )
}

export default LadingPage

