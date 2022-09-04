import style from '../styles/footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return(
  <>
   <footer className={style.footer}>
<div className={style.f_img}>
     <Image src={"/top.png"} width={150} height={150} alt="topへ" />
</div>
    <div className={style.f_nav}>
      <div className={style.f_nav_item}>HOME</div>
      <div className={style.f_nav_item}>WORK</div>
      <div className={style.f_nav_item}>ABOUT</div>
      <div className={style.f_nav_item}>CONTACT</div>
      <div className={style.f_nav_item2}>© 2022 Nao fujita</div>
    </div>
   </footer>
      </>  
      )
}

export default Footer;