import Link from 'next/link'
import style from '../styles/header.module.scss'

const Header = () => {
  return(
  <>
    <header className={style.header}>
        <nav className={style.nav}>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#home"><a>HOME</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#about"><a>ABOUT ME</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#work"><a>WORK</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#skill"><a>SKILL</a></Link></li>
          <li className={style.spNav_item}><Link href="/contact"><a>CONTACT</a></Link></li>
        </nav>
        <nav className={style.spNav}>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#home"><a>HOME</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#about"><a>ABOUT ME</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#work"><a>WORK</a></Link></li>
          <li className={style.spNav_item}><Link href="https://portfolio-fujita.vercel.app/#skill"><a>SKILL</a></Link></li>
          <li className={style.spNav_item}><Link href="/contact"><a>CONTACT</a></Link></li>
        </nav>
      </header>
      </>  
      )
}

export default Header;