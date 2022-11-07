import React from 'react';
import { useSelector } from 'react-redux';
import DayContent from './DayContent';
import styles from './paths.module.css'

function PathContent() {

   const days = useSelector(state => state?.currentReducer?.path?.days)
   

   
   return (
      <div>
         <div className={styles.plan_title}>Дни</div>
        
         {days.map(day => {
            return <div key={day.id_day}>
               <DayContent day={day} />
            </div>
         })}




      </div>
   );
}

export default PathContent;