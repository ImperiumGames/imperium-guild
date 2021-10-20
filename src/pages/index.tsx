import aquila from 'assets/img/aquila.svg'
import { Card } from 'components/card'
import Image from 'next/image'
export default function Main() {
  return (
    <Card>
      <Image src={aquila} alt="aquila" />
    </Card>
  )
}
