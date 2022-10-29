import React from 'react';
import styles from './paths.module.css'

function Plan() {
   return (
      <div>
         <div className={styles.plan_title}>Дни</div>

         <div className={styles.plan_item}>
            <div className={styles.plan_day}>1 день</div>
            <div className={styles.plan_text}>Здесь что-то будет, но пока что не понятно что</div>
         </div>


         <div className={styles.plan_item}>
            <div className={styles.plan_day}>2 день</div>
            <div className={styles.plan_text}>Здесь что-то будет, но пока что не понятно что</div>
         </div>

         



      </div>
   );
}

export default Plan;