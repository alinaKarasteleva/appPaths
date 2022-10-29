import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import CurrentNav from '../CurrentNav/CurrentNav';
import styles from './layout.module.css'


function Layout() {

   return (
      <div className={styles.wrapper}>
         <header className={styles.header}>

            <Link to={'/'} className={styles.header_links}><button className={styles.header_btns} >Главная</button> </Link>
            <Link to={'personal_area'} className={styles.header_links}><button className={styles.header_btns}>Личный кабинет</button></Link>
            <Link to={'new_path'} className={styles.header_links}><button className={styles.header_btns}>Создать путь</button></Link>
            <Link to={'signUp'} className={styles.header_links}><button className={styles.header_btns} >Зарегистрироваться</button></Link>

            <Link to={'signIn'} className={styles.header_links}><button className={styles.header_btns} >Войти</button></Link>
         </header>

         <CurrentNav />

         <div className={styles.main}>

            <Outlet />

         </div>


         <footer className={styles.footer}>
            this is footer
         </footer>

      </div>
   );
}

export default Layout;