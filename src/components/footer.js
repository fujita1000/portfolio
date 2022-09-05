import style from '../styles/footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return(
  <>
   <footer className={style.footer}>
    <Link href="https://portfolio-fujita.vercel.app/#home">
<div className={style.f_img}>
     <Image src={"/top.png"} width={150} height={150} alt="topへ" />
</div></Link>
    <div className={style.f_nav}>
      <div className={style.f_nav_item}><Link href="https://portfolio-fujita.vercel.app/#home"><a>HOME</a></Link></div>
      <div className={style.f_nav_item}><Link href="https://portfolio-fujita.vercel.app/#work"><a>WORK</a></Link></div>
      <div className={style.f_nav_item}><Link href="https://portfolio-fujita.vercel.app/#about"><a>ABOUT ME</a></Link></div>
      <div className={style.f_nav_item}><Link href="https://portfolio-fujita.vercel.app/#skill"><a>SKILL</a></Link></div>
      <div className={style.f_nav_item}><Link href="./contact"><a>CONTACT</a></Link></div>
      <div className={style.f_nav_item2}>© 2022 Nao fujita</div>
    </div>
   </footer>
      </>  
      )
}

export default Footer;