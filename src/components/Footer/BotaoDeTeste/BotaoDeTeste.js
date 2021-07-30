import './BotaoDeTeste.css';

const BotaoDeTeste = (props) => {
    return(
    <div className='botao-de-teste'>
      <a className='botao-de-teste__conteudo' target='_blank' href='https://drive.google.com/file/d/1mxxjjiFuFvRE-6QL5nhuYy8fCnP971Gk/view?usp=sharing'>
        <div className='botao-de-teste__background'></div>
        <p className='botao-de-teste__texto'>{props.conteudo}</p>
      </a>
    </div>
  )
}

export default BotaoDeTeste;
