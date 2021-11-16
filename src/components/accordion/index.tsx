import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionProps,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export interface Accordion extends Partial<AccordionProps> {
  header: string
  text: string
}

export function Accordion({ header, text, ...rest }: Accordion) {
  return (
    <MuiAccordion {...rest}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
      </AccordionDetails>
    </MuiAccordion>
  )
}
