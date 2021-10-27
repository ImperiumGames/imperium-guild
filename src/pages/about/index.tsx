import { Typography } from '@mui/material'
import { Accordion, Card } from 'components'

export default function About() {
  return (
    <Card>
      <Typography variant="h1">About</Typography>
      <Accordion header="123" text="345" />
      <Accordion header="123" text="345" />
      <Accordion header="123" text="345" />
    </Card>
  )
}
