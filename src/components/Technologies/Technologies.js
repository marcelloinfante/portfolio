import './Technologies.css'
import Button from './Button/Button'
import Deck from './Deck/Deck'

const Technologies = () => {
  return(
    <div className='technologies'>
      <h1 className='technologies__titule'>Technology Stack</h1>
      <div className='technologies__buttons'>
        <Button className='front-end' content='Front-end' />
        <Deck estado={'Front-end'}/>
        <Button className='back-end' content='Back-end'  />
        <Deck estado={'Back-end'}/>
        <Button className='boas-praticas' content='Good Practices' />
        <Deck estado={'Boas Práticas'}/>
      </div>
    </div>
  )
}

export default Technologies
