import React from 'react';
import styles from '../layout.module.css'


function SignUP() {
   return (
      <div>
         <div className={styles.sign_title}>Регистрация</div>
         
         <form action="" className={styles.sign_form}>
            <input type="text" name="login" id="" placeholder='Логин' className={styles.sign_inp}/>
            <input type="password" name="password" placeholder='Пароль' required className={styles.sign_inp}/>
            <input type="password" name="repeatPassword" placeholder='Повторите пароль' required className={styles.sign_inp}/>
            <button className={styles.sign_btn}>Зарегистрироваться</button>

         </form>
      </div>
   );
}

export default SignUP;