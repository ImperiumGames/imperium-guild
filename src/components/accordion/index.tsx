import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export interface Accordion {
  header: string
  text: string
}

export function Accordion({ header, text }: Accordion) {
  return (
    <MuiAccordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
      </AccordionDetails>
    </MuiAccordion>
  )
}
