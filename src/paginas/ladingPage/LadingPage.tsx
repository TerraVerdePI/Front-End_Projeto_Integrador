import React from 'react'
import CarouselHome from '../../components/carousel/CarouselHome'
import Perguntas from '../../components/perguntas/Perguntas'
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto'


function LadingPage() {
    return (
        <>
            <CarouselHome />
            <ListaProduto />
            <Perguntas/>
        </>
    )
}

export default LadingPage
