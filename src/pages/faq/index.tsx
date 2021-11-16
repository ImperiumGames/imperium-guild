import { Typography } from '@mui/material'
import { Accordion, Card } from 'components'
import { faq } from 'constant'

export default function Faq() {
  return (
    <Card elevation={0}>
      <Typography variant="h1">FAQ</Typography>
      {faq.map((entry, index) => (
        <Accordion key={index} header={entry.question} text={entry.answer} />
      ))}
    </Card>
  )
}
