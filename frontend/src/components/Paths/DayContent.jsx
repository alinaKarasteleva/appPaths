import React from 'react';
import styles from './paths.module.css'


function DayContent(day) {
   console.log('%cMyProject%cline:6%cday.day.advices', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px', day.day.advices)

   return (
      <div>
         <div className={styles.plan_item}>
            <div className={styles.plan_numder_day}>{day.day.number_day} день</div>

            <div className={styles.plan_time}>Время: {day.day.time_day} мин</div>

            <div className={styles.plan_plan_title}>План:</div>
            <ul>
               {day.day.plans.map(plan => <li>{plan}</li>)}
            </ul>

            <span className={styles.plan_plan_title}>Советы: </span>
            {day.day.advices.length !== 0 ? 
            <ul>
               {day.day.advices.map(advice => <li>{advice}</li>)}
            </ul>
            : <span>На этот день нет советов</span>
            }


         </div>
      </div>
   );
}

export default DayContent;