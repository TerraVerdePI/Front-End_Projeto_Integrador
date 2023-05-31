import React, { useEffect, useState } from 'react';
import './Parceiros.css'; // Import the CSS file for styling

const Parceiros = () => {
    const myArray = [
      {
        foto: 'https://encolombia.com/wp-content/uploads/2021/11/Tipos-de-Plantas-1.jpg',
        texto: 'texto da foto 1'
      },
      {
        foto: 'https://i.imgur.com/9OZAbB5.png',
        texto: 'texto da foto 2'
      },
      {
        foto: 'https://i.imgur.com/Mg92OR7.png',
        texto: 'texto da foto 3'
      },
      {
        foto: 'https://i.imgur.com/IkRsg1a.png',
        texto: 'texto da foto 4'
      },
      {
        foto: 'https://i.imgur.com/PiWN0y3.png',
        texto: 'texto da foto 5'
      },
      {
        foto: 'https://i.imgur.com/fyfri1v.png',
        texto: 'texto da foto 6'
      },
      ];

    
    const [linkDaImagemAtual, setLinkDaImagemAtual] = useState({
      foto: "https://encolombia.com/wp-content/uploads/2021/11/Tipos-de-Plantas-1.jpg",
      texto: 'texto da foto 1'
    })
    
    const handleImageClick = (link: any) =>{
      setLinkDaImagemAtual(link)
    }

    return (
        <div className="container">
            <div className="column">
                <h3 className="centered-title">Fornecedores Parceiros</h3>

                <div className="card-grid">
                    {myArray.map((link) => (
                          <img className="img" src={link.foto} alt="" onClick={() => handleImageClick(link)} />
                ))}
                </div>
                <p>{linkDaImagemAtual.texto}</p>
            </div>
            <div >
                <img className="imgDireita" src={linkDaImagemAtual.foto} alt="" />
            </div>
        </div>
    );
};

export default Parceiros;