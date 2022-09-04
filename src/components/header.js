import style from '../styles/header.module.scss'

const Header = () => {
  return(
  <>
    <header className={style.header}>
        <nav className={style.nav}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about"> ABOUT ME</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </nav>
        <nav className={style.spNav}>
          <li className={style.spNav_item}><a href="#home">HOME</a></li>
          <li className={style.spNav_item}><a href="#about"> ABOUT ME</a></li>
          <li className={style.spNav_item}><a href="#work">WORK</a></li>
          <li className={style.spNav_item}><a href="#contact">CONTACT</a></li>
        </nav>
      </header>
      </>  
      )
}

export default Header;