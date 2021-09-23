import './Projects.css'
import facingTech from './facing-tech-head.png'

const Projects = () => {
  return(
    <div className='projects'>
      <h1 className='projects__titule'>Projects</h1>
      <div className='projects__conjunto-de-projetos'>
        <div className='projects__facing-tech'>
          <h2 className='projects__facing-tech__titule'><a href='https://www.facingtech.com.br/face-emotions' target='_blank'>Facing Tech</a></h2>
          <p className='projects__facing-tech__subtitule'>Facial Expression Recognition Technologies</p>
          <div className='projects__facing-tech__logo'>
            <a href='https://www.facingtech.com.br/face-emotions' target='_blank'>
              <img className='projects__facing-tech__img' src={facingTech} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
