import './BotaoDeTeste.css';

const iOS = () => {
  const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
  const isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform)
  return(
    isMacLike || isIOS
  )
}

let classeDoBotaoConteudo
let classeDoBotaoBackground
if(iOS()) {
  classeDoBotaoConteudo = 'dispositivo-ios__conteudo'
  classeDoBotaoBackground = 'dispositivo-ios__background'
}

const BotaoDeTeste = (props) => {
    return(
    <div className='botao-de-teste'>
      <a className={'botao-de-teste__conteudo ' + classeDoBotaoConteudo} target='_blank' href='https://drive.google.com/file/d/1soel62Gh-aku3jCfT-SCKuo7VVGGLaFH/view?usp=sharing'>
        <div className={'botao-de-teste__background ' + classeDoBotaoBackground}></div>
        <p className='botao-de-teste__texto'>{props.conteudo}</p>
      </a>
    </div>
  )
}

export default BotaoDeTeste;
