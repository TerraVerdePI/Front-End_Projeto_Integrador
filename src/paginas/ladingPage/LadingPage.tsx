import React from 'react'
import CarouselHome from '../../components/carousel/CarouselHome'
import Perguntas from '../perguntas/Perguntas'
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto'
import Parceiros from '../parceiros/Parceiros'
import Sobre from '../sobre/Sobre'
import { Box, Grid } from '@material-ui/core'
import './LadingPage.css'
import { Margin } from '@mui/icons-material'


function LadingPage() {
    return (
        <>
            
            <CarouselHome />
            
            <ListaProduto exibirBotoes={false} />

            <Parceiros />

            <Sobre />
            
            <Perguntas />
        </>
    )
}

export default LadingPage

