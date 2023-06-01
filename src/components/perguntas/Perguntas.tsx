import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, styled } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './Perguntas.css';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Typography className='titulo-perguntas' style={{ textAlign: 'center' }}>Perguntas Frequentes</Typography>
      <Grid container direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} >



        <Grid xs={9} className="background">
          <Grid item>
            <Box className='marginQna'>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className="sub-titulo-perguntas">
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
            </Box>
          </Grid>
          <Grid item>
            <Box className='marginQna'>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className="sub-titulo-perguntas">Entrega</Typography>
                  <Typography sx={{ color: 'text.secondary' }} >
                    Como é feita a entrega dos produtos?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography >
                    A entrega dos produtos é feita de acordo com o combinado entre cliente final e produtor. Nesse caso, as opções de entrega são flexíveis e podem ser personalizadas para atender às necessidades específicas do cliente, podendo ser: Encontro Presencial; Correios/Transportadora; Frete Terceirizado.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item>
            <Box className='marginQna'>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className="sub-titulo-perguntas">
                    Pagamento
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }} >
                    O pagamento é feito através da plataforma?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Apesar de ser uma plataforma e-commerce, nós do Terra Verde não efetuamos transações financeiras, deixando a cargo dos envolvidos na negociação a decisão da melhor forma de pagamento. Com tudo, indicamos alguns mecanismos seguros como MercadoPago e PayPal.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item>
            <Box className='marginQna'>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className="sub-titulo-perguntas">Segurança</Typography>
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
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}