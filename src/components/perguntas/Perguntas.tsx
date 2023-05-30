import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
      <Grid container direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <Grid item xs={8}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Qualidade
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Como é feito o controle de qualidade dos produtos comercializados na plataforma?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Após concluir uma compra o consumidor recebe um link de avaliação dos produtos e do produtor, essa avaliação analisa aspectos gerais do alimento. O produtor sobe de nível de acordo com as notas que recebe, aumentando ou diminuindo "seu status eco". Para cursos, a avaliação é feita após o término do curso adquirido.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
        <Grid item>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Entrega</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           Como é feita a entrega dos produtos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A entrega dos produtos é feita de acordo com o combinado entre cliente final e produtor. Nesse caso, as opções de entrega são flexíveis e podem ser personalizadas para atender às necessidades específicas do cliente, podendo ser: Encontro Presencial; Correios/Transportadora; Frete Terceirizado.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Pagamento
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            O pagamento é feito através da plataforma?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Apesar de ser uma plataforma e-commerce, nós do Terra Verde não efetuamos transações financeiras, deixando a cargo dos envolvidos na negociação a decisão da melhor forma de pagamento. Com tudo, indicamos alguns mecanismos seguros como MercadoPago e PayPal. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Segurança</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Como saber se o produto que estou comprando vem de um vendedor confiável?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ao finalizar uma compra o consumidor é convidado a fornecer uma avaliação dos produtos adquiridos e do produtor. Essa avaliação traz uma análise abrangente dos aspectos gerais do alimento, bem como a postura do fornecedor durante o processo de negociação. Essa avaliação desempenha um papel importante no crescimento do produtor, uma vez que seu "status eco" está atrelado as notas recebidas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Grid>
  );
}