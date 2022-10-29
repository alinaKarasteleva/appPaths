import React from 'react';
import styles from '../layout.module.css'

function SignIN() {
   return (
      <div>
         
         <div className={styles.sign_title}>Вход</div>

         <form action='' className={styles.sign_form}>

            <input type="text" name="login" placeholder='Логин' required className={styles.sign_inp}/>
            <input type="password" name="password" placeholder='Пароль' required className={styles.sign_inp} />
         
            <button className={styles.sign_btn}>Войти</button>

         </form>

      </div>
   );
}

export default SignIN;