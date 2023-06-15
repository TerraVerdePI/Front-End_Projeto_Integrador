import React, { useEffect, useState } from 'react';
import './Parceiros.css'; // Import the CSS file for styling

const Parceiros = () => {
    const myArray = [
      {
        foto: 'https://i.imgur.com/u2i29FU.png',
        texto: 'É um espaço dedicado à conexão entre pessoas, comunidades e instituições para compartilhar demandas e necessidades públicas. Acredita-se na importância da participação cidadã e no poder do diálogo para construir uma sociedade mais justa e inclusiva. Através da plataforma, é possível compartilhar informações sobre infraestrutura, saúde, educação, segurança e muito mais, promovendo a transparência e a colaboração na resolução de problemas. Junte-se a eles e faça parte dessa rede engajada em tornar as demandas públicas em realidade.'
      },
      {
        foto: 'https://i.imgur.com/ypoSIvr.png',
        texto: 'É comprometida em facilitar o acesso ao crédito personalizado e acessível para produtores rurais e empresas do agronegócio. Sua missão é fornecer serviços financeiros abrangentes, incluindo empréstimos, financiamentos, consultoria e seguros agrícolas, tudo adaptado às necessidades específicas de cada cliente. Com uma equipe de especialistas em agronegócio, está pronta para ajudar os produtores a prosperar e alcançar seus objetivos financeiros. Junte-se a eles e desfrute dos benefícios de uma parceria sólida e confiável para impulsionar o sucesso no campo.'
      },
      {
        foto: 'https://i.imgur.com/2fj5c9Q.png',
        texto: 'Conecta produtores a insumos agropecuários de alta qualidade, impulsionando o agronegócio com soluções inovadoras e sustentáveis. Elimina intermediários tradicionais e oferece suporte técnico especializado para aumentar a eficiência e produtividade das atividades agrícolas. Trabalha com uma ampla gama de produtos, desde sementes e fertilizantes até defensivos agrícolas, sempre priorizando a qualidade e o sucesso dos clientes. Contar com essa empresa é impulsionar o negócio e enfrentar os desafios do campo com confiança.'
      },
      {
        foto: 'https://i.imgur.com/mSyTK7P.png',
        texto: 'É referência na fabricação e fornecimento de equipamentos agrícolas de alta tecnologia. Sua missão é desenvolver equipamentos inovadores que aumentam a eficiência e produtividade no campo. Do projeto à fabricação, prioriza a qualidade, durabilidade e desempenho de seus produtos. Oferece uma ampla linha de tratores, colheitadeiras e implementos agrícolas especializados, todos projetados para atender às necessidades dos agricultores modernos. Com tecnologia avançada e suporte técnico especializado, está pronta para impulsionar a produção agrícola e levar os negócios a um novo patamar.'
      },
      {
        foto: 'https://i.imgur.com/sFiHVWy.png',
        texto: 'Se dedica a oferecer cursos especializados em agroecologia, capacitando produtores e interessados em práticas agrícolas sustentáveis. Aborda temas como manejo orgânico, conservação de recursos naturais, biodiversidade e técnicas de cultivo sustentáveis. Seus cursos combinam teoria e prática, proporcionando conhecimentos valiosos e habilidades essenciais para uma agricultura mais sustentável.'
      },
      {
        foto: 'https://i.imgur.com/kA7Hjim.png',
        texto: 'A renomada Universidade Federal é reconhecida por sua excelência acadêmica em ciências agrárias. Oferece cursos de graduação, pós-graduação e pesquisa nas áreas da agricultura, agroecologia e afins. Comprometida com a formação de profissionais qualificados, a universidade proporciona um ambiente de aprendizado enriquecedor, com corpo docente experiente e infraestrutura de ponta. Além disso, promove a interação com a comunidade agrícola por meio de projetos de extensão, contribuindo para o desenvolvimento sustentável e a inovação no setor agropecuário. Junte-se a nós e faça parte de uma instituição comprometida com a excelência acadêmica e a transformação do agronegócio.'
      },
      ];

    
    const [linkDaImagemAtual, setLinkDaImagemAtual] = useState({
      foto: "https://i.imgur.com/u2i29FU.png",
      texto: 'É um espaço dedicado à conexão entre pessoas, comunidades e instituições para compartilhar demandas e necessidades públicas. Acredita-se na importância da participação cidadã e no poder do diálogo para construir uma sociedade mais justa e inclusiva. Através da plataforma, é possível compartilhar informações sobre infraestrutura, saúde, educação, segurança e muito mais, promovendo a transparência e a colaboração na resolução de problemas. Junte-se a eles e faça parte dessa rede engajada em tornar as demandas públicas em realidade.'
    })
    
    const handleImageClick = (link: any) =>{
      setLinkDaImagemAtual(link)
    }

    return (
      
        <div className="container">
          
            <div className="column">
            <h2 className="centered-title">Fornecedores Parceiros</h2>
                <div className="card-grid">
                    {myArray.map((link) => (
                          <img className="img" src={link.foto} alt="" onClick={() => handleImageClick(link)} />
                ))}
                </div>
                <div className='textoParceiro'>
                <p>{linkDaImagemAtual.texto}</p>
                </div>
            </div>
            <div >
                <img className="imgDireita" src={linkDaImagemAtual.foto} alt="" />
            </div>
        </div>
    );
};

export default Parceiros;