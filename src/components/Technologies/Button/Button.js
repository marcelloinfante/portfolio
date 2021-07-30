import './Button.css'

const Button = (props) => {
  const classe = 'button ' + props.className

  return(
    <div className={classe}>
      <p className='button__text'>{props.content}</p>
    </div>
  )
}

export default Button
