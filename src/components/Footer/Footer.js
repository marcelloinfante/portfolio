import './Footer.css'
import BotaoDeTeste from './BotaoDeTeste/BotaoDeTeste'

import linkedin from './redes-sociais/linkedin.png'
import facebook from './redes-sociais/facebook.png'
import instagram from './redes-sociais/instagram.png'
import github from './redes-sociais/github.png'

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer__redes-socias'>
        <a className='footer__linkedin rede-social' href='https://linkedin.com/in/marcelloinfante' target='_blank'><img src={linkedin} /></a>
        <a className='footer__facebook rede-social' href='https://pt-br.facebook.com/marcello.infante.7' target='_blank'><img src={facebook} /></a>
        <a className='footer__instagram rede-social' href='https://www.instagram.com/marcello.infante/' target='_blank'><img src={instagram} /></a>
        <a className='footer__github rede-social' href='https://github.com/marcelloinfante' target='_blank'><img src={github} /></a>
      </div>
      <div className='footer__contatos'>
        <b>CONTATOS:</b><br /><br />
        <b>Email:</b> contato@marcelloinfante.com.br<br />
        <b>Celular:</b> +55(11)95610-7687
      </div>
      <BotaoDeTeste conteudo={'Currículo'} />
      <div className='footer__contato'></div>
    </div>
  )
}

export default Footer
